function getBudgetCategory(price) {
  const numericPrice = parseInt(price.replace(/[^\d]/g, ""), 10);

  if (numericPrice < 500) return "Under 500";
  if (numericPrice <= 1000) return "Under 500 to 1000";
  if (numericPrice <= 2000) return "Under 1000 to 2000";
  if (numericPrice <= 3000) return "Under 2000 to 3000";
  return "Above 3000";
}

const products = [

  {
    title: "Courtyard Collection - 250 Grams Set of 2 Dry Fruits",
    category: ["Courtyard Collection", getBudgetCategory("₹649")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹649/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm & Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1780399764/COURTYARD-PK02-CaAl-SMALL_q77plq.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-250-grams-set-of-2-dry-fruits",
    weight: "Product Net Weight : 250gm",
    sku: "SKU : COURTYARD-PK02-CaAl-SMALL"
  },

  {
    title: "Courtyard Collection - 375 Grams Set of 3 Dry Fruits",
    category: ["Courtyard Collection", getBudgetCategory("₹799")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm & Raisins 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1780399776/COURTYARD-PK03-CaAlRa-SMALL_uxkut0.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-375-grams-set-of-3-dry-fruits",
    weight: "Product Net Weight : 375gm",
    sku: "SKU : COURTYARD-PK03-CaAlRa-SMALL"
  },

  {
    title: "Courtyard Collection - 495 Grams Set of 4 Dry Fruits",
    category: ["Courtyard Collection", getBudgetCategory("₹999")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Raisins 125gm & Pistachios 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1780399797/COURTYARD-PK04-CaAlPiRa-SMALL_lfvv0q.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-495-grams-set-of-4-dry-fruits",
    weight: "Product Net Weight : 495gm",
    sku: "SKU : COURTYARD-PK04-CaAlPiRa-SMALL"
  },

  {
    title: "Courtyard Collection - 745 Grams Set of 6 Dry Fruits",
    category: ["Courtyard Collection", getBudgetCategory("₹1879")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹1879/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Raisins 125gm, Pistachios 120gm, Walnuts 100gm & Dates 150gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1780399820/COURTYARD-PK06-CaAlRaWaPiDa-SMALL_b1dvad.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-745-grams-set-of-6-dry-fruits",
    weight: "Product Net Weight : 745gm",
    sku: "SKU : COURTYARD-PK06-CaAlRaWaPiDa-SMALL"
  },
  
  {
    title: "Almonds, Cashews Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹499")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm and Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777965152/DSC-1591_copy_rsc9wk.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-pack",
    weight: "Product Net Weight : 250gm",
    sku: "SKU : RF-PET-PK02-CaAl-SMALL"
  },

  // {
  //   title: "Roasted Dry Fruits Gift Pack",
  //   category: ["Dry Fruits Gift Pack", getBudgetCategory("₹599")],
  //   price: "<span class=b2b>Bulk Price</span> ₹599/-</span>",
  //   moq : "<span class=b2b>MOQ = 50 Box</span>",
  //   description: "Description : Black Pepper Cashews 125gm and Peri Peri Almonds 125gm.",
  //   image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777965329/DSC-1577_copy_w0vyrw.jpg",
  //   link: "https://www.rawfruit.com/products/roasted-cashew-almonds",
  //   weight: "Product Net Weight : 250gm",
  //   sku: "SKU : RF-PET-PK02-BpcPpa-SMALL"
  // },

  {
    title: "Pack of 3 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹799")],
    price: "<span class=b2b>Bulk Price</span> ₹799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews, Almonds and Golden Raisins 125gm Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969322/DSC-1599_copy_nmppla.jpg",
    link: "https://www.rawfruit.com/products/celebration-gift-pack-cashew-almonds-raisins",
    weight: "Product Net Weight : 375gm",
    sku: "SKU : RF-PET-PK03-CaAlRa-SMALL"
  },

  {
    title: "Premium Dry Fruits Treasure Box",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews, Almonds 125gm Each and Walnuts 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969534/DSC-1612_copy_ejywjq.jpg",
    link: "https://www.rawfruit.com/products/celebration-gift-pack-cashew-almonds-walnuts",
    weight: "Product Net Weight : 350gm",
    sku: "SKU : RF-PET-PK03-CaAlWa-SMALL"
  },

  {
    title: "Pack of 4 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews, Almonds, Golden Raisins 125gm Each and Pistachios 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969723/DSC-1633_copy_skxczs.jpg",
    link: "https://www.rawfruit.com/products/festive-dry-fruits-gifting-packs-for-special-occasions",
    weight: "Product Net Weight : 495gm",
    sku: "SKU : RF-PET-PK04-CaAlPiRa-SMALL"
  },

  {
    title: "Festive Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1199")],
    price: "<span class=b2b>Bulk Price</span> ₹1199/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews, Almonds 125gm Each, Walnuts 100gm and Pistachios 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969767/DSC-1649_copy_uyqgpb.jpg",
    link: "https://www.rawfruit.com/products/festive-edition-dry-fruits-gift-packs",
    weight: "Product Net Weight : 470gm",
    sku: "SKU : RF-PET-PK04-CaAlWaPi-SMALL"
  },

  {
    title: "Assorted Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1099")],
    price: "<span class=b2b>Bulk Price</span> ₹1099/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews, Almonds and Golden Raisins 125gm Each and Walnuts 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969821/DSC-1653_copy_yjfowl.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gifting-packs-for-festivals-events",
    weight: "Product Net Weight : 475gm",
    sku: "SKU : RF-PET-PK04-CaAlWaRa-SMALL"
  },

  {
    title: "Pack of 6 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews, Almonds and Golden Raisins 125gm Each, Walnuts 100gm, Pistachios 120gm and Dates 150gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777971055/DSC-1672_copy_2_e0tmhf.jpg",
    link: "https://www.rawfruit.com/products/assorted-nuts-dry-fruits-gift-packs",
    weight: "Product Net Weight : 475gm",
    sku: "SKU : RF-PET-PK06-CaAlRaWaPiDa-SMALL"
  },

  {
    title: "Signature Dry Fruits Gift Collection",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds 125gm, Cashews 125gm, Dates 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777978525/with_card_kkrvyd.jpg",
    link: "https://www.rawfruit.com/products/pure-delight-dry-fruits-hamper",
    weight: "Product Net Weight : 375gm",
    sku: "SKU : RF-TRAYPOTLI-BROWN-CaAlDa"
  },

  {
    title: "Gourmet Dry Fruits Celebration Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1499")],
    price: "<span class=b2b>Bulk Price</span> ₹1499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds 80gm, Cashews 80gm, Pistachios 60gm, Walnuts 60gm, Golden Raisins 80gm and Dates 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777974726/DSC-2083-Edit_copy_vjjftu.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-packs-premium-assorted-nuts",
    weight: "Product Net Weight : 460gm",
    sku: "SKU : RF-WB-M6-BASIC-LID"
  },


  {
    title: "9 Types of Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹2499")],
    price: "<span class=b2b>Bulk Price</span> ₹2499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100gm, Almonds 100gm, Black Pepper & Mint Cashews 100gm, Walnuts 80gm, Raisins 100gm, Pistachios 90gm, Apricots 100gm, Peanuts 100gm, Dates 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975092/DSC-2120-2_copy_ppn58v.jpg",
    link: "https://www.rawfruit.com/products/traditional-dry-fruits-gift-packs",
    weight: "Product Net Weight : 870gm",
    sku: "SKU : RF-WB-LID-L9-BASIC"
  },

  {
    title: "7 Types of Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹3499")],
    price: "<span class=b2b>Bulk Price</span> ₹3499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds, Cashews, Golden Raisins, Pistachios and Dates 150gm Each, Walnuts 120gm, Chocolate Coated Coffee Dragees 300gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975549/DCIM-3_copy_dlogri.jpg",
    link: "https://www.rawfruit.com/products/choco-nuts-and-dry-fruits-delight-gift-pack",
    weight: "Product Net Weight : 1170gm",
    sku: "SKU : RF-WB-HEXGN-BASIC-CHOCO"
  },

  

  {
    title: "Elegant Dry Fruits Treasure Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹549")],
    price: "<span class=b2b>Bulk Price</span> ₹549/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds 125gm, Cashews 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975773/DSC-1910_copy_x3lfep.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-hamper-festive-special-edition",
    weight: "Product Net Weight : 250gm",
    sku: "SKU : RF-MNDLA-GREEN-CaAl-BASIC"
  },

  {
    title: "Festive Dry Fruits Premium Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1099")],
    price: "<span class=b2b>Bulk Price</span> ₹1099/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds 130gm, Cashews 130gm, Pistachios 110gm, Dates 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975782/DCIM-26_copy_s8frab.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-pack-cashew-almond-pistachio-dates",
    weight: "Product Net Weight : 490gm",
    sku: "SKU : RF-MNDLA-RED-CaAlPiDa"
  },

  {
    title: "Celebration Special Dry Fruits Box",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1799")],
    price: "<span class=b2b>Bulk Price</span> ₹1799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds 200gm, Cashews 200gm, Golden Raisins 200gm, Dates 200gm, Pistachios 175gm, Walnuts 175gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975786/DCIM.-6_copy_v7egyi.jpg",
    link: "https://www.rawfruit.com/products/premium-dry-fruits-for-gifting",
    weight: "Product Net Weight : 1150gm",
    sku: "SKU : RF-MNDLA-BASIC-BLUE"
  },

  

  {
    title: "Premium Nuts Selection Gift Box",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1299")],
    price: "<span class=b2b>Bulk Price</span> ₹1299/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100gm, Almonds 100gm, Raisins 100gm, Walnuts 80gm, Pistachios 80gm, Dates 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777978769/DCIM-11_copy_ji80yu.jpg",
    link: "https://www.rawfruit.com/products/healthy-premium-assorted-dry-fruits-gift-hamper",
    weight: "Product Net Weight : 580gm",
    sku: "SKU : BINGE6-R-CaAlRaWaPiDa-Basic"
  },

  {
    title: "Royal Feast Dry Fruits Box",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹799")],
    price: "<span class=b2b>Bulk Price</span> ₹799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100gm, Almonds 100gm, Golden Raisins 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777979018/DCIM-9_copy_h9et9e.jpg",
    link: "https://www.rawfruit.com/products/celebration-assorted-dry-fruits-gift-box",
    weight: "Product Net Weight : 300gm",
    sku: "SKU : RF-BINGE-CaAlRa-RED"
  },

  {
    title: "Exclusive Dry Fruits Gift Box",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹699")],
    price: "<span class=b2b>Bulk Price</span> ₹699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100gm, Almonds 100gm, Pistachios 80gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777978933/DCIM-5_copy_z6yemr.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-box-premium-nuts-collection",
    weight: "Product Net Weight : 280gm",
    sku: "SKU : RF-BINGE-CaAlPi-PRPL"
  },

  {
    title: "Limited Edition Dry Fruit Treats",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Golden Raisins 125gm and Pistachios 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777979295/DSC-1944_copy_vfywxm.jpg",
    link: "https://www.rawfruit.com/products/healthy-indulgence-dry-fruits-gift-hamper",
    weight: "Product Net Weight : 500gm",
    sku: "SKU : RF-G-KNJI-CaAlRaPi-BASIC"
  },

  // {
  //   title: "Roasted Cashews Gift Pack",
  //   category: ["Dry Fruits Gift Pack", getBudgetCategory("₹799")],
  //   price: "<span class=b2b>Bulk Price</span> ₹799/-",
  //   moq : "<span class=b2b>MOQ = 50 Box</span>",
  //   description: "Description : Black Pepper & Mint Cashews, African Peri Peri Cashews & Himalayan Pink Salt Cashews 100gm Each.",
  //   image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777979808/Rakhi_2026_Content_Design_c98cmd.jpg",
  //   link: "https://www.rawfruit.com/products/roasted-cashews-dry-fruits-gifts-hamper",
  //   weight: "Product Net Weight : 300gm",
  //   sku: "SKU : RF-TNTBX-PK03-BpcPpcPsc"
  // },

  {
    title: "Assorted Dry Fruits Delight Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹699")],
    price: "<span class=b2b>Bulk Price</span> ₹699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Iranian Pistachios, Benin Cashews and American Almonds 100gm Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777980093/DSC-6183-2_copy_i5t0st.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-hamper-for-celebrations",
    weight: "Product Net Weight : 300gm",
    sku: "SKU : RF-R-ELGNTPOTLI-AlCaPi"
  },

  {
    title: "Signature Harvest Dry Fruits Box",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Iranian Pistachios, Benin Cashews, American Almonds and Golden Raisins 100gm Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777980099/DSC-6152-Edit_copy_nzvpvd.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-hamper-for-family",
    weight: "Product Net Weight : 400gm",
    sku: "SKU : RF-P-ELGNTPOTLI-CaAlRaPi"
  },

   {
    title: "Sweets with Dry Fruits Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹949")],
    price: "<span class=b2b>Bulk Price</span> ₹949/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 9 Pcs of Assorted Fudge Bites, Benin Cashews & American Almonds (100Grams) Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778051236/DSC-2220-Edit_copy_ppq9x0.jpg",
    link: "https://www.rawfruit.com/products/pack-of-9-sweets-with-dry-fruits",
    weight: "Product Net Weight : 380gm",
    sku: "SKU :  HF-RF-POTLI-BRWN-BITES"
  },

  {
    title: "Pack of 18 Assorted Sweets Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1249")],
    price: "<span class=b2b>Bulk Price</span> ₹1249/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 3pcs Each of Rose Petal Ladoo, Mango Fudge, Rose Marzipan, Kiwi Tarts, HazelNut Chocolate Dipped Figs, DryFruit Ladoo.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045494/DSC-3085-Edit_nlj3bz.jpg",
    link: "",
    weight: "Product Net Weight : 300gm",
    sku: "SKU : HOT-PC18-ASORT"
  },


  {
    title: "Pack of 2 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹599")],
    price: "<span class=b2b>Bulk Price</span> ₹599/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Milk Cake 200gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981137/DCIM-6_copy_pylpsm.jpg",
    link: "https://www.rawfruit.com/products/kaju-katli-milk-cake-sweets-combo-gift-pack",
    weight: "Product Net Weight : 400gm",
    sku: "SKU : HOT-COMBO2-KkMc"
  },

  {
    title: "Festive Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹799")],
    price: "<span class=b2b>Bulk Price</span> ₹799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Anjeer Chakkar 200gm, Kesar Roll 200gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981169/DCIM-37_copy_fkzgig.jpg",
    link: "https://www.rawfruit.com/products/kesar-roll-anjeer-chakkar-sweets-combo-gift-pack",
    weight: "Product Net Weight : 400gm",
    sku: "SKU : HOT-COMBO2-KrAc"
  },

  // {
  //   title: "Pack of 2 Sweets Gift Pack",
  //   category: ["Sweets Gift Pack", getBudgetCategory("₹549")],
  //   price: "<span class=b2b>Bulk Price</span> ₹549/-",
  //   description: "Description : Kaju Katli 200gm, Besan Ladoo 200gm.",
  //   image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981153/DCIM-7_copy_folfpe.jpg",
  //   weight: "Product Net Weight : 400gm",
  //   sku: "SKU : HOT-COMBO2-BlKk"
  // },

  {
    title: "Signature Sweet Treats Box",
    category: ["Sweets Gift Pack", getBudgetCategory("₹599")],
    price: "<span class=b2b>Bulk Price</span> ₹599/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Dry Masala Samosa 160gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981241/DCIM-2_copy_lzd12e.jpg",
    link: "https://www.rawfruit.com/products/kaju-katli-samosa-sweets-combo-gift-pack",
    weight: "Product Net Weight : 360gm",
    sku: "SKU : HOT-COMBO2-KkSm"
  },

  {
    title: "Pack of 4 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Milk Cake 200gm, Dodha Barfi 200gm, Chana Badam Barfi 200gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981583/DCIM-6_copy_k48hau.jpg",
    link: "https://www.rawfruit.com/products/assorted-sweets-hamper-for-weddings-festivals",
    weight: "Product Net Weight : 800gm",
    sku: "SKU : HOT-COMBO4-KkMcDbCb"
  },

  {
    title: "Gourmet Sweets Gift Collection",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1299")],
    price: "<span class=b2b>Bulk Price</span> ₹1299/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Milk Cake 200gm, Dry Masala Kachori 160gm, Dry Masala Samosa 160gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981606/DCIM-7_copy_2_zlfqcz.jpg",
    link: "https://www.rawfruit.com/products/sweets-treats-collection-for-celebrations",
    weight: "Product Net Weight : 720gm",
    sku: "SKU : HOT-COMBO4-KkMcKcSm"
  },

  {
    title: "Supreme Sweets Feast Hamper",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1299")],
    price: "<span class=b2b>Bulk Price</span> ₹1299/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kesar Roll 200gm, Anjeer Chakkar 200gm, Dry Masala Kachori 160gm, Dry Masala Samosa 160gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981711/DCIM_copy_yicwmk.jpg",link: "https://www.rawfruit.com/products/sweet-delights-collection-for-festive-celebrations",
    weight: "Product Net Weight : 720gm",
    sku: "SKU : HOT-COMBO4-KrAcKcSm"
  },

 


  {
    title: "Sweets with Dry Fruits Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1099")],
    price: "<span class=b2b>Bulk Price</span> ₹1099/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Cashews 125gm, Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981981/_DSC0723_a93vqv.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-with-sweets-gift-pack",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-2DF1SW-Kk"
  },

  {
    title: "Royal Indulgence Sweet Box",
    category: ["Sweets Gift Pack", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Milk Cake 200gm, Cashews 125gm, Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981998/_DSC0718_kfr4m6.jpg",
    link: "https://www.rawfruit.com/products/sweets-gift-pack-with-dry-fruits",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-2DF1SW-Mc"
  },

  {
    title: "Exclusive Sweets Treasure Box",
    category: ["Sweets Gift Pack", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kesar Roll 200gm, Cashews 125gm, Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777982071/_DSC0722_o2rmvs.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-combo-with-sweets-gift-pack",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-2DF1SW-Kr"
  },

  
  

  {
    title: "Assorted Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 2 Pcs Each of Dry Fruit Ladoo, Mango Fudge, Rose Petal Ladoo, Kiwi Tarts, Rose Marzipan, HazelNut Chocolate Dipped Figs, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045801/DSC-3148-Edit_nnsqtt.jpg",
    link: "",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-PS-24-12-ASORT-DRYFT"
  },

  {
    title: "Fudge Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1499")],
    price: "<span class=b2b>Bulk Price</span> ₹1499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 2 Pcs Each of Kesar Fudge, Cranberry Fudge, Mango Fudge, Rose Fudge, Strawberry Fudge, Badam Fudge, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045738/DSC-3144-Edit_r9lzdj.jpg",
    link: "",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-PS-24-12-FUDGE-DRYFT"
  },

  {
    title: "Ladoo Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1599")],
    price: "<span class=b2b>Bulk Price</span> ₹1599/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 2 Pcs Each of Pista Saffron Ladoo, Cranberry Pista Almond Ladoo, Hazelnut Ladoo, Rose Petal Ladoo, Chocochip Ladoo, Dry Fruit Ladoo, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045762/DSC-3141-Edit_noadcs.jpg",
    link: "",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-PS-24-12-LADOO-DRYFT"
  },
  
  {
    title: "Artisanal Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹2399")],
    price: "<span class=b2b>Bulk Price</span> ₹2399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 2 Pcs Each of Mango, Rose, Chocolate, Lemon, Pineapple, Orange (Marzipan), 2 Pcs Each of Kesar, Cranberry, Mango, Rose, Strawberry, Badam (Fudge), Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778050711/DSC-3182_copy_qbvkkg.jpg",
    link: "",
    weight: "Product Net Weight : 600gm",
    sku: "SKU : HOT-PS-36-12MZPAN-DRYFT-12FUDGE"
  },

  {
    title: "Celebration Special Sweets Box",
    category: ["Sweets Gift Pack", getBudgetCategory("₹2399")],
    price: "<span class=b2b>Bulk Price</span> ₹2399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 4 Pcs Each of Dry Fruit Ladoo, Mango Fudge, Rose Petal Ladoo, Kiwi Tarts, Rose Marzipan, HazelNut Chocolate Dipped Figs, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778050716/DSC-3189-Edit_copy_de1odw.jpg",
    link: "",
    weight: "Product Net Weight : 600gm",
    sku: "SKU : HOT-PS-36-24-ASORT-DRYFT"
  },

  {
    title: "Traditional Sweets Treasure Hamper",
    category: ["Sweets Gift Pack", getBudgetCategory("₹2499")],
    price: "<span class=b2b>Bulk Price</span> ₹2499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : 4 Pcs Each of Hazelnut Ladoo, Cranberry Pista Almond Ladoo, Rose Petal Ladoo, Dry Fruit Ladoo, Chocochip Ladoo, Pista Saffron Ladoo, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778050732/DSC-3179-Edit_copy_lldxyu.jpg",
    link: "",
    weight: "Product Net Weight : 600gm",
    sku: "SKU : HOT-PS-36-24-LADOO-DRYFT"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹799")],
    price: "<span class=b2b>Bulk Price</span> ₹799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Blueberry Jam Cookies 100gm, Butter Cashew Cookies 100gm, Roasted Nuts Mix 50gm, Coastal Berry Trail Mix 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055480/_DSC1089_ndfi3e.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-with-cookies-gift-hamper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY6"
  },

  {
    title: "Premium Celebration Gift Hamper",
    category: ["Chocolate Gift Pack", getBudgetCategory("₹799")],
    price: "<span class=b2b>Bulk Price</span> ₹799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Dates & Honey Cookies 100gm, Dodha Barfi 200gm, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055516/_DSC1043_qoft5v.jpg",
    link: "https://www.rawfruit.com/products/chocolate-with-sweets-gift-hamper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY11"
  },

  {
    title: "Festive Delight Gift Hamper",
    category: ["Chocolate Gift Pack", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Butter Cahsew Cookies 100gm, Kaju Katli 200gm, Roasted Nut Mix 50gm, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055531/_DSC1031_webswc.jpg",
    link: "https://www.rawfruit.com/products/sweets-cookies-with-chocolate-gift-hamper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY12"
  },

  {
    title: "Signature Gift Hamper Collection",
    category: ["Assorted Hampers", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Zatar Spiced Lavash 100gm, Butter Cashew Cookies 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055602/_DSC1111_jcajob.jpg",
    link: "https://www.rawfruit.com/products/cookies-with-sweets-gift-hmaper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY14"
  },

  {
    title: "Premium Festive Hamper Box",
    category: ["Assorted Hampers", getBudgetCategory("₹949")],
    price: "<span class=b2b>Bulk Price</span> ₹949/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : French Heart Cookies 100gm, Biscotti Pizza Minis 100gm, Mocha Almonds Dragees 90gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055623/DSC-4147-Edit_copy_fy3feh.jpg",
    link: "https://www.rawfruit.com/products/snacks-with-cookies-gift-hamper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY16"
  },

  {
    title: "Exclusive Gift Hamper Pack",
    category: ["Assorted Hampers", getBudgetCategory("₹799")],
    price: "<span class=b2b>Bulk Price</span> ₹799/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almond Biscotti Cookies 100gm, Cinnamon Sticks 100gm, Cookies & Creme Almonds Dragees 90gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055857/DSC-4157-Edit_copy_nuq3kr.jpg",
    link: "https://www.rawfruit.com/products/cookies-snacks-hamper-gift-pack",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY19"
  },

  {
    title: "Royal Treasure Gift Hamper",
    category: ["Chocolate Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Blueberry Jam Cookies 100gm, Dry Masala Samosa 160gm, Crunchy Pita Chips 100gm, Fruit & Nut Chocolate Bar 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055566/DCIM.-2_copy_llessu.jpg",
    link: "https://www.rawfruit.com/products/chocolate-bar-snacks-with-cookies-gift-hamper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY21"
  },

  {
    title: "Premium Gifting Delight Hamper",
    category: ["Chocolate Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Coconut Crunch Brittle 100gm, Turkish Treats 100gm, Roasted Nut Mix 50gm, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055720/_DSC1067_mlnawg.jpg",
    link: "https://www.rawfruit.com/products/brittle-sweets-dry-fruits-with-chocolate-gift-hamper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY23"
  },

  {
    title: "Classic Luxury Gift Hamper",
    category: ["Chocolate Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Peanut Crunch Brittle 100gm, Turkish Baklawa 100gm, Trail Mix 50 Grams, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055782/_DSC1055_itx7a8.jpg",
    link: "https://www.rawfruit.com/products/trail-mix-brittle-with-dry-fruits-gift-hamper",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY24"
  },

  {
    title: "Dry Fruits Hamper Tary",
    category: ["Assorted Hampers", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds 125gm, Cashews 125gm, Raisins 125gm, Pistachios 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778752780/DSC-2348-Edit_copy_uigmht.jpg",
    link: "https://www.rawfruit.com/products/healthy-dry-fruits-gift-hamper-for-festive-gifting",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-ONEKG-HMPR-TRAY43"
  },

  {
    title: "Royal Festive Hamper Collection",
    category: ["Assorted Hampers", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almonds 125gm, Cashews 125gm, Raisins 125gm, Pistachios 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778752865/DSC-2295-Edit_copy_vbmfcd.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-hamper-gift-pack",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-ONEKG-HMPR-TRAY44"
  },

  {
    title: "Deluxe Treasure Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1299")],
    price: "<span class=b2b>Bulk Price</span> ₹1299/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Almond Biscotti Cookies 100gm, French Hearts Cookies 100gm, Butter Cashew Cookies 100gm, Belgian Chocochips Cookies 100gm, Cinnamon Sticks 100gm, Spiced Lavash 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778057689/_DSC0102_sabvqf.jpg",
    link: "https://www.rawfruit.com/products/cookies-snacks-hamper-gift-box",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY25"
  },

  {
    title: "Premium Treasure Celebration Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1499")],
    price: "<span class=b2b>Bulk Price</span> ₹1499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Dates & Honey Cookies 100gm, Dubai Dates 100gm, Toasted Garlic Crostini 65gm, Dry Fruit Nutty Brittle 100gm, Assorted Ladoo (9Pcs), Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058025/_DSC0091_rzst5u.jpg",
    link: "https://www.rawfruit.com/products/sweets-snacks-brittle-with-cookies-gift-hamper",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY26"
  },

  {
    title: "Signature Celebration Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1699")],
    price: "<span class=b2b>Bulk Price</span> ₹1699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Blueberry Jam Cookies 100gm, Turkish Baklawa 100gm, Pita Chips 100gm, Kashmiri Kahwa Tea 50gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058055/_DSC0073_hs9fgt.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-cookies-snacks-with-tea-gift-hamper",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY27"
  },

  {
    title: "Exclusive Premium Gift Hamper",
    category: ["Chocolate Gift Pack", getBudgetCategory("₹1499")],
    price: "<span class=b2b>Bulk Price</span> ₹1499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Turkish Treats 100gm, Butter Cashew Cookies 100gm, Zatar Spiced Lavash 100gm, Masala Tea 50gm, Coffee Almond Chocolate Bar 50gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058088/_DSC0058_nsvhwc.jpg",
    link: "https://www.rawfruit.com/products/chcocolate-snacks-cookies-tea-with-dryfruits-gift-hamper",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY28"
  },

  {
    title: "Celebration Charm Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1699")],
    price: "<span class=b2b>Bulk Price</span> ₹1699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Chana Badam Barfi 200gm, French Hearts Cookies 100gm, Pizza Minis 100gm, Forest Fauna Tea 50gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058191/_DSC0042_wlqa0a.jpg",
    link: "https://www.rawfruit.com/products/sweets-cookies-tea-snacks-with-dryfruits-gift-hamper",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY29"
  },

  {
    title: "Premium Delight Treasure Basket",
    category: ["Premium Gifts", getBudgetCategory("₹3499")],
    price: "<span class=b2b>Bulk Price</span> ₹3499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Dry Masala Kachori 160gm, Crunchy Pita Chips 100gm, Pizza Minis 100gm, Blueberry Jam Cookies 100gm, French Hearts Cookies 100gm, Ferrero Rocher Chocolate pack of 4, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778059884/_DSC1000_qony1e.jpg",
    link: "https://www.rawfruit.com/products/gift-hamper-snacks-cookies-with-sweets",
    weight: "Product Net Weight : 900gm Approx",
    sku: "SKU : UF-BASKET-RED-STYLE1"
  },

  {
    title: "Signature Treasure Basket Gift Hamper",
    category: ["Premium Gifts", getBudgetCategory("₹1999")],
    price: "<span class=b2b>Bulk Price</span> ₹1999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : MilkCake 200gm, Belgian Chocochip Cookies 100gm, Chocolate Peanut Butter Bar 100gm, Milk Chocolate Bar 40gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778060160/_DSC0976_bc8r0a.jpg",
    link: "https://www.rawfruit.com/products/gift-hamper-cookies-brittle-with-sweets",
    weight: "Product Net Weight : 540gm Approx",
    sku: "SKU : BASKET-ORNG-STYLE1"
  },

  {
    title: "Elegant Treasure Basket Collection",
    category: ["Premium Gifts", getBudgetCategory("₹1999")],
    price: "<span class=b2b>Bulk Price</span> ₹1999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Dry Fruit Nutty Brittle 100gm, Cinnamon Sticks 100gm, Milk Chocolate Bar 40gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778060211/_DSC0975_d5txst.jpg",
    link: "https://www.rawfruit.com/products/gift-hamper-sweets-dry-fruits-snacks-with-brittle",
    weight: "Product Net Weight : 540gm Approx",
    sku: "SKU : BASKET-ORNG-STYLE2"
  },

  {
    title: "Festive Premium Treasure Basket",
    category: ["Premium Gifts", getBudgetCategory("₹4999")],
    price: "<span class=b2b>Bulk Price</span> ₹4999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli & MilkCake (200gm each), Dry Masala Samosa & Kachori (160g each), Pita Chips 100gm, Pizza Minis 100gm, Belgian Chocochips Cookies 100gm, French Hearts Cookies 100gm, Tiramisu Chocolate Box 200gm, Dry Fruits Nutty Brittle 100gm, Cashews 50gm, Almonds 50gm, Roasted Cashews 50gm, Roasted Almonds 50gm, Kashmiri Kahwa Tea 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778060558/_DSC1170_nplazs.jpg",
    link: "https://www.rawfruit.com/products/gourmet-indulgence-sweets-with-assorted-savories-hamper",
    weight: "Product Net Weight : 1700gm Approx",
    sku: "SKU : UF-BASKET-YELOW-STYLE1"
  },

  {
    title: "Premium Occasion Gift Basket",
    category: ["Premium Gifts", getBudgetCategory("₹2499")],
    price: "<span class=b2b>Bulk Price</span> ₹2499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200gm, Spiced Lavash 100gm, Butter Cashew Cookies 100gm, Cashews 50gm, Almonds 50gm, Bella Vita (CEO Man & White Oud) Perfume Combo (20 ml X 2), Wicker Basket.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065204/_DSC1284_bsm2jd.jpg",
    link: "https://www.rawfruit.com/products/premium-gift-basket-fragrances-sweets-nuts-more",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : UF-MOON-BASKT1"
  },

  {
    title: "Festive Royal Gift Basket",
    category: ["Premium Gifts", getBudgetCategory("₹2999")],
    price: "<span class=b2b>Bulk Price</span> ₹2999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Chana Badam Barfi 200gm, French Heart Cookies 100gm, Pizza Minis 100gm, Cashews 50gm, Almonds 50gm, Bella Vita (CEO Man & White Oud) Perfume Combo (20 ml X 2), Wicker Basket.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065291/_DSC1273_dc9fbt.jpg",
    link: "https://www.rawfruit.com/products/gift-basket-bella-vita-perfume-channa-badam-barfi-gourmet-snacks",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : UF-MOON-BASKT3"
  },

  {
    title: "Grand Luxury Basket Pack",
    category: ["Premium Gifts", getBudgetCategory("₹2999")],
    price: "<span class=b2b>Bulk Price</span> ₹2999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Dubai Dates 100gm, Turkish Baklawa 100gm, Turkish Treats 120gm, Dry Fruit Nutty Brittle 100gm, Cashews 50gm, Almonds 50gm, Roasted Cashews 50gm, Roasted Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065812/_DSC0028_qywsqp.jpg",
    link: "https://www.rawfruit.com/products/exquisite-gift-pack-dubai-dates-turkish-baklawa-with-premium-dry-fruits",
    weight: "Product Net Weight : 650gm Approx",
    sku: "SKU : UF-ROUND-BASKT1"
  },

  {
    title: "Grand Festive Treasure Basket",
    category: ["Premium Gifts", getBudgetCategory("₹2999")],
    price: "<span class=b2b>Bulk Price</span> ₹2999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Butter Cashew Cookies 100gm, Turkish Treat 100gm, Coconut Crunch Brittle 100gm, Spiced Lavash 100gm, Nut Mix 50gm, Coffee Almond Chocolate Bar 50gm, Masala Tea 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065889/_DSC0653_dhnwxc.jpg",
    link: "",
    weight: "Product Net Weight : 600gm Approx",
    sku: "SKU : UF-ROUND-BASKT3"
  },





  

  














];









