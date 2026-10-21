// index.js — Part 1: JavaScript Prerequisites for React


// =====================================================
// 1. Arrow Functions
// =====================================================

const square = (n) => n * n;
const greet = (name) => `Hello, ${name}!`;
const multiply = (a, b) => a * b;
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log("--- 1. Arrow Functions ---");
console.log(square(4));
console.log(greet("Usman"));
console.log(multiply(3, 5));
console.log(getFullName("Usman", "Abdullahi"));


// =====================================================
// 2. Destructuring
// =====================================================

const student = { name: "Amaka", age: 22, course: "Frontend Development", city: "Abuja" };
const scores = [88, 72, 95, 60, 45];

const { name, course } = student;
const { age: studentAge } = student;
const [firstScore, secondScore] = scores;

console.log("\n--- 2. Destructuring ---");
console.log("Name:", name, "| Course:", course);
console.log("Student Age:", studentAge);
console.log("First Score:", firstScore, "| Second Score:", secondScore);


// =====================================================
// 3. Spread Operator
// =====================================================

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const userProfile = { username: "coder_ade", email: "ade@example.com" };

const fullStack = [...frontend, ...backend];
const updatedProfile = { ...userProfile, email: "newemail@example.com" };

console.log("\n--- 3. Spread Operator ---");
console.log("Full Stack:", fullStack);
console.log("Original Profile:", userProfile); // unchanged — spread copies, doesn't mutate
console.log("Updated Profile:", updatedProfile);


// =====================================================
// 4. Template Literals
// =====================================================

const personName = "Fatima";
const personAge = 24;
const intro = `My name is ${personName} and I am ${personAge} years old.`;

const width = 8;
const height = 5;
const areaMessage = `The area of the rectangle is ${width * height}`;

console.log("\n--- 4. Template Literals ---");
console.log(intro);
console.log(areaMessage);


// =====================================================
// 5. Array Methods — .map() and .filter() only
// =====================================================

const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true },
];

const productNames = products.map((p) => p.name);
const inStockProducts = products.filter((p) => p.inStock);
const inStockNamesUpper = products
  .filter((p) => p.inStock)
  .map((p) => p.name.toUpperCase());

console.log("\n--- 5. Array Methods ---");
console.log("Product Names:", productNames);
console.log("In Stock Products:", inStockProducts);
console.log("In Stock Names (Uppercase):", inStockNamesUpper);


// =====================================================
// 6. Ternary & Logical &&
// =====================================================

const role = "editor";
const cartItems = 0;

const accessLevel =
  role === "admin" ? "Full Access" :
  role === "editor" ? "Edit Access" :
  role === "viewer" ? "Read Only" :
  "No Access";

console.log("\n--- 6. Ternary & Logical && ---");
console.log("Access Level:", accessLevel);

const cartResult = cartItems && "View Cart";
console.log("cartItems && 'View Cart':", cartResult);
// cartItems is 0, which is falsy, so && short-circuits and returns 0 itself
// (not "View Cart"), because && returns the first falsy operand it finds.

// Fixed version — only shows "View Cart" when there are actual items
const cartDisplay = cartItems > 0 && "View Cart";
console.log("Fixed cart display:", cartDisplay); // false, since cartItems is 0


// =====================================================
// 7. ES Modules — import everything from utils.js
// =====================================================

import formatCurrency, { add, capitalize, APP_VERSION } from "./utils.js";

console.log("\n--- 7. ES Modules ---");
console.log("add(5, 7):", add(5, 7));
console.log("capitalize('frontend'):", capitalize("frontend"));
console.log("APP_VERSION:", APP_VERSION);
console.log("formatCurrency(45000):", formatCurrency(45000));