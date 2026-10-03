/* ============================================================
   THE POTBELLY — PATNA
   The Menu
   ------------------------------------------------------------
   Every dish, description, price and diet classification.
   The UI reads from this file only — no dish information is
   ever written inside a component.
   ============================================================ */

export type Diet = "veg" | "non-veg";

export type MenuItem = {
  name: string;
  description?: string;
  /** Whole rupees, as supplied. */
  price: number;
  diet: Diet;
};

export type MenuGroup = {
  /** Optional. Some categories (Quick Bites, Biryanis) have no sub-grouping. */
  title?: string;
  /** Optional diet badge next to the group title (e.g. "Vegetarian", "Meat"). */
  diet?: Diet;
  items: MenuItem[];
};

export type MenuCategory = {
  /** Used as the DOM id and the anchor target. */
  id: string;
  name: string;
  intro: string;
  groups: MenuGroup[];
};

/* ------------------------------------------------------------ */

export const menu: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    intro:
      "Small bites that open the meal — fritters, pakoras and dal pockets, most served with the house chutneys and a chokha.",
    groups: [
      {
        title: "Vegetarian",
        diet: "veg",
        items: [
          {
            name: "Phataka Fries",
            price: 185,
            diet: "veg",
            description:
              "Thick-cut potato fries, bell pepper-tomato giarre, housemade chutneys",
          },
          {
            name: "Saboodana Basket",
            price: 240,
            diet: "veg",
            description: "Tapioca puffs, parwal chokha, tomato chutney",
          },
          {
            name: "Pyaaz & Chana Dal Kachri",
            price: 240,
            diet: "veg",
            description:
              "Onion-chana dal flat pakoras, parwal chokha, tomato & coriander chutneys",
          },
          {
            name: "Pakora Basket",
            price: 240,
            diet: "veg",
            description:
              "Assorted fritters of baigan, aloo, saboodana & pyaaz, housemade chutneys",
          },
          {
            name: "Baggia (Urad / Chana)",
            price: 285,
            diet: "veg",
            description:
              "Spiced dal stuffed in rice flour pockets, tomato chokha, coriander chutney",
          },
        ],
      },
      {
        title: "Non-Vegetarian",
        diet: "non-veg",
        items: [
          {
            name: "Keema Phataka Fries",
            price: 320,
            diet: "non-veg",
            description:
              "Thick-cut potato fries, spiced mutton mince, housemade chutneys",
          },
          {
            name: "Macchi Goli",
            price: 380,
            diet: "non-veg",
            description: "Minced Betki fish pakora, mini khasta breads",
          },
          {
            name: "Keema Goli (Urad / Chana)",
            price: 385,
            diet: "non-veg",
            description: "Spiced mutton mince balls, mini khasta breads",
          },
          {
            name: "Meat Pakora Basket",
            price: 385,
            diet: "non-veg",
            description:
              "Assorted fritters of chicken & mutton, housemade chutneys",
          },
          {
            name: "Fish Chokha on Marua Roti",
            price: 385,
            diet: "non-veg",
            description:
              "Mashed fish on crispy millet pooris, housemade chutneys",
          },
          {
            name: "Phish Phingers",
            price: 450,
            diet: "non-veg",
            description: "Crispy fried fish, phataka fries, garlic chutney",
          },
        ],
      },
    ],
  },

  {
    id: "small-plates",
    name: "Small Plates",
    intro:
      "Shared plates and baskets built for the middle of the table — pooris, parathas, cutlets and chana, plated to be passed around.",
    groups: [
      {
        title: "Vegetarian",
        diet: "veg",
        items: [
          {
            name: "Ghugni Chooda",
            price: 240,
            diet: "veg",
            description:
              "Black chana in garam masala gravy, roasted poha, ol (yam) pickle, parwal chokha",
          },
          {
            name: "Aloo Chop",
            price: 285,
            diet: "veg",
            description:
              "Spiced potato cutlets, bun, saboodana pakoras, tomato & coriander chutneys",
          },
          {
            name: "Poori Basket",
            price: 320,
            diet: "veg",
            description:
              "Assorted pooris of marua (finger millets), spinach, onion & sattu, seethaphal (pumpkin) sabzi, housemade chokha, ol (yam) pickle, teesi chutney, raita",
          },
          {
            name: "Parontha Basket",
            price: 420,
            diet: "veg",
            description:
              "Assorted parathas of sattu (roasted gram flour), aloo & onion, seethaphal (pumpkin) sabzi, ol (yam) pickle, raita",
          },
        ],
      },
      {
        title: "Non-Vegetarian",
        diet: "non-veg",
        items: [
          {
            name: "Keema Ghugni",
            price: 360,
            diet: "non-veg",
            description:
              "Black chana, spiced mutton mince, roasted poha, ol (yam) pickle, parwal chokha",
          },
          {
            name: "Keema Aloo Chop",
            price: 385,
            diet: "non-veg",
            description:
              "Minced mutton-potato cutlets, bun, saboodana pakoras, tomato & coriander chutneys",
          },
          {
            name: "Dehati Fish and Masala Chips",
            price: 520,
            diet: "non-veg",
            description:
              "Lightly fried fish, masala chips, housemade chutneys",
          },
          {
            name: "Masala Jhinga",
            price: 485,
            diet: "non-veg",
            description: "Spicy prawns, makhi roti, salad",
          },
        ],
      },
    ],
  },

  {
    id: "quick-bites",
    name: "Quick Bites",
    intro:
      "Maggi, toasts, rolls and a burger — the everyday side of the menu, available through the day.",
    groups: [
      {
        items: [
          {
            name: "Mirch Masala Maggi",
            price: 240,
            diet: "veg",
            description: "Maggi with spiced chilli masala",
          },
          {
            name: "Dhamaka Maggi",
            price: 240,
            diet: "veg",
            description: "Maggi with veggies, masala, herbs",
          },
          {
            name: "Mushroom Maggi",
            price: 260,
            diet: "veg",
            description: "Maggi with mushrooms, light spices",
          },
          {
            name: "Keema Maggi",
            price: 320,
            diet: "non-veg",
            description: "Maggi with spiced mutton keema",
          },
          {
            name: "Mirchi Cheese Toast",
            price: 240,
            diet: "veg",
            description: "Melted cheese, chilli, housemade salsa",
          },
          {
            name: "Herb Veg Sandwich",
            price: 260,
            diet: "veg",
            description:
              "Basil spread, three-pepper capsicum, mushroom, cheese",
          },
          {
            name: "Dhaniya Chicken Sandwich",
            price: 285,
            diet: "non-veg",
            description: "Coriander spread, pepper chicken, housemade salsa",
          },
          {
            name: "Paneer Roll",
            price: 320,
            diet: "veg",
            description:
              "Spiced paneer & onions wrapped in a soft paratha, housemade chutneys",
          },
          {
            name: "Kali Mirch Chicken Roll",
            price: 340,
            diet: "non-veg",
            description:
              "Pepper chicken wrapped in a soft paratha, housemade chutneys",
          },
          {
            name: "Bihari Burger",
            price: 420,
            diet: "non-veg",
            description:
              "Chicken patty, minced mutton keema, desi fries, garlic chutney",
          },
        ],
      },
    ],
  },

  {
    id: "platters",
    name: "Platters",
    intro:
      "The centre of the menu. Slow-cooked khada masala, litti folded with sattu, and mutton sealed in earthen pots — all served to be shared.",
    groups: [
      {
        title: "Vegetarian",
        diet: "veg",
        items: [
          {
            name: "Ranchi ka Pulao",
            price: 340,
            diet: "veg",
            description:
              "Aubergine, lentil, peanuts mixed pulao rice served with garlic potatoes, ol pickle, teesi (flex seed) chutney and aloo pudina raita",
          },
          {
            name: "Tarkari Thali",
            price: 340,
            diet: "veg",
            description:
              "Vegetarian platter of channa dal, a pumpkin based Bihari preparation served with stuffed dal kachoris, ol pickle and boondi raita",
          },
          {
            name: "Tehri",
            price: 340,
            diet: "veg",
            description:
              "A special Bihari pulao rice preparation served with aubergine mash, ol pickle and aloo pudina raita",
          },
        ],
      },
      {
        title: "Meat",
        diet: "non-veg",
        items: [
          {
            name: "Khada Masala Chicken with Lachha Paratha | Rice | Poori",
            price: 450,
            diet: "non-veg",
            description:
              "Chicken in thick spicy gravy served with lachha paratha | rice and boondi raita",
          },
          {
            name: "Khada Masala Mutton with Lachha Paratha | Rice | Poori",
            price: 540,
            diet: "non-veg",
            description:
              "Mutton in spicy gravy served with lachha paratha | rice and boondi raita",
          },
          {
            name: "Litti Chicken",
            price: 450,
            diet: "non-veg",
            description:
              "Trademark Bihar dish of whole wheat balls stuffed with spiced sattu served with khada masala chicken and aubergine chokha",
          },
          {
            name: "Litti Mutton",
            price: 550,
            diet: "non-veg",
            description:
              "Trademark Bihar dish of whole wheat balls stuffed with spiced sattu served with khada masala mutton and aubergine chokha",
          },
          {
            name: "Mutton Chaamp",
            price: 550,
            diet: "non-veg",
            description:
              "Mutton chaamp in thick gravy served with tawa mirchi paratha",
          },
          {
            name: "Ahuna Mutton",
            price: 550,
            diet: "non-veg",
            description:
              "Traditional preparation of mutton slow cooked in ahunas (earthern pots), served with roasted flattened rice (poha), flaky parathas",
          },
        ],
      },
    ],
  },

  {
    id: "large-plates",
    name: "Large Plates",
    intro:
      "Main courses built around fish and prawns — mustard, poppy seed and shrimp, served with rice and pakoras.",
    groups: [
      {
        title: "Seafood",
        diet: "non-veg",
        items: [
          {
            name: "Sarson Machhli",
            price: 520,
            diet: "non-veg",
            description: "Mustard fish, rice, palak & baigan pakoras, salad",
          },
          {
            name: "Steamed Sarson Machhli",
            price: 520,
            diet: "non-veg",
            description:
              "Steamed mustard fish, rice flour rotis of spinach-garlic, housemade chokhas & chutneys",
          },
          {
            name: "Posta Dana Machhli",
            price: 520,
            diet: "non-veg",
            description:
              "Steamed fish in poppy seeds gravy, rice flour rotis of spinach-garlic, housemade chokhas & chutneys",
          },
          {
            name: "Jhinga Machhli",
            price: 520,
            diet: "non-veg",
            description: "Spicy shrimp curry, rice, aloo & palak pakoras",
          },
        ],
      },
    ],
  },

  {
    id: "biryanis",
    name: "Biryanis",
    intro:
      "Slow cooked in earthen pots — vegetables, jackfruit, chicken, fish and a yakhni-style mutton.",
    groups: [
      {
        items: [
          {
            name: "Veg Biryani",
            price: 550,
            diet: "veg",
            description: "Vegetable biryani slow cooked in earthen pot",
          },
          {
            name: "Kathal Biryani",
            price: 600,
            diet: "veg",
            description: "Jackfruit biryani slow cooked in earthen pot",
          },
          {
            name: "Chicken Biryani",
            price: 650,
            diet: "non-veg",
            description: "Chicken biryani slow cooked in earthen pot",
          },
          {
            name: "Machhli Biryani",
            price: 650,
            diet: "non-veg",
            description: "Fish biryani slow cooked in earthen pot",
          },
          {
            name: "Mutton Biryani (Yakhni)",
            price: 750,
            diet: "non-veg",
            description:
              "Yakhni style mutton biryani slow cooked in earthen pot",
          },
        ],
      },
    ],
  },

  {
    id: "beverages",
    name: "Beverages",
    intro:
      "Desi coolers, lemonades and iced teas — sattu, lassi, aam panna, and a full range of brewed iced teas.",
    groups: [
      {
        title: "Desi Coolers",
        diet: "veg",
        items: [
          {
            name: "Sattu Cooler (Salty / Sweet)",
            price: 180,
            diet: "veg",
            description:
              "Roasted gram flour drink, naturally high in protein",
          },
          {
            name: "Lassi (Salty / Sweet)",
            price: 225,
            diet: "veg",
          },
          {
            name: "Aam Panna (Seasonal)",
            price: 225,
            diet: "veg",
          },
        ],
      },
      {
        title: "Lemonades",
        diet: "veg",
        items: [
          { name: "Fresh Lemonade", price: 185, diet: "veg" },
          { name: "Mirchi Masala Lemonade", price: 185, diet: "veg" },
          { name: "Apple Lemonade", price: 225, diet: "veg" },
        ],
      },
      {
        title: "Iced Teas",
        diet: "veg",
        items: [
          { name: "Cinnamon Iced Tea", price: 285, diet: "veg" },
          { name: "Apple Cinnamon Iced Tea", price: 285, diet: "veg" },
          { name: "Mixed Fruit Iced Tea", price: 285, diet: "veg" },
          { name: "Rose Iced Tea", price: 285, diet: "veg" },
          { name: "Nettle Lemongrass Iced Tea", price: 285, diet: "veg" },
          {
            name: "Rhododendron & Tulsi Iced Tea",
            price: 285,
            diet: "veg",
          },
        ],
      },
    ],
  },
];