const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sidebarMenu = document.getElementById("sidebarMenu");

function displayProducts(filteredProducts) {
  productsGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <h2>No Products Found</h2>
      </div>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    const tag     = product.link ? "a"   : "div";
    const linkAttrs = product.link
      ? `href="${product.link}" target="_blank" rel="noopener"`
      : "";

    const stripHtml = s => s.replace(/<[^>]*>/g, '').trim();
    const waText = encodeURIComponent(
      `*${product.title}*\n${stripHtml(product.price)}\n${product.description}\n${product.weight || ''}\n${product.sku || ''}\n${stripHtml(product.moq || '')}${product.link ? '\n' + product.link : ''}`
    );
    const waUrl = `https://wa.me/?text=${waText}`;

    productsGrid.innerHTML += `
      <${tag} ${linkAttrs} class="product-card">
        <img src="${product.image}" alt="${product.title}">

        <div class="product-info">

          <div class="product-category">
            ${product.category[0]}
          </div>

          <h3 class="product-title">
            ${product.title}
          </h3>

          <p class="product-description">
            ${product.description}
          </p>

          <p class="product-weight">
            ${product.weight || ""}
          </p>

          <p class="product-sku">
            ${product.sku || ""}
          </p>

      

          <div class="product-price">
            <span>${product.price}</span>
            <button class="whatsapp-btn" onclick="event.stopPropagation();window.open('${waUrl}','_blank')" title="Share on WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </div>

          <p class="product-moq">
            ${product.moq || ""}
          </p>

        </div>
      </${tag}>
    `;
  });
}

