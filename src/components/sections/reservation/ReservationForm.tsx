import { useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, Check, Loader2 } from "lucide-react";

import Field from "../../forms/Field";
import { site } from "../../../data/site";
import styles from "./ReservationForm.module.css";

/* ============================================================
   Reservation form
   ------------------------------------------------------------
   - Client-side validation on blur and on submit.
   - Focus moves to the first invalid field on submit.
   - Loading / success / error states are all handled.
   - NO BACKEND IS CONNECTED. See `submitReservation` below for
     the single integration point.
   ============================================================ */

type FormValues = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: FormValues = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  specialRequest: "",
};

/* ------------------------------------------------------------
   submitReservation — BACKEND INTEGRATION POINT
   ------------------------------------------------------------
   This site is not yet connected to a reservation backend.
   The function below simulates a network delay so the UI can
   exercise its loading / success / error states.

   To connect a real backend, replace the body of this function
   with something like:

       const res = await fetch("/api/reservations", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(values),
       });
       if (!res.ok) throw new Error("Reservation request failed");

   The form component itself does not need any other change.
   ------------------------------------------------------------ */

async function submitReservation(_values: FormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1200));
}

/* ------------------------------------------------------------
   Validation
   ------------------------------------------------------------ */

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+\d][\d\s\-()]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.date) {
    errors.date = "Please choose a date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(`${values.date}T00:00:00`);
    if (Number.isNaN(chosen.getTime())) {
      errors.date = "Please choose a valid date.";
    } else if (chosen < today) {
      errors.date = "Please choose a date from today onward.";
    }
  }

  if (!values.time) {
    errors.time = "Please choose a time.";
  }

  if (!values.guests) {
    errors.guests = "Please enter the number of guests.";
  } else {
    const n = Number(values.guests);
    if (!Number.isInteger(n) || n < 1 || n > 20) {
      errors.guests = "Please enter a number between 1 and 20.";
    }
  }

  return errors;
}

/* ------------------------------------------------------------
   Component
   ------------------------------------------------------------ */

