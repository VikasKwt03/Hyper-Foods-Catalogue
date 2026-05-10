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
    title: "Almonds, Cashews Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹499")],
    price: "₹499",
    description: "Description : Cashews 125gm and Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777965152/DSC-1591_copy_rsc9wk.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-pack",
    weight: "Product Net Weight : 250gm",
    sku: "SKU : RF-PET-PK02-CaAl-SMALL"
  },

  {
    title: "Roasted Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹599")],
    price: "₹599",
    description: "Description : Black Pepper Cashews 125gm and Peri Peri Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777965329/DSC-1577_copy_w0vyrw.jpg",
    link: "https://www.rawfruit.com/products/roasted-cashew-almonds",
    weight: "Product Net Weight : 250gm",
    sku: "SKU : RF-PET-PK02-BpcPpa-SMALL"
  },

  {
    title: "Pack of 3 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹799")],
    price: "₹799",
    description: "Description : Cashews, Almonds and Golden Raisins 125gm Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969322/DSC-1599_copy_nmppla.jpg",
    link: "https://www.rawfruit.com/products/celebration-gift-pack-cashew-almonds-raisins",
    weight: "Product Net Weight : 375gm",
    sku: "SKU : RF-PET-PK03-CaAlRa-SMALL"
  },

  {
    title: "Pack of 3 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹899")],
    price: "₹899",
    description: "Description : Cashews, Almonds 125gm Each and Walnuts 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969534/DSC-1612_copy_ejywjq.jpg",
    link: "https://www.rawfruit.com/products/celebration-gift-pack-cashew-almonds-walnuts",
    weight: "Product Net Weight : 350gm",
    sku: "SKU : RF-PET-PK03-CaAlWa-SMALL"
  },

  {
    title: "Pack of 4 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹999")],
    price: "₹999",
    description: "Description : Cashews, Almonds, Golden Raisins 125gm Each and Pistachios 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969723/DSC-1633_copy_skxczs.jpg",
    link: "https://www.rawfruit.com/products/festive-dry-fruits-gifting-packs-for-special-occasions",
    weight: "Product Net Weight : 495gm",
    sku: "SKU : RF-PET-PK04-CaAlPiRa-SMALL"
  },

  {
    title: "Festive Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1199")],
    price: "₹1199",
    description: "Description : Cashews, Almonds 125gm Each, Walnuts 100gm and Pistachios 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969767/DSC-1649_copy_uyqgpb.jpg",
    link: "https://www.rawfruit.com/products/festive-edition-dry-fruits-gift-packs",
    weight: "Product Net Weight : 470gm",
    sku: "SKU : RF-PET-PK04-CaAlWaPi-SMALL"
  },

  {
    title: "Assorted Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1099")],
    price: "₹1099",
    description: "Description : Cashews, Almonds and Golden Raisins 125gm Each and Walnuts 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777969821/DSC-1653_copy_yjfowl.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gifting-packs-for-festivals-events",
    weight: "Product Net Weight : 475gm",
    sku: "SKU : RF-PET-PK04-CaAlWaRa-SMALL"
  },

  {
    title: "Pack of 6 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1399")],
    price: "₹1399",
    description: "Description : Cashews, Almonds and Golden Raisins 125gm Each, Walnuts 100gm, Pistachios 120gm and Dates 150gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777971055/DSC-1672_copy_2_e0tmhf.jpg",
    link: "https://www.rawfruit.com/products/assorted-nuts-dry-fruits-gift-packs",
    weight: "Product Net Weight : 475gm",
    sku: "SKU : RF-PET-PK06-CaAlRaWaPiDa-SMALL"
  },

  {
    title: "Dry Fruits Tray",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹899")],
    price: "₹899",
    description: "Description : Almonds 125gm, Cashews 125gm, Dates 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777978525/with_card_kkrvyd.jpg",
    link: "https://www.rawfruit.com/products/pure-delight-dry-fruits-hamper",
    weight: "Product Net Weight : 375gm",
    sku: "SKU : RF-TRAYPOTLI-BROWN-CaAlDa"
  },

  {
    title: "Wooden Tray Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1499")],
    price: "₹1499",
    description: "Description : Almonds 80gm, Cashews 80gm, Pistachios 60gm, Walnuts 60gm, Golden Raisins 80gm and Dates 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777974726/DSC-2083-Edit_copy_vjjftu.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-packs-premium-assorted-nuts",
    weight: "Product Net Weight : 460gm",
    sku: "SKU : RF-WB-M6-BASIC-LID"
  },


  {
    title: "9 Types of Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹2499")],
    price: "₹2499",
    description: "Description : Cashews 100gm, Almonds 100gm, Black Pepper & Mint Cashews 100gm, Walnuts 80gm, Raisins 100gm, Pistachios 90gm, Apricots 100gm, Peanuts 100gm, Dates 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975092/DSC-2120-2_copy_ppn58v.jpg",
    link: "https://www.rawfruit.com/products/traditional-dry-fruits-gift-packs",
    weight: "Product Net Weight : 870gm",
    sku: "SKU : RF-WB-LID-L9-BASIC"
  },

  {
    title: "7 Types of Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹3499")],
    price: "₹3499",
    description: "Description : Almonds, Cashews, Golden Raisins, Pistachios and Dates 150gm Each, Walnuts 120gm, Chocolate Coated Coffee Dragees 300gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975549/DCIM-3_copy_dlogri.jpg",
    link: "https://www.rawfruit.com/products/choco-nuts-and-dry-fruits-delight-gift-pack",
    weight: "Product Net Weight : 1170gm",
    sku: "SKU : RF-WB-HEXGN-BASIC-CHOCO"
  },

  

  {
    title: "Pack of 2 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹549")],
    price: "₹549",
    description: "Description : Almonds 125gm, Cashews 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975773/DSC-1910_copy_x3lfep.jpg",
    weight: "Product Net Weight : 250gm",
    sku: "SKU : RF-MNDLA-GREEN-CaAl-BASIC"
  },

  {
    title: "Pack of 4 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1099")],
    price: "₹1099",
    description: "Description : Almonds 130gm, Cashews 130gm, Pistachios 110gm, Dates 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975782/DCIM-26_copy_s8frab.jpg",
    weight: "Product Net Weight : 490gm",
    sku: "SKU : RF-MNDLA-RED-CaAlPiDa"
  },

  {
    title: "Pack of 6 Dry Fruits Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1799")],
    price: "₹1799",
    description: "Description : Almonds 200gm, Cashews 200gm, Golden Raisins 200gm, Dates 200gm, Pistachios 175gm, Walnuts 175gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777975786/DCIM.-6_copy_v7egyi.jpg",
    weight: "Product Net Weight : 1150gm",
    sku: "SKU : RF-MNDLA-BASIC-BLUE"
  },

  

  {
    title: "6 Types of Dry Fruits ",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1299")],
    price: "₹1299",
    description: "Description : Cashews 100gm, Almonds 100gm, Raisins 100gm, Walnuts 80gm, Pistachios 80gm, Dates 120gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777978769/DCIM-11_copy_ji80yu.jpg",
    weight: "Product Net Weight : 580gm",
    sku: "SKU : BINGE6-R-CaAlRaWaPiDa-Basic"
  },

  {
    title: "3 Types of Dry Fruits ",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹799")],
    price: "₹799",
    description: "Description : Cashews 100gm, Almonds 100gm, Golden Raisins 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777979018/DCIM-9_copy_h9et9e.jpg",
    weight: "Product Net Weight : 300gm",
    sku: "SKU : RF-BINGE-CaAlRa-RED"
  },

  {
    title: "3 Types of Dry Fruits",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹699")],
    price: "₹699",
    description: "Description : Cashews 100gm, Almonds 100gm, Pistachios 80gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777978933/DCIM-5_copy_z6yemr.jpg",
    weight: "Product Net Weight : 280gm",
    sku: "SKU : RF-BINGE-CaAlPi-PRPL"
  },

  {
    title: "Limited Edition Dry Fruit Treats",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹999")],
    price: "₹999",
    description: "Description : Cashews 125gm, Almonds 125gm, Golden Raisins 125gm and Pistachios 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777979295/DSC-1944_copy_vfywxm.jpg",
    weight: "Product Net Weight : 500gm",
    sku: "SKU : RF-G-KNJI-CaAlRaPi-BASIC"
  },

  {
    title: "Roasted Cashews Pack of 3",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹799")],
    price: "₹799",
    description: "Description : Black Pepper & Mint Cashews, African Peri Peri Cashews & Himalayan Pink Salt Cashews 100gm Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777979808/Rakhi_2026_Content_Design_c98cmd.jpg",
    weight: "Product Net Weight : 300gm",
    sku: "SKU : RF-TNTBX-PK03-BpcPpcPsc"
  },

  {
    title: "Dry Fruits Pack of 3",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹699")],
    price: "₹699",
    description: "Description : Iranian Pistachios, Benin Cashews and American Almonds 100gm Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777980093/DSC-6183-2_copy_i5t0st.jpg",
    weight: "Product Net Weight : 300gm",
    sku: "SKU : RF-R-ELGNTPOTLI-AlCaPi"
  },

  {
    title: "Dry Fruits Pack of 4",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹899")],
    price: "₹899",
    description: "Description : Iranian Pistachios, Benin Cashews, American Almonds and Golden Raisins 100gm Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777980099/DSC-6152-Edit_copy_nzvpvd.jpg",
    weight: "Product Net Weight : 400gm",
    sku: "SKU : RF-G-ELGNTPOTLI-AlCaRaPi"
  },

   {
    title: "Sweets with Dry Fruits Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹949")],
    price: "₹949",
    description: "Description : 9 Pcs of Assorted Fudge Bites, Benin Cashews & American Almonds (100Grams) Each.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778051236/DSC-2220-Edit_copy_ppq9x0.jpg",
    weight: "Product Net Weight : 380gm",
    sku: "SKU :  HF-RF-POTLI-BRWN-BITES"
  },

  {
    title: "Pack of 18 Assorted Sweets Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1249")],
    price: "₹1249",
    description: "Description : 3pcs Each of Rose Petal Ladoo, Mango Fudge, Rose Marzipan, Kiwi Tarts, HazelNut Chocolate Dipped Figs, DryFruit Ladoo.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045494/DSC-3085-Edit_nlj3bz.jpg",
    weight: "Product Net Weight : 300gm",
    sku: "SKU : HOT-PC18-ASORT"
  },


  {
    title: "Pack of 2 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹599")],
    price: "₹599",
    description: "Description : Kaju Katli 200gm, Milk Cake 200gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981137/DCIM-6_copy_pylpsm.jpg",
    weight: "Product Net Weight : 400gm",
    sku: "SKU : HOT-COMBO2-KkMc"
  },

  {
    title: "Pack of 2 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹799")],
    price: "₹799",
    description: "Description : Anjeer Chakkar 200gm, Kesar Roll 200gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981169/DCIM-37_copy_fkzgig.jpg",
    weight: "Product Net Weight : 400gm",
    sku: "SKU : HOT-COMBO2-KrAc"
  },

  // {
  //   title: "Pack of 2 Sweets Gift Pack",
  //   category: ["Sweets Gift Pack", getBudgetCategory("₹549")],
  //   price: "₹549",
  //   description: "Description : Kaju Katli 200gm, Besan Ladoo 200gm.",
  //   image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981153/DCIM-7_copy_folfpe.jpg",
  //   weight: "Product Net Weight : 400gm",
  //   sku: "SKU : HOT-COMBO2-BlKk"
  // },

  {
    title: "Pack of 2 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹599")],
    price: "₹599",
    description: "Description : Kaju Katli 200gm, Dry Masala Samosa 160gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981241/DCIM-2_copy_lzd12e.jpg",
    weight: "Product Net Weight : 360gm",
    sku: "SKU : HOT-COMBO2-KkSm"
  },

  {
    title: "Pack of 4 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1399")],
    price: "₹1399",
    description: "Description : Kaju Katli 200gm, Milk Cake 200gm, Dodha Barfi 200gm, Chana Badam Barfi 200gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981583/DCIM-6_copy_k48hau.jpg",
    weight: "Product Net Weight : 800gm",
    sku: "SKU : HOT-COMBO4-KkMcDbCb"
  },

  {
    title: "Pack of 4 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1299")],
    price: "₹1299",
    description: "Description : Kaju Katli 200gm, Milk Cake 200gm, Dry Masala Kachori 160gm, Dry Masala Samosa 160gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981606/DCIM-7_copy_2_zlfqcz.jpg",
    weight: "Product Net Weight : 720gm",
    sku: "SKU : HOT-COMBO4-KkMcKcSm"
  },

  {
    title: "Pack of 4 Sweets Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1299")],
    price: "₹1299",
    description: "Description : Kesar Roll 200gm, Anjeer Chakkar 200gm, Dry Masala Kachori 160gm, Dry Masala Samosa 160gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981711/DCIM_copy_yicwmk.jpg",
    weight: "Product Net Weight : 720gm",
    sku: "SKU : HOT-COMBO4-KrAcKcSm"
  },

 


  {
    title: "Sweets with Dry Fruits Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1099")],
    price: "₹1099",
    description: "Description : Kaju Katli 200gm, Cashews 125gm, Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981981/_DSC0723_a93vqv.jpg",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-2DF1SW-Kk"
  },

  {
    title: "Sweets with Dry Fruits Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹899")],
    price: "₹899",
    description: "Description : Milk Cake 200gm, Cashews 125gm, Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777981998/_DSC0718_kfr4m6.jpg",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-2DF1SW-Mc"
  },

  {
    title: "Sweets with Dry Fruits Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹899")],
    price: "₹899",
    description: "Description : Kesar Roll 200gm, Cashews 125gm, Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1777982071/_DSC0722_o2rmvs.jpg",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-2DF1SW-Kr"
  },

  
  

  {
    title: "Assorted Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1399")],
    price: "₹1399",
    description: "Description : 2 Pcs Each of Dry Fruit Ladoo, Mango Fudge, Rose Petal Ladoo, Kiwi Tarts, Rose Marzipan, HazelNut Chocolate Dipped Figs, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045801/DSC-3148-Edit_nnsqtt.jpg",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-PS-24-12-ASORT-DRYFT"
  },

  {
    title: "Fudge Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1499")],
    price: "₹1499",
    description: "Description : 2 Pcs Each of Kesar Fudge, Cranberry Fudge, Mango Fudge, Rose Fudge, Strawberry Fudge, Badam Fudge, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045738/DSC-3144-Edit_r9lzdj.jpg",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-PS-24-12-FUDGE-DRYFT"
  },

  {
    title: "Ladoo Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹1599")],
    price: "₹1599",
    description: "Description : 2 Pcs Each of Pista Saffron Ladoo, Cranberry Pista Almond Ladoo, Hazelnut Ladoo, Rose Petal Ladoo, Chocochip Ladoo, Dry Fruit Ladoo, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778045762/DSC-3141-Edit_noadcs.jpg",
    weight: "Product Net Weight : 450gm",
    sku: "SKU : HOT-PS-24-12-LADOO-DRYFT"
  },
  
  {
    title: "Artisanal Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹2399")],
    price: "₹2399",
    description: "Description : 2 Pcs Each of Mango, Rose, Chocolate, Lemon, Pineapple, Orange (Marzipan), 2 Pcs Each of Kesar, Cranberry, Mango, Rose, Strawberry, Badam (Fudge), Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778050711/DSC-3182_copy_qbvkkg.jpg",
    weight: "Product Net Weight : 600gm",
    sku: "SKU : HOT-PS-36-12MZPAN-DRYFT-12FUDGE"
  },

  {
    title: "Premium Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹2399")],
    price: "₹2399",
    description: "Description : 4 Pcs Each of Dry Fruit Ladoo, Mango Fudge, Rose Petal Ladoo, Kiwi Tarts, Rose Marzipan, HazelNut Chocolate Dipped Figs, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778050716/DSC-3189-Edit_copy_de1odw.jpg",
    weight: "Product Net Weight : 600gm",
    sku: "SKU : HOT-PS-36-24-ASORT-DRYFT"
  },

  {
    title: "Premium Sweets Pack with Dry Fruits",
    category: ["Sweets Gift Pack", getBudgetCategory("₹2499")],
    price: "₹2499",
    description: "Description : 4 Pcs Each of Hazelnut Ladoo, Cranberry Pista Almond Ladoo, Rose Petal Ladoo, Dry Fruit Ladoo, Chocochip Ladoo, Pista Saffron Ladoo, Cashews 75gm, Almonds 75gm and Pistachios 60gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778050732/DSC-3179-Edit_copy_lldxyu.jpg",
    weight: "Product Net Weight : 600gm",
    sku: "SKU : HOT-PS-36-24-LADOO-DRYFT"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹799")],
    price: "₹799",
    description: "Description : Blueberry Jam Cookies 100gm, Butter Cashew Cookies 100gm, Roasted Nuts Mix 50gm, Coastal Berry Trail Mix 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055480/_DSC1089_ndfi3e.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY6"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹799")],
    price: "₹799",
    description: "Description : Dates & Honey Cookies 100gm, Dodha Barfi 200gm, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055516/_DSC1043_qoft5v.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY11"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹899")],
    price: "₹899",
    description: "Description : Butter Cahsew Cookies 100gm, Kaju Katli 200gm, Roasted Nut Mix 50gm, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055531/_DSC1031_webswc.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY12"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹999")],
    price: "₹999",
    description: "Description : Kaju Katli 200gm, Zatar Spiced Lavash 100gm, Butter Cashew Cookies 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055602/_DSC1111_jcajob.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY14"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹949")],
    price: "₹949",
    description: "Description : French Heart Cookies 100gm, Biscotti Pizza Minis 100gm, Mocha Almonds Dragees 90gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055623/DSC-4147-Edit_copy_fy3feh.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY16"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹799")],
    price: "₹799",
    description: "Description : Almond Biscotti Cookies 100gm, Cinnamon Sticks 100gm, Cookies & Creme Almonds Dragees 90gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055857/DSC-4157-Edit_copy_nuq3kr.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY19"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹999")],
    price: "₹999",
    description: "Description : Blueberry Jam Cookies 100gm, Dry Masala Samosa 160gm, Crunchy Pita Chips 100gm, Fruit & Nut Chocolate Bar 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055566/DCIM.-2_copy_llessu.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY21"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹999")],
    price: "₹999",
    description: "Description : Coconut Crunch Brittle 100gm, Turkish Treats 100gm, Roasted Nut Mix 50gm, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055720/_DSC1067_mlnawg.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY23"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹999")],
    price: "₹999",
    description: "Description : Peanut Crunch Brittle 100gm, Turkish Baklawa 100gm, Trail Mix 50 Grams, Ferrero Rocher Chocolate Pack of 4.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778055782/_DSC1055_itx7a8.jpg",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-HLFKG-HMPR-TRAY24"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1299")],
    price: "₹1299",
    description: "Description : Almond Biscotti Cookies 100gm, French Hearts Cookies 100gm, Butter Cashew Cookies 100gm, Belgian Chocochips Cookies 100gm, Cinnamon Sticks 100gm, Spiced Lavash 100gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778057689/_DSC0102_sabvqf.jpg",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY25"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1499")],
    price: "₹1499",
    description: "Description : Dates & Honey Cookies 100gm, Dubai Dates 100gm, Toasted Garlic Crostini 65gm, Dry Fruit Nutty Brittle 100gm, Assorted Ladoo (9Pcs), Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058025/_DSC0091_rzst5u.jpg",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY26"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1699")],
    price: "₹1699",
    description: "Description : Blueberry Jam Cookies 100gm, Turkish Baklawa 100gm, Pita Chips 100gm, Kashmiri Kahwa Tea 50gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058055/_DSC0073_hs9fgt.jpg",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY27"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1499")],
    price: "₹1499",
    description: "Description : Turkish Treats 100gm, Butter Cashew Cookies 100gm, Zatar Spiced Lavash 100gm, Masala Tea 50gm, Coffee Almond Chocolate Bar 50gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058088/_DSC0058_nsvhwc.jpg",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY28"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1699")],
    price: "₹1699",
    description: "Description : Chana Badam Barfi 200gm, French Hearts Cookies 100gm, Pizza Minis 100gm, Forest Fauna Tea 50gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778058191/_DSC0042_wlqa0a.jpg",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : RF-ONEKG-HMPR-TRAY29"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹3499")],
    price: "₹3499",
    description: "Description : Kaju Katli 200gm, Dry Masala Kachori 160gm, Crunchy Pita Chips 100gm, Pizza Minis 100gm, Blueberry Jam Cookies 100gm, French Hearts Cookies 100gm, Ferrero Rocher Chocolate pack of 4, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778059884/_DSC1000_qony1e.jpg",
    weight: "Product Net Weight : 900gm Approx",
    sku: "SKU : UF-BASKET-RED-STYLE1"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1999")],
    price: "₹1999",
    description: "Description : MilkCake 200gm, Belgian Chocochip Cookies 100gm, Chocolate Peanut Butter Bar 100gm, Milk Chocolate Bar 40gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778060160/_DSC0976_bc8r0a.jpg",
    weight: "Product Net Weight : 540gm Approx",
    sku: "SKU : BASKET-ORNG-STYLE1"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1999")],
    price: "₹1999",
    description: "Description : Kaju Katli 200gm, Dry Fruit Nutty Brittle 100gm, Cinnamon Sticks 100gm, Milk Chocolate Bar 40gm, Cashews 50gm, Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778060211/_DSC0975_d5txst.jpg",
    weight: "Product Net Weight : 540gm Approx",
    sku: "SKU : BASKET-ORNG-STYLE2"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹4999")],
    price: "₹4999",
    description: "Description : Kaju Katli & MilkCake (200gm each), Dry Masala Samosa & Kachori (160g each), Pita Chips 100gm, Pizza Minis 100gm, Belgian Chocochips Cookies 100gm, French Hearts Cookies 100gm, Tiramisu Chocolate Box 200gm, Dry Fruits Nutty Brittle 100gm, Cashews 50gm, Almonds 50gm, Roasted Cashews 50gm, Roasted Almonds 50gm, Kashmiri Kahwa Tea 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778060558/_DSC1170_nplazs.jpg",
    weight: "Product Net Weight : 1700gm Approx",
    sku: "SKU : UF-BASKET-YELOW-STYLE1"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹2499")],
    price: "₹2499",
    description: "Description : Kaju Katli 200gm, Spiced Lavash 100gm, Butter Cashew Cookies 100gm, Cashews 50gm, Almonds 50gm, Bella Vita (CEO Man & White Oud) Perfume Combo (20 ml X 2), Wicker Basket.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065204/_DSC1284_bsm2jd.jpg",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : UF-MOON-BASKT1"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹2999")],
    price: "₹2999",
    description: "Description : Chana Badam Barfi 200gm, French Heart Cookies 100gm, Pizza Minis 100gm, Cashews 50gm, Almonds 50gm, Bella Vita (CEO Man & White Oud) Perfume Combo (20 ml X 2), Wicker Basket.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065291/_DSC1273_dc9fbt.jpg",
    weight: "Product Net Weight : 700gm Approx",
    sku: "SKU : UF-MOON-BASKT3"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹2999")],
    price: "₹2999",
    description: "Description : Dubai Dates 100gm, Turkish Baklawa 100gm, Turkish Treats 120gm, Dry Fruit Nutty Brittle 100gm, Cashews 50gm, Almonds 50gm, Roasted Cashews 50gm, Roasted Almonds 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065812/_DSC0028_qywsqp.jpg",
    weight: "Product Net Weight : 650gm Approx",
    sku: "SKU : UF-ROUND-BASKT1"
  },

  {
    title: "Festive Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹2999")],
    price: "₹2999",
    description: "Description : Butter Cashew Cookies 100gm, Turkish Treat 100gm, Coconut Crunch Brittle 100gm, Spiced Lavash 100gm, Nut Mix 50gm, Coffee Almond Chocolate Bar 50gm, Masala Tea 50gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1778065889/_DSC0653_dhnwxc.jpg",
    weight: "Product Net Weight : 650gm Approx",
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
            ${product.price}
          </div>

        </div>
      </${tag}>
    `;
  });
}

function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(product =>
      product.category.includes(category)
    );

    displayProducts(filteredProducts);
  }
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

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = products.filter(product => {
    const skuText = (product.sku || "")
      .replace("SKU :", "")
      .toLowerCase();

    return (
      product.title.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue) ||
      skuText.includes(searchValue) ||
      product.category.join(" ").toLowerCase().includes(searchValue)
    );
  });

  displayProducts(filtered);
});

displayProducts(products);