// function filterProducts(category) {
//   if (category === "All") {
//     displayProducts(products);
//   } else {
//     const filteredProducts = products.filter(product =>
//       product.category.includes(category)
//     );

//     displayProducts(filteredProducts);
//   }
// }

// function filterProducts(category) {
//   let filteredProducts;

//   if (category === "All") {
//     // Default original order
//     filteredProducts = [...products];

//   } else {
//     filteredProducts = products.filter(product =>
//       product.category.includes(category)
//     );

//     // Only sort LOW to HIGH for budget categories
//     const budgetCategories = [
//       "Under 500",
//       "Under 500 to 1000",
//       "Under 1000 to 2000",
//       "Under 2000 to 3000",
//       "Above 3000"
//     ];

//     if (budgetCategories.includes(category)) {
//       filteredProducts.sort((a, b) => {
//         const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10);
//         const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10);
//         return priceA - priceB; // Low to High
//       });
//     }
//   }

//   displayProducts(filteredProducts);
// }


function filterProducts(category) {
  let filteredProducts;

  function extractPrice(priceString) {
    const match = priceString.match(/₹\s*([\d,]+)/);
    return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  }

  if (category === "All") {
    filteredProducts = [...products];

  } else {
    filteredProducts = products.filter(product =>
      product.category.includes(category)
    );

    const budgetCategories = [
      "Under 500",
      "Under 500 to 1000",
      "Under 1000 to 2000",
      "Under 2000 to 3000",
      "Above 3000"
    ];

    if (budgetCategories.includes(category)) {
      filteredProducts.sort((a, b) => {
        const priceA = extractPrice(a.price);
        const priceB = extractPrice(b.price);
        return priceA - priceB;
      });
    }
  }

  displayProducts(filteredProducts);
}



