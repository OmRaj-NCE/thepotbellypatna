import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

import SEO from "../components/seo/SEO";
import { menu } from "../data/menu";
import { site } from "../data/site";
import { useMediaQuery } from "../hooks/useMediaQuery";
import MenuNav from "../components/menu/MenuNav";
import MenuCategoryBlock from "../components/menu/MenuCategoryBlock";
import type { FilterValue } from "../components/menu/DietFilter";
import styles from "./Menu.module.css";

/* ------------------------------------------------------------
   The Menu page.
   Desktop: every category expanded, sticky nav acts as a
   scroll-spy index.
   Mobile: accordion — one category open at a time.
   ------------------------------------------------------------ */

const MOBILE_QUERY = "(max-width: 1023px)";

export default function Menu() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const reduceMotion = useReducedMotion();

  const [filter, setFilter] = useState<FilterValue>("all");
  const [activeId, setActiveId] = useState<string>(menu[0].id);
  const [openId, setOpenId] = useState<string | null>(menu[0].id);

  /* ---------- Compute visible categories from the filter ---------- */

  const visibleCategories = useMemo(() => {
    if (filter === "all") return menu;

    return menu
      .map((cat) => {
        const groups = cat.groups
          .map((group) => ({
            ...group,
            items: group.items.filter((item) => item.diet === filter),
          }))
          .filter((group) => group.items.length > 0);

        return { ...cat, groups };
      })
      .filter((cat) => cat.groups.length > 0);
  }, [filter]);

  const visibleIds = visibleCategories.map((cat) => cat.id);

  /* Keep activeId pointed at a category that still exists. */
  useEffect(() => {
    if (!visibleIds.includes(activeId)) {
      setActiveId(visibleIds[0] ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  /* Keep openId valid when the filter changes. */
  useEffect(() => {
    if (!isMobile) return;
    if (openId && !visibleIds.includes(openId)) {
      setOpenId(visibleIds[0] ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, isMobile]);

  /* ---------- Scroll spy (desktop only) ---------- */

  const spyLock = useRef(false);

  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      if (spyLock.current) return;

      const offset = 180;
      let current = visibleIds[0];

      for (const id of visibleIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
      }

      if (current) setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, visibleIds]);

  /* ---------- Selection ---------- */

  const handleSelect = (id: string) => {
    setActiveId(id);

    if (isMobile) {
      setOpenId(id);
    }

    spyLock.current = true;
    window.setTimeout(() => {
      spyLock.current = false;
    }, 700);

    const el = document.getElementById(id);
    if (!el) return;

    window.requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  /* ---------- Render ---------- */

  return (
    <article className={styles.page}>
      <SEO
        title="Menu — The Potbelly, Patna"
        description="The complete menu at The Potbelly, Patna — starters, small plates, quick bites, platters, large plates, biryanis and beverages. Cooked in the Bihari tradition."
        path="/menu"
      />

      <header className={styles.pageHead}>
        <div className="container">
          <p className="eyebrow">The Menu</p>

          <h1 className={`display-2 ${styles.title}`}>
            A walk through
            <em className="display-italic"> the kitchen</em>.
          </h1>

          <p className={`lead ${styles.lead}`}>
            Seven sections — starters, small plates, quick bites, platters,
            large plates, biryanis and beverages. Everything on this page is
            served as written. All prices in ₹.
          </p>
        </div>
      </header>

      <MenuNav
        categories={visibleCategories.map(({ id, name }) => ({ id, name }))}
        activeId={activeId}
        onSelect={handleSelect}
        filter={filter}
        onFilterChange={setFilter}
      />

      <div className={`container ${styles.blocks}`}>
        {visibleCategories.length === 0 ? (
          <p className={styles.empty}>No dishes match this filter.</p>
        ) : (
          visibleCategories.map((cat, i) => (
            <MenuCategoryBlock
              key={cat.id}
              category={cat}
              index={menu.findIndex((c) => c.id === cat.id) + i - i}
              open={isMobile ? openId === cat.id : true}
              interactive={isMobile}
              onToggle={() => setOpenId(openId === cat.id ? null : cat.id)}
            />
          ))
        )}
      </div>

      <footer className={styles.pageFoot}>
        <div className={`container ${styles.pageFootInner}`}>
          <div className={styles.pageFootCopy}>
            <p className="eyebrow">Reservations</p>
            <h2 className={`display-4 ${styles.pageFootTitle}`}>
              Reserve a table at The Potbelly.
            </h2>
            <p className={styles.pageFootBody}>
              Tables can be reserved in advance. Call us directly or place a
              request through the site.
            </p>
          </div>

          <div className={styles.pageFootActions}>
            <Link to="/reservation" className={styles.pageFootBtn}>
              Reserve a Table
            </Link>
            <a href={site.phoneHref} className={styles.pageFootLink}>
              {site.phone}
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}