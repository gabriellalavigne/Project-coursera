// Mock data for when API server is down
var MOCK_CATEGORIES = [
  { id: 1, short_name: "L", name: "Lunch", special_instructions: "" },
  { id: 2, short_name: "D", name: "Dinner", special_instructions: "" },
  { id: 3, short_name: "S", name: "Sushi", special_instructions: "" },
  { id: 4, short_name: "A", name: "Appetizers", special_instructions: "" },
  { id: 5, short_name: "SP", name: "Specials", special_instructions: "" },
  { id: 6, short_name: "DS", name: "Dessert", special_instructions: "" },
  { id: 7, short_name: "DK", name: "Drinks", special_instructions: "" }
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