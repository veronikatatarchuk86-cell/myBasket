# 🛒 My Basket (Shopping Cart UI)

<img width="1392" height="1094" alt="Screenshot 2026-04-02 205903" src="https://github.com/user-attachments/assets/f58b628e-1ec5-4539-b50f-6f355f57428c" />


A clean, responsive shopping cart interface built with **HTML5**, **CSS3 (Custom Properties)**, and **Vanilla JavaScript**. This project demonstrates how to dynamically render items from a data array and calculate totals efficiently.
## 🚀 Features

* **Dynamic Rendering:** Items are generated automatically from a JavaScript array using `.map()`.
* **Smart Calculations:** Uses the `.reduce()` method to calculate total price and item quantity.
* **Modern UI:** A clean, card-based design with hover effects and CSS variables for easy styling.
* **Responsive Design:** Optimized for mobile and desktop viewing.



## 📂 Project Structure

```text
├── index.html       # The structure of the cart
├── myBasket.css     # Modern styling and layout
└── myBasket.js      # Logic for data handling and UI updates
```


## 🛠️ Installation & Usage

1.  **Clone or Download** the repository to your local machine.
2.  Ensure all three files (`index.html`, `myBasket.css`, `myBasket.js`) are in the **same folder**.
3.  Open `index.html` in any modern web browser.


## 💻 Code Highlights

### Data Handling
The cart uses an array of objects to store product information, making it easy to integrate with an API later:
```javascript
const cart = [
    { name: 'Apple Iphone 15', price: 35000, qty: 1 },
    // ...
]
```

### Logic
I used the `reduce` method to process the totals in a single pass:
```javascript
const report = cart.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qty;
    acc.totalQty += item.qty;
    return acc;
}, { totalPrice: 0, totalQty: 0 });
```

---

## 🎨 Customization
You can easily change the primary theme color by modifying the CSS variable in `myBasket.css`:
```css
:root {
  --primary: #6366f1; /* Change this hex code to your preferred color */
}
```

## 📝 License
This project is open-source and free to use for educational purposes.

---