categoryButtons.forEach(button => {
  button.addEventListener("click", function () {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");

    filterProducts(this.dataset.category);

    if (window.innerWidth <= 992 && sidebarMenu) {
      sidebarMenu.classList.remove("open");
      hamburgerBtn.classList.remove("active");
    }
  });
});

// Hamburger toggle
if (hamburgerBtn && sidebarMenu) {
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebarMenu.classList.toggle("open");
    hamburgerBtn.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".sidebar")) {
      sidebarMenu.classList.remove("open");
      hamburgerBtn.classList.remove("active");
    }
  });
}

// Sidebar dropdown toggles
document.querySelectorAll(".sidebar-dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const group = toggle.closest(".dropdown-group");
    document.querySelectorAll(".dropdown-group.open").forEach(g => {
      if (g !== group) g.classList.remove("open");
    });
    group.classList.toggle("open");
  });
});

// searchInput.addEventListener("keyup", () => {
//   const searchValue = searchInput.value.toLowerCase();

//   const filtered = products.filter(product => {
//     const skuText = (product.sku || "")
//       .replace("SKU :", "")
//       .toLowerCase();

//     return (
//       product.title.toLowerCase().includes(searchValue) ||
//       product.description.toLowerCase().includes(searchValue) ||
//       skuText.includes(searchValue) ||
//       product.category.join(" ").toLowerCase().includes(searchValue)
//     );
//   });