export default function ReservationForm() {
  const reduceMotion = useReducedMotion();
  const formId = useId();

  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({}); 
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const successRef = useRef<HTMLDivElement>(null);

  /* Field IDs — stable, and unique per form instance */
  const ids = {
    name: `${formId}-name`,
    phone: `${formId}-phone`,
    email: `${formId}-email`,
    date: `${formId}-date`,
    time: `${formId}-time`,
    guests: `${formId}-guests`,
    specialRequest: `${formId}-special`,
  } as const;

  /* Today's date, as YYYY-MM-DD, for the date input's min attribute */
  const todayStr = new Date().toISOString().slice(0, 10);

  /* ---------- Update + blur ---------- */

  const update = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));

    /* Clear the error for this field once the user starts fixing it. */
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

    const markTouched = (key: keyof FormValues) => {
    /* Validate this one field on blur. */
    const fieldErrors = validate({ ...values });
    setErrors((prev) => ({ ...prev, [key]: fieldErrors[key] }));
  };

  /* ---------- Submit ---------- */

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      /* Focus the first invalid field. */
      const firstKey = (
        ["name", "phone", "email", "date", "time", "guests"] as const
      ).find((k) => nextErrors[k]);
      if (firstKey) {
        document.getElementById(ids[firstKey])?.focus();
      }
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    try {
      await submitReservation(values);
      setStatus("success");
      setValues(EMPTY);

      /* Move focus to the success panel so screen readers announce it. */
      window.setTimeout(() => successRef.current?.focus(), 50);
    } catch (err) {
      setStatus("error");
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  /* ---------- Reset ---------- */

    const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setSubmitError(null);
    setStatus("idle");
  };

  /* ---------- Render ---------- */

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="reservation-form-title"
    >
      <div className={`container ${styles.inner}`}>
        <h2 id="reservation-form-title" className="visually-hidden">
          Reservation request form
        </h2>

        <AnimatePresence mode="wait" initial={false}>
          {status === "success" ? (
            <motion.div
              key="success"
              ref={successRef}
              tabIndex={-1}
              className={styles.success}
              role="status"
              aria-live="polite"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.successIcon} aria-hidden="true">
                <Check size={22} strokeWidth={1.6} />
              </div>

              <p className={styles.successLabel}>Request noted</p>

              <h3 className={`display-3 ${styles.successTitle}`}>
                Thank you — but please call to confirm.
              </h3>

              <p className={styles.successBody}>
                This site is not yet connected to the restaurant's
                reservation system. Your request has been recorded only in
                your browser and has not been sent anywhere.
              </p>

              <p className={styles.successBody}>
                To confirm your booking, please call the restaurant directly.
              </p>

              <div className={styles.successActions}>
                <a href={site.phoneHref} className={styles.primaryBtn}>
                  Call {site.phone}
                </a>
                <button
                  type="button"
                  className={styles.ghostBtn}
                  onClick={reset}
                >
                  Submit another request
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className={styles.form}
              onSubmit={onSubmit}
              noValidate
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              aria-busy={status === "submitting"}
            >
              <p className={styles.formEyebrow}>Your details</p>

              <div className={styles.grid}>
                <Field
                  id={ids.name}
                  label="Name"
                  value={values.name}
                  onChange={(v) => update("name", v)}
                  onBlur={() => markTouched("name")}
                  autoComplete="name"
                  required
                  error={errors.name}
                  className={styles.spanFull}
                />

                <Field
                  id={ids.phone}
                  label="Phone"
                  type="tel"
                  inputMode="tel"
                  value={values.phone}
                  onChange={(v) => update("phone", v)}
                  onBlur={() => markTouched("phone")}
                  autoComplete="tel"
                  required
                  error={errors.phone}
                  hint="Include the country code if calling from outside India."
                />

                <Field
                  id={ids.email}
                  label="Email"
                  type="email"
                  inputMode="email"
                  value={values.email}
                  onChange={(v) => update("email", v)}
                  onBlur={() => markTouched("email")}
                  autoComplete="email"
                  required
                  error={errors.email}
                />

                <Field
                  id={ids.date}
                  label="Date"
                  type="date"
                  value={values.date}
                  onChange={(v) => update("date", v)}
                  onBlur={() => markTouched("date")}
                  min={todayStr}
                  required
                  error={errors.date}
                />

                <Field
                  id={ids.time}
                  label="Time"
                  type="time"
                  value={values.time}
                  onChange={(v) => update("time", v)}
                  onBlur={() => markTouched("time")}
                  required
                  error={errors.time}
                />

                <Field
                  id={ids.guests}
                  label="Guests"
                  type="number"
                  inputMode="numeric"
                  value={values.guests}
                  onChange={(v) => update("guests", v)}
                  onBlur={() => markTouched("guests")}
                  min="1"
                  max="20"
                  required
                  error={errors.guests}
                  hint="Between 1 and 20. For larger groups, please call."
                />

                <Field
                  id={ids.specialRequest}
                  label="Special request"
                  textarea
                  rows={4}
                  value={values.specialRequest}
                  onChange={(v) => update("specialRequest", v)}
                  placeholder="Allergies, seating preference, celebration — anything we should know."
                  className={styles.spanFull}
                />
              </div>

              {status === "error" && submitError && (
                <div className={styles.errorBanner} role="alert">
                  <AlertCircle size={16} strokeWidth={1.6} aria-hidden="true" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className={styles.actions}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2
                        size={16}
                        strokeWidth={1.6}
                        className={styles.spinner}
                        aria-hidden="true"
                      />
                      Sending request…
                    </>
                  ) : (
                    "Send request"
                  )}
                </button>

                <p className={styles.disclaimer}>
                  By submitting, you acknowledge that this request is not yet
                  transmitted to the restaurant. Please call to confirm.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}