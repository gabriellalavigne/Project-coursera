// ============================================================
// MOCK DATA (API server is down)
// ============================================================
var MOCK_CATEGORIES = [
  { id: 1, short_name: "L", name: "Lunch" },
  { id: 2, short_name: "D", name: "Dinner" },
  { id: 3, short_name: "S", name: "Sushi" },
  { id: 4, short_name: "A", name: "Appetizers" },
  { id: 5, short_name: "SP", name: "Specials" },
  { id: 6, short_name: "DS", name: "Dessert" },
  { id: 7, short_name: "DK", name: "Drinks" }
];

var MOCK_MENU_ITEMS = {
  "L": [
    { name: "Kung Pao Chicken", description: "Spicy chicken with peanuts", price_small: "8.99", price_large: "12.99" },
    { name: "Fried Rice", description: "Egg fried rice with vegetables", price_small: "5.99", price_large: "9.99" },
    { name: "Lo Mein", description: "Soft noodles with vegetables", price_small: "6.99", price_large: "10.99" }
  ],
  "D": [
    { name: "Beef with Broccoli", description: "Tender beef with fresh broccoli", price_small: "10.99", price_large: "15.99" },
    { name: "General Tso's Chicken", description: "Crispy chicken in spicy sauce", price_small: "11.99", price_large: "16.99" },
    { name: "Shrimp Fried Rice", description: "Fried rice with shrimp", price_small: "8.99", price_large: "13.99" }
  ],
  "S": [
    { name: "Salmon Roll", description: "Fresh salmon with rice", price_small: "5.99", price_large: "12.99" },
    { name: "Tuna Roll", description: "Fresh tuna with rice", price_small: "6.99", price_large: "13.99" },
    { name: "California Roll", description: "Crab, avocado, cucumber", price_small: "4.99", price_large: "11.99" }
  ],
  "A": [
    { name: "Spring Rolls", description: "Crispy vegetable rolls", price_small: "3.99", price_large: "7.99" },
    { name: "Dumplings", description: "Steamed or fried dumplings", price_small: "4.99", price_large: "8.99" }
  ],
  "SP": [
    { name: "Peking Duck", description: "Famous duck with pancakes", price_small: "14.99", price_large: "24.99" },
    { name: "Lobster Special", description: "Fresh lobster with ginger", price_small: "18.99", price_large: "32.99" }
  ],
  "DS": [
    { name: "Fried Ice Cream", description: "Vanilla ice cream fried crispy", price_small: "4.99", price_large: "7.99" },
    { name: "Mango Pudding", description: "Creamy mango dessert", price_small: "3.99", price_large: "6.99" }
  ],
  "DK": [
    { name: "Thai Tea", description: "Sweet Thai iced tea", price_small: "2.99", price_large: "4.99" },
    { name: "Bubble Tea", description: "Milk tea with tapioca pearls", price_small: "3.99", price_large: "5.99" }
  ]
};

// ============================================================
// FUNCTIONS
// ============================================================

function insertHtml(selector, html) {
  var target = document.querySelector(selector);
  if (target) target.innerHTML = html;
}

function showLoading(selector) {
  insertHtml(selector, '<div class="text-center"><p>Loading...</p></div>');
}

function chooseRandomCategory(categories) {
  return categories[Math.floor(Math.random() * categories.length)];
}

// ============================================================
// SHOW HOME PAGE
// ============================================================
function showHomePage() {
  var randomCat = chooseRandomCategory(MOCK_CATEGORIES);
  var randomShort = randomCat.short_name;
  
  var html = '<div class="row"><div class="col-md-12"><h2 class="text-center">Our Menu</h2></div></div>';
  html += '<div class="row" style="margin-top:30px;display:flex;justify-content:center;gap:20px;">';
  
  // MENU
  html += '<div class="col-md-3" style="background:#f8f8f8;padding:40px;text-align:center;border-radius:10px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.1);" onclick="loadMenuItems(\'L\')">';
  html += '<h3 style="margin:0;">Menu</h3>';
  html += '</div>';
  
  // SPECIALS (dengan border merah)
  html += '<div class="col-md-3" style="background:#f8f8f8;padding:40px;text-align:center;border-radius:10px;cursor:pointer;border:3px solid #f00;box-shadow:0 2px 5px rgba(0,0,0,0.1);" onclick="loadMenuItems(\'' + randomShort + '\')">';
  html += '<h3 style="margin:0;color:#f00;">Specials</h3>';
  html += '<p style="font-size:11px;color:#999;margin-top:5px;">' + randomCat.name + '</p>';
  html += '</div>';
  
  // MAP
  html += '<div class="col-md-3" style="background:#f8f8f8;padding:40px;text-align:center;border-radius:10px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.1);" onclick="loadMenuItems(\'D\')">';
  html += '<h3 style="margin:0;">Map</h3>';
  html += '</div>';
  
  html += '</div>';
  
  insertHtml("#main-content", html);
}

// ============================================================
// LOAD MENU ITEMS
// ============================================================
function loadMenuItems(categoryShort) {
  showLoading("#main-content");
  
  var items = MOCK_MENU_ITEMS[categoryShort] || [];
  var categoryName = "";
  
  MOCK_CATEGORIES.forEach(function(cat) {
    if (cat.short_name === categoryShort) {
      categoryName = cat.name;
    }
  });
  
  if (items.length === 0) {
    insertHtml("#main-content", "<h2>" + categoryName + "</h2><p>No items found.</p>");
    return;
  }
  
  var menuHtml = '<h2 style="text-align:center;">' + categoryName + '</h2>';
  
  items.forEach(function(item) {
    menuHtml += '<div style="border:1px solid #ddd;padding:15px;margin:10px 0;border-radius:5px;">';
    menuHtml += '<h3 style="margin:0 0 10px 0;">' + item.name + '</h3>';
    menuHtml += '<p style="margin:0 0 10px 0;color:#666;">' + (item.description || '') + '</p>';
    if (item.price_small) {
      menuHtml += '<span style="display:inline-block;margin-right:15px;">Small: $' + item.price_small + '</span>';
    }
    if (item.price_large) {
      menuHtml += '<span style="display:inline-block;">Large: $' + item.price_large + '</span>';
    }
    menuHtml += '</div>';
  });
  
  // Tambahkan tombol kembali ke Home
  menuHtml += '<div style="text-align:center;margin-top:20px;">';
  menuHtml += '<button onclick="showHomePage()" style="padding:10px 30px;background:#f00;color:#fff;border:none;border-radius:5px;cursor:pointer;">Back to Home</button>';
  menuHtml += '</div>';
  
  insertHtml("#main-content", menuHtml);
}

// ============================================================
// ON PAGE LOAD
// ============================================================
document.addEventListener("DOMContentLoaded", function() {
  showHomePage();
});

// Expose functions to global
window.loadMenuItems = loadMenuItems;
window.showHomePage = showHomePage;