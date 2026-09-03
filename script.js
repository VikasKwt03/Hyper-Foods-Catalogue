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
    title: "Courtyard Collection - 250g Set of 2 Dry Fruits",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹699")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm & Almonds 125gm.",
    image: "https://res.cloudinary.com/dlqwp6v6u/image/upload/v1780399764/COURTYARD-PK02-CaAl-SMALL_q77plq.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-250-grams-set-of-2-dry-fruits",
    weight: "Product Net Weight : 250g",
    sku: "SKU : COURTYARD-PK02-CaAl-SMALL"
  },

  {
    title: "Courtyard Collection - 375g Set of 3 Dry Fruits",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹849")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹849/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm & Raisins 125gm.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1788173177/9_bohpwn.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-375-grams-set-of-3-dry-fruits",
    weight: "Product Net Weight : 375g",
    sku: "SKU : COURTYARD-PK03-CaAlRa-SMALL"
  },

  {
    title: "Courtyard Collection - 495g Set of 4 Dry Fruits",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1399")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Raisins 125gm & Pistachios 120gm.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1788173178/8_rcdux9.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-495-grams-set-of-4-dry-fruits",
    weight: "Product Net Weight : 495g",
    sku: "SKU : COURTYARD-PK04-CaAlPiRa-SMALL"
  },

  {
    title: "Courtyard Collection - 745g Set of 6 Dry Fruits",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1999")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹1999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Raisins 125gm, Pistachios 120gm, Walnuts 100gm & Dates 150gm.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1788173178/7_vcm0o0.jpg",
    link: "https://www.rawfruit.com/products/courtyard-collection-745-grams-set-of-6-dry-fruits",
    weight: "Product Net Weight : 745g",
    sku: "SKU : COURTYARD-PK06-CaAlRaWaPiDa-SMALL"
  },


  {
    title: "Bouquet Bloom Dry Fruits Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1699")],
    // price: "₹499",
    price: "<span class=b2b>Bulk Price</span> ₹1699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Raisins 125gm, Pistachios 120gm.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787226306/255_cl2xa4.jpg",
    link: "https://www.rawfruit.com/products/premium-dry-fruits-gift-hamper",
    weight: "Product Net Weight : 495g",
    sku: "SKU : HOT-BQT-BLOM-HMPR1"
  },

  {
    title: "Dry Fruits Hamper 495 Grams",
    category: ["Assorted Hampers", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Raisins 125gm, Pistachios 120gm.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787226580/Amazon_Rakhi_Product_Listings_2026_6_xezet8.jpg",
    link: "https://www.rawfruit.com/products/healthy-dry-fruits-gift-hamper-for-festive-gifting",
    weight: "Product Net Weight : 495g",
    sku: "SKU : HOT-ONEKG-HMPR-TRAY43"
  },

  {
    title: "Dry Fruits Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 125gm, Almonds 125gm, Raisins 125gm, Pistachios 120gm.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787226581/Amazon_Rakhi_Product_Listings_2026_7_rugjnb.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-hamper-gift-pack",
    weight: "Product Net Weight : 495g",
    sku: "SKU : HOT-ONEKG-HMPR-TRAY44"
  },

  {
    title: "Gift From The Orchards Dry Fruits Hamper",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹449")],
    price: "<span class=b2b>Bulk Price</span> ₹449/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 30g, Almonds 30g, Raisins 30g, Pistachios 30g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787226872/317_hscmm0.jpg",
    link: "https://www.rawfruit.com/products/gifts-from-the-orchards-dry-fruits-gift-pack",
    weight: "Product Net Weight : 120g",
    sku: "SKU : GFORCH-GREEN-HAMPER1"
  },

  {
    title: "Gift From The Orchards Brittle Gift Pack",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹349")],
    price: "<span class=b2b>Bulk Price</span> ₹349/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Coconut Crunch Brittle 100g, Chocolate Peanut Butter Brittle 100g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787226888/332_wwh6hp.jpg",
    link: "https://www.rawfruit.com/products/gifts-from-the-orchards-brittles-gift-pack",
    weight: "Product Net Weight : 200g",
    sku: "SKU : GFORCH-GREEN-HAMPER2"
  },

  {
    title: "Gift From The Orchards Dry Fruits with Sweets",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹449")],
    price: "<span class=b2b>Bulk Price</span> ₹449/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 100g, Almonds 30g, Raisins 30g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787226899/50_yfkqzv.jpg",
    link: "https://www.rawfruit.com/products/gifts-from-the-orchards-dry-fruits-sweets-gift-pack",
    weight: "Product Net Weight : 160g",
    sku: "SKU : GFORCH-GREEN-HAMPER3"
  },

  {
    title: "Gift From The Orchards Dry Fruits with Brittles",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹549")],
    price: "<span class=b2b>Bulk Price</span> ₹549/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Coconut Crunch Brittle 100g, Chocolate Peanut Butter Brittle 100g, Cashews 30g, Almonds 30g, Raisins 30g, Pistachios 30g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787227550/303_cmdi4d.jpg",
    link: "https://www.rawfruit.com/products/gifts-from-the-orchards-dry-fruits-brittles-gift-pack",
    weight: "Product Net Weight : 320g",
    sku: "SKU : GFORCH-BLUE-HAMPER1"
  },

  {
    title: "Four Seasons Pack of 3 Dry Fruits",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100g, Almonds 100g, Pistachios 100g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787227775/B0H9SBX1CS.MAIN_asnpud.jpg",
    link: "https://www.rawfruit.com/products/dry-fruits-gift-pack-cashews-almonds-pistachios",
    weight: "Product Net Weight : 300g",
    sku: "SKU : RF-G-SEASON-AlCaPi"
  },

  {
    title: "Four Seasons Pack of 4 Dry Fruits",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100g, Almonds 100g, Raisins 100g, Pistachios 100g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787227788/B0H9SGLHT1.MAIN_ic2pxa.jpg",
    link: "https://www.rawfruit.com/products/assorted-dry-fruits-celebration-box",
    weight: "Product Net Weight : 400g",
    sku: "SKU : RF-P-SEASON-CaAlRaPi"
  },

  {
    title: "New Blossom Dry Fruits Hamper",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100g, Almonds 100g, Pistachios 80g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787228510/385_iffjs3.jpg",
    link: "https://www.rawfruit.com/products/festive-celebration-dry-fruits-gift-pack",
    weight: "Product Net Weight : 280g",
    sku: "SKU : RF-BLOSSOM-SML-CaAlPi"
  },

  {
    title: "New Blossom Dry Fruits with Brittle Hamper",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹699")],
    price: "<span class=b2b>Bulk Price</span> ₹699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100g, Almonds 100g, Peanut Crush Brittle 100g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787228538/350_xlu82r.jpg",
    link: "https://www.rawfruit.com/products/festive-dry-fruits-gift-pack-with-brittles",
    weight: "Product Net Weight : 300g",
    sku: "SKU : RF-BLOSSOM-SML-HMPR1"
  },

  {
    title: "New Blossom Dry Fruits with Sweets Hamper",
    category: ["Dry Fruits Gift Pack", getBudgetCategory("₹1399")],
    price: "<span class=b2b>Bulk Price</span> ₹1399/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cashews 100g, Almonds 100g, Coconut Crunch Brittle 100g, Peanut Crush Brittle 100g, 9 Sweets Bites(3 Pieces Each Flavour, Chocolate, Coffee & Mango)",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787228560/1_epg9eh.jpg",
    link: "https://www.rawfruit.com/products/celebration-hamper-with-dry-fruits-brittles-sweets",
    weight: "Product Net Weight : 560g",
    sku: "SKU : RF-BLOSSOM-BIG -HMPR1"
  },

  {
    title: "Snacks Cookies Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹899")],
    price: "<span class=b2b>Bulk Price</span> ₹899/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Cinnamon Spiced Sticks Snacks 100g, Dates & Honey Cookies 100g, Nuts & Dates Bar 160g, Coffee Bloom Solid Perfume.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787229269/150_s9ggww.jpg",
    link: " ",
    weight: "Product Net Weight : 370g",
    sku: "SKU : HOT-JOYBOX-HAMPER6"
  },

  {
    title: "Snacks Chocolate Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹699")],
    price: "<span class=b2b>Bulk Price</span> ₹699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Biscotti Pizza Mini Snacks 100g, Mocha Almond Dragees 90g, Oud & Amber Solid Perfume.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787229519/121_xabvts.jpg",
    link: " ",
    weight: "Product Net Weight : 200g",
    sku: "SKU : HOT-JOYBOX-HAMPER7"
  },

  {
    title: "Snacks, Chocolate Gift Hamper",
    category: ["Assorted Hampers", getBudgetCategory("₹599")],
    price: "<span class=b2b>Bulk Price</span> ₹599/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Roasted Cashew Cookies 100g, Coconut Crunch Brittle 100g, Twisted Wafer Rolls 90g, Rain Forest Solid Perfume",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787229868/111_svq4gz.jpg",
    link: " ",
    weight: "Product Net Weight : 300g",
    sku: "SKU : HOT-JOYBOX-HAMPER8"
  },

  {
    title: "Sweets & Savoury Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹699")],
    price: "<span class=b2b>Bulk Price</span> ₹699/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200g, Dry Masala Kachori 150g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787230046/B0CBG1DT99.PT03_z77pul.jpg",
    link: "https://www.rawfruit.com/products/sweets-with-savoury-gift-pack",
    weight: "Product Net Weight : 350gm",
    sku: "SKU : HOT-COMBO2-KkKc"
  },

  {
    title: "Sweets & Savoury Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹749")],
    price: "<span class=b2b>Bulk Price</span> ₹749/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200g, Dry Masala Kachori 150g, Navaratan Mix Namkeen 150g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787230178/B0D8QHCX64.PT04_canm86.jpg",
    link: "https://www.rawfruit.com/products/kaju-katli-with-savoury-sweets-gift-pack",
    weight: "Product Net Weight : 500gm",
    sku: "SKU : HOT-COMBO3-KkKcNm"
  },

  {
    title: "Sweets & Savoury Gift Pack",
    category: ["Sweets Gift Pack", getBudgetCategory("₹999")],
    price: "<span class=b2b>Bulk Price</span> ₹999/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200g, Besan Laddu 200g, Dry Masala Kachori 150g, Navaratan Mix Namkeen 150g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787230200/B0CD4F5LM2.PT03_q9f2f9.jpg",
    link: "https://www.rawfruit.com/products/sweets-savoury-gift-pack",
    weight: "Product Net Weight : 700gm",
    sku: "SKU : HOT-COMBO4-KkBlKcNm"
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
    title: "Grand Celebration Festive Gift Hamper",
    category: ["Premium Gifts", getBudgetCategory("₹1499")],
    price: "<span class=b2b>Bulk Price</span> ₹1499/-",
    moq : "<span class=b2b>MOQ = 50 Box</span>",
    description: "Description : Kaju Katli 200g, Roasted Cashew Cookies 100g, Cheese Cracker Snacks 100g, Artisanal Date Pralines 120g, Nuts & Dates Bar 160g, Twisted Wafer Rolls 90g, Unicorn Garden Coffee Almond Milk Chocolate Bar 50g.",
    image: "https://res.cloudinary.com/dvjw5xjds/image/upload/v1787230431/B0HD7XKRHY.MAIN_autblt.jpg",
    link: " ",
    weight: "Product Net Weight : 500gm Approx",
    sku: "SKU : HOT-GRANDCELEBRATION-HAMPER1"
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