//   displayProducts(filtered);
// });

// displayProducts(products);


// --- Smart Search (Google-style related matching) ---

// Common typo fixes / synonyms / related keywords
const searchSynonyms = {
  kaju: ["cashew", "kaju"],
  cashew: ["kaju", "cashew"],
  badam: ["almond", "badam"],
  almond: ["badam", "almond"],
  pista: ["pistachio", "pista"],
  pistachio: ["pista", "pistachio"],
  raisin: ["kishmish", "raisin"],
  kishmish: ["raisin", "kishmish"],
  gift: ["hamper", "box", "basket", "gift"],
  hamper: ["gift", "box", "basket", "hamper"],
  box: ["gift", "hamper", "basket", "box"],
  rakhi: ["rakhi", "rakhii", "rakhee"],
};

// Normalize text
function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

// Get all related words
function expandSearchTerms(query) {
  const words = normalizeText(query).split(" ");
  let expanded = [];

  words.forEach(word => {
    expanded.push(word);

    if (searchSynonyms[word]) {
      expanded.push(...searchSynonyms[word]);
    }
  });

  return [...new Set(expanded)];
}

// Calculate relevance score
function calculateScore(product, searchTerms) {
  let score = 0;

  const title = normalizeText(product.title || "");
  const description = normalizeText(product.description || "");
  const sku = normalizeText((product.sku || "").replace("SKU :", ""));
  const category = normalizeText((product.category || []).join(" "));

  searchTerms.forEach(term => {
    // Exact title match (highest priority)
    if (title.includes(term)) score += 10;

    // Category match
    if (category.includes(term)) score += 7;

    // Description match
    if (description.includes(term)) score += 5;

    // SKU match
    if (sku.includes(term)) score += 8;

    // Partial word match
    title.split(" ").forEach(word => {
      if (word.startsWith(term)) score += 4;
    });

    // Fuzzy match (similar words)
    if (title.includes(term.slice(0, 3))) score += 2;
  });

  return score;
}

// Search Event
searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value;

  if (!searchValue.trim()) {
    displayProducts(products);
    return;
  }

  const searchTerms = expandSearchTerms(searchValue);

  const filtered = products
    .map(product => ({
      ...product,
      relevanceScore: calculateScore(product, searchTerms),
    }))
    .filter(product => product.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);

  displayProducts(filtered);
});


displayProducts(products);



const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
