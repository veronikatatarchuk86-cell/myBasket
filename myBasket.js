const cart = [
    { name: 'Apple Iphone 15', price: 35000, qty: 1 },
    { name: 'AirPods Pro', price: 9500, qty: 2 },
    { name: 'Phone case Silicone', price: 800, qty: 3 },
    { name: 'USB шнур', price: 400, qty: 1 },
    { name: 'Ipod Nano', price: 229, qty: 1 },
]

function updateCartUI() {
    const itemsContainer = document.getElementById('cart-items')
    itemsContainer.innerHTML = cart.map(item =>`
        <div class="cart-item">
            <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.price} грн x ${item.qty}</p>
            </div>
            <strong>${item.price * item.qty} грн</strong>
        </div>
    `).join('')
}

const report = cart.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qty;
    acc.totalQty += item.qty;
    return acc
}, { totalPrice: 0, totalQty: 0})

document.getElementById('total-price').innerText = `${report.totalPrice} грн`
document.getElementById('total-count').innerText = report.totalQty

updateCartUI()