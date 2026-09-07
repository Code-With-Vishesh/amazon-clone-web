/* =========================================================
   PRODUCT DATA (demo data — not real inventory)
   ========================================================= */
const PRODUCTS = [
    { id: 'p1', title: 'Wireless Over-Ear Headphones with Active Noise Cancellation', category: 'electronics', brand: 'SoundCore', price: 2499, mrp: 4999, rating: 4.3, reviews: 1245, image: 'https://picsum.photos/seed/headphone1/400/400', inStock: true, dateAdded: 20, popularity: 92, description: 'Immersive sound with active noise cancellation, 30-hour battery life, and a foldable design for travel.', features: ['Active noise cancellation', '30-hour battery life', 'Bluetooth 5.2', 'Foldable design'] },
    { id: 'p2', title: 'Bluetooth Gaming Headphones with Mic', category: 'electronics', brand: 'SoundCore', price: 1799, mrp: 2999, rating: 4.1, reviews: 812, image: 'https://picsum.photos/seed/headphone2/400/400', inStock: true, dateAdded: 5, popularity: 70, description: 'Low-latency gaming headset with a detachable boom mic and RGB lighting.', features: ['Low latency mode', 'Detachable mic', 'RGB lighting', '20-hour battery'] },
    { id: 'p3', title: '108MP Quad Camera Smartphone, 8GB RAM, 128GB Storage', category: 'mobiles', brand: 'Novatel', price: 15999, mrp: 21999, rating: 4.4, reviews: 3021, image: 'https://picsum.photos/seed/phone1/400/400', inStock: true, dateAdded: 2, popularity: 98, description: 'Flagship-grade camera performance with a smooth 120Hz display and all-day battery.', features: ['108MP quad camera', '120Hz AMOLED display', '5000mAh battery', '33W fast charging'] },
    { id: 'p4', title: '5G Smartphone with Snapdragon Processor, 6GB RAM', category: 'mobiles', brand: 'Orbix', price: 12499, mrp: 16999, rating: 4.0, reviews: 987, image: 'https://picsum.photos/seed/phone2/400/400', inStock: true, dateAdded: 40, popularity: 65, description: 'Fast 5G connectivity with a reliable processor for everyday multitasking.', features: ['5G ready', 'Snapdragon processor', 'Dual SIM', '6.5 inch display'] },
    { id: 'p5', title: 'Budget Smartphone, 4GB RAM, 64GB Storage', category: 'mobiles', brand: 'Orbix', price: 7999, mrp: 9999, rating: 3.9, reviews: 540, image: 'https://picsum.photos/seed/phone3/400/400', inStock: false, dateAdded: 60, popularity: 40, description: 'A reliable entry-level phone for calls, messaging, and light browsing.', features: ['64GB storage', 'Dual camera', 'Long battery life'] },
    { id: 'p6', title: "Men's Slim Fit Casual Shirt", category: 'fashion', brand: 'Urban Thread', price: 799, mrp: 1499, rating: 4.2, reviews: 2109, image: 'https://picsum.photos/seed/shirt1/400/400', inStock: true, dateAdded: 8, popularity: 80, description: 'Breathable cotton-blend fabric with a tailored slim fit for everyday wear.', features: ['100% cotton blend', 'Machine washable', 'Slim fit'] },
    { id: 'p7', title: "Women's Floral Printed A-Line Dress", category: 'fashion', brand: 'Urban Thread', price: 1099, mrp: 2199, rating: 4.5, reviews: 1560, image: 'https://picsum.photos/seed/dress1/400/400', inStock: true, dateAdded: 15, popularity: 88, description: 'Lightweight A-line dress with a floral print, perfect for casual outings.', features: ['A-line silhouette', 'Breathable fabric', 'Machine washable'] },
    { id: 'p8', title: 'Running Shoes with Cushioned Sole', category: 'fashion', brand: 'Campus Footwear', price: 1499, mrp: 2999, rating: 4.3, reviews: 4021, image: 'https://picsum.photos/seed/shoes1/400/400', inStock: true, dateAdded: 3, popularity: 95, description: 'Lightweight running shoes with responsive cushioning for daily training.', features: ['Cushioned midsole', 'Breathable mesh upper', 'Non-slip outsole'] },
    { id: 'p9', title: 'Leather Wallet for Men', category: 'fashion', brand: 'Urban Thread', price: 499, mrp: 999, rating: 4.0, reviews: 690, image: 'https://picsum.photos/seed/wallet1/400/400', inStock: true, dateAdded: 25, popularity: 55, description: 'Genuine leather wallet with multiple card slots and a coin pocket.', features: ['Genuine leather', '6 card slots', 'Coin pocket'] },
    { id: 'p10', title: 'Non-Stick Cookware Set, 5 Pieces', category: 'home', brand: 'HomeStyle', price: 1899, mrp: 3499, rating: 4.4, reviews: 2314, image: 'https://picsum.photos/seed/cookware1/400/400', inStock: true, dateAdded: 12, popularity: 85, description: 'Durable non-stick cookware set suitable for all stovetops including induction.', features: ['Induction compatible', 'PFOA-free coating', '5-piece set'] },
    { id: 'p11', title: 'Memory Foam Mattress, Queen Size', category: 'home', brand: 'SleepWell', price: 8999, mrp: 14999, rating: 4.6, reviews: 1875, image: 'https://picsum.photos/seed/mattress1/400/400', inStock: true, dateAdded: 30, popularity: 78, description: 'Pressure-relieving memory foam mattress for a restful night\'s sleep.', features: ['High-density memory foam', 'Breathable cover', '10-year warranty'] },
    { id: 'p12', title: '3-Seater Fabric Sofa', category: 'home', brand: 'HomeStyle', price: 17999, mrp: 24999, rating: 4.1, reviews: 430, image: 'https://picsum.photos/seed/sofa1/400/400', inStock: true, dateAdded: 45, popularity: 60, description: 'Comfortable 3-seater sofa with sturdy wooden frame and soft fabric upholstery.', features: ['Solid wood frame', 'Removable cushion covers', 'Fabric upholstery'] },
    { id: 'p13', title: 'LED Desk Lamp with Adjustable Brightness', category: 'home', brand: 'BrightHome', price: 699, mrp: 1299, rating: 4.2, reviews: 980, image: 'https://picsum.photos/seed/lamp1/400/400', inStock: true, dateAdded: 18, popularity: 62, description: 'Eye-care LED desk lamp with multiple brightness levels and USB charging port.', features: ['5 brightness levels', 'USB charging port', 'Foldable arm'] },
    { id: 'p14', title: 'The Silent Path: A Novel', category: 'books', brand: 'Penview Press', price: 299, mrp: 499, rating: 4.5, reviews: 3200, image: 'https://picsum.photos/seed/book1/400/400', inStock: true, dateAdded: 6, popularity: 90, description: 'A gripping story of resilience and discovery set against a small coastal town.', features: ['Paperback', '320 pages', 'Fiction'] },
    { id: 'p15', title: 'Mastering Personal Finance: A Practical Guide', category: 'books', brand: 'Penview Press', price: 399, mrp: 699, rating: 4.3, reviews: 1450, image: 'https://picsum.photos/seed/book2/400/400', inStock: true, dateAdded: 22, popularity: 75, description: 'Practical strategies for budgeting, saving, and investing for beginners.', features: ['Paperback', '256 pages', 'Non-fiction'] },
    { id: 'p16', title: "Children's Illustrated Story Collection", category: 'books', brand: 'Little Readers', price: 249, mrp: 399, rating: 4.7, reviews: 890, image: 'https://picsum.photos/seed/book3/400/400', inStock: true, dateAdded: 50, popularity: 68, description: 'A colorful collection of bedtime stories for young readers.', features: ['Hardcover', 'Ages 3-8', 'Illustrated'] },
    { id: 'p17', title: 'Vitamin C Brightening Face Serum', category: 'beauty', brand: 'GlowLab', price: 599, mrp: 999, rating: 4.4, reviews: 2670, image: 'https://picsum.photos/seed/serum1/400/400', inStock: true, dateAdded: 4, popularity: 89, description: 'Lightweight serum formulated to brighten skin tone and reduce dullness.', features: ['Vitamin C enriched', 'Suitable for all skin types', '30ml bottle'] },
    { id: 'p18', title: 'Herbal Shampoo & Conditioner Combo', category: 'beauty', brand: 'GlowLab', price: 449, mrp: 799, rating: 4.1, reviews: 1120, image: 'https://picsum.photos/seed/shampoo1/400/400', inStock: true, dateAdded: 33, popularity: 58, description: 'Sulfate-free herbal formula for softer, healthier-looking hair.', features: ['Sulfate-free', 'Herbal extracts', 'Combo pack'] },
    { id: 'p19', title: 'Matte Lipstick Set, 6 Shades', category: 'beauty', brand: 'ColorPop', price: 799, mrp: 1499, rating: 4.3, reviews: 1980, image: 'https://picsum.photos/seed/lipstick1/400/400', inStock: true, dateAdded: 10, popularity: 82, description: 'Long-lasting matte lipstick set in six versatile everyday shades.', features: ['Long-lasting matte finish', '6 shades', 'Cruelty-free'] },
    { id: 'p20', title: 'Yoga Mat with Carry Strap, 6mm Thick', category: 'sports', brand: 'FitGear', price: 599, mrp: 999, rating: 4.5, reviews: 2450, image: 'https://picsum.photos/seed/yogamat1/400/400', inStock: true, dateAdded: 14, popularity: 84, description: 'Extra-thick non-slip yoga mat for comfortable practice at home or the studio.', features: ['6mm thickness', 'Non-slip surface', 'Includes carry strap'] },
    { id: 'p21', title: 'Adjustable Dumbbell Set, 20kg', category: 'sports', brand: 'FitGear', price: 2999, mrp: 4499, rating: 4.2, reviews: 760, image: 'https://picsum.photos/seed/dumbbell1/400/400', inStock: true, dateAdded: 27, popularity: 66, description: 'Space-saving adjustable dumbbells for a full range of home workouts.', features: ['Adjustable up to 20kg', 'Space-saving design', 'Anti-slip grip'] },
    { id: 'p22', title: 'Cricket Bat, Kashmir Willow', category: 'sports', brand: 'ProSport', price: 1299, mrp: 1999, rating: 4.0, reviews: 340, image: 'https://picsum.photos/seed/cricketbat1/400/400', inStock: true, dateAdded: 55, popularity: 48, description: 'Lightweight Kashmir willow bat suited for tennis-ball cricket.', features: ['Kashmir willow', 'Lightweight design', 'Full size'] },
    { id: 'p23', title: 'Remote Control Stunt Car for Kids', category: 'toys', brand: 'PlayZone', price: 899, mrp: 1599, rating: 4.3, reviews: 1230, image: 'https://picsum.photos/seed/rccar1/400/400', inStock: true, dateAdded: 9, popularity: 77, description: '360-degree stunt car with rechargeable battery, built for indoor and outdoor play.', features: ['360-degree stunts', 'Rechargeable battery', 'Ages 6+'] },
    { id: 'p24', title: 'Wooden Building Blocks Set, 100 Pieces', category: 'toys', brand: 'Little Readers', price: 699, mrp: 1199, rating: 4.6, reviews: 900, image: 'https://picsum.photos/seed/blocks1/400/400', inStock: true, dateAdded: 38, popularity: 71, description: 'Eco-friendly wooden blocks that encourage creativity and motor skills.', features: ['100 pieces', 'Non-toxic paint', 'Ages 3+'] },
];

const CATEGORY_META = {
    electronics: { label: 'Electronics', img: 'https://picsum.photos/seed/cat-electronics/300/300' },
    mobiles: { label: 'Mobiles', img: 'https://picsum.photos/seed/cat-mobiles/300/300' },
    fashion: { label: 'Fashion', img: 'https://picsum.photos/seed/cat-fashion/300/300' },
    home: { label: 'Home & Kitchen', img: 'https://picsum.photos/seed/cat-home/300/300' },
    beauty: { label: 'Beauty', img: 'https://picsum.photos/seed/cat-beauty/300/300' },
    books: { label: 'Books', img: 'https://picsum.photos/seed/cat-books/300/300' },
    sports: { label: 'Sports', img: 'https://picsum.photos/seed/cat-sports/300/300' },
    toys: { label: 'Toys', img: 'https://picsum.photos/seed/cat-toys/300/300' },
};

const KEYWORD_SUGGESTIONS = {
    headphones: ['Wireless headphones', 'Bluetooth headphones', 'Gaming headphones', 'Headphones under ₹2000'],
    phone: ['Latest smartphones', '5G phones', 'Budget phones under ₹10000', 'Phone accessories'],
    shoes: ['Running shoes', "Men's shoes", "Women's shoes", 'Sports shoes'],
    laptop: ['Gaming laptops', 'Laptop bags', 'Laptop accessories'],
    dress: ['Party dresses', 'Casual dresses', "Women's dresses"],
};

/* =========================================================
   STATE
   ========================================================= */
const state = {
    cart: loadJSON('karo_cart', []),          // [{id, qty}]
    wishlist: loadJSON('karo_wishlist', []),  // [id, id]
    orders: loadJSON('karo_orders', []),
    user: loadJSON('karo_user', null),        // {name, email}
    users: loadJSON('karo_users', {}),        // {email: {name, password}}
    heroIndex: 0,
    heroTimer: null,
    filters: { categories: new Set(), brands: new Set(), rating: 0, discount: 0, priceMax: 100000, inStock: false },
    currentQuery: '', // for results view
    currentCategory: 'all',
    sortMode: 'relevance',
    checkoutStep: 1,
    checkoutData: { speed: 'standard', pay: 'cod' },
};

function loadJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}
function saveJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
}

/* =========================================================
   UTILITIES
   ========================================================= */
function formatINR(n) {
    return '₹' + Math.round(n).toLocaleString('en-IN');
}
function starString(rating) {
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
}
function discountPct(price, mrp) {
    if (!mrp || mrp <= price) return 0;
    return Math.round(((mrp - price) / mrp) * 100);
}
function getProduct(id) {
    return PRODUCTS.find(p => p.id === id);
}
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/* =========================================================
   TOASTS
   ========================================================= */
function showToast(message, type = 'info', icon = '') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = (icon ? icon + ' ' : '') + message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.25s';
        setTimeout(() => toast.remove(), 250);
    }, 2600);
}

/* =========================================================
   VIEW ROUTING
   ========================================================= */
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.hidden = true);
    const target = document.getElementById(viewId);
    if (target) target.hidden = false;
    window.scrollTo({ top: 0, behavior: 'auto' });
}

/* =========================================================
   CART
   ========================================================= */
function getCartQty(id) {
    const item = state.cart.find(c => c.id === id);
    return item ? item.qty : 0;
}
function addToCart(id, qty = 1) {
    const product = getProduct(id);
    if (!product || !product.inStock) return;
    const item = state.cart.find(c => c.id === id);
    if (item) item.qty += qty;
    else state.cart.push({ id, qty });
    saveJSON('karo_cart', state.cart);
    updateCartCount();
    showToast('Added to cart', 'success', '✓');
    refreshProductButtons();
}
function removeFromCart(id) {
    state.cart = state.cart.filter(c => c.id !== id);
    saveJSON('karo_cart', state.cart);
    updateCartCount();
    renderCart();
    showToast('Removed from cart', 'info', '✓');
    refreshProductButtons();
}
function setCartQty(id, qty) {
    const item = state.cart.find(c => c.id === id);
    if (!item) return;
    item.qty = Math.max(1, qty);
    saveJSON('karo_cart', state.cart);
    updateCartCount();
    renderCart();
}
function cartTotal() {
    return state.cart.reduce((sum, c) => {
        const p = getProduct(c.id);
        return sum + (p ? p.price * c.qty : 0);
    }, 0);
}
function updateCartCount() {
    const count = state.cart.reduce((s, c) => s + c.qty, 0);
    document.getElementById('cart-count').textContent = count;
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const empty = document.getElementById('cart-empty');
    const layout = document.querySelector('.cart-layout');

    if (state.cart.length === 0) {
        layout.style.display = 'none';
        empty.hidden = false;
        return;
    }
    layout.style.display = '';
    empty.hidden = true;

    container.innerHTML = state.cart.map(c => {
        const p = getProduct(c.id);
        if (!p) return '';
        return `
        <div class="cart-item" data-id="${p.id}">
            <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" />
            <div>
                <p class="cart-item-title">${escapeHtml(p.title)}</p>
                <p class="cart-item-price">${formatINR(p.price)}</p>
                <div class="qty-control">
                    <button class="qty-decrease" aria-label="Decrease quantity">-</button>
                    <span>${c.qty}</span>
                    <button class="qty-increase" aria-label="Increase quantity">+</button>
                </div>
            </div>
            <button class="remove-item-btn">Remove</button>
        </div>`;
    }).join('');

    container.querySelectorAll('.cart-item').forEach(el => {
        const id = el.dataset.id;
        el.querySelector('.qty-increase').addEventListener('click', () => setCartQty(id, getCartQty(id) + 1));
        el.querySelector('.qty-decrease').addEventListener('click', () => {
            const q = getCartQty(id) - 1;
            if (q <= 0) removeFromCart(id); else setCartQty(id, q);
        });
        el.querySelector('.remove-item-btn').addEventListener('click', () => removeFromCart(id));
    });

    const subtotal = cartTotal();
    document.getElementById('cart-subtotal').textContent = formatINR(subtotal);
    document.getElementById('cart-total').textContent = formatINR(subtotal + (state.checkoutData.speed === 'express' ? 99 : 0));
}

/* =========================================================
   WISHLIST
   ========================================================= */
function isWishlisted(id) {
    return state.wishlist.includes(id);
}
function toggleWishlist(id) {
    if (isWishlisted(id)) {
        state.wishlist = state.wishlist.filter(w => w !== id);
        showToast('Removed from Wishlist', 'info', '♡');
    } else {
        state.wishlist.push(id);
        showToast('Added to Wishlist', 'success', '❤️');
    }
    saveJSON('karo_wishlist', state.wishlist);
    refreshProductButtons();
    if (!document.getElementById('view-wishlist').hidden) renderWishlist();
}
function renderWishlist() {
    const grid = document.getElementById('wishlist-grid');
    const empty = document.getElementById('wishlist-empty');
    const products = state.wishlist.map(getProduct).filter(Boolean);
    if (products.length === 0) {
        grid.innerHTML = '';
        grid.style.display = 'none';
        empty.hidden = false;
        return;
    }
    grid.style.display = '';
    empty.hidden = true;
    grid.innerHTML = products.map(renderProductCard).join('');
    bindProductCardEvents(grid);
}

/* =========================================================
   PRODUCT CARD RENDERING
   ========================================================= */
function renderProductCard(p) {
    const discount = discountPct(p.price, p.mrp);
    const wished = isWishlisted(p.id);
    const inCart = getCartQty(p.id) > 0;
    return `
    <div class="product-card" data-id="${p.id}">
        <button class="wishlist-toggle" aria-label="${wished ? 'Remove from wishlist' : 'Add to wishlist'}" aria-pressed="${wished}">
            <i class="fa-${wished ? 'solid' : 'regular'} fa-heart"></i>
        </button>
        ${p.popularity > 85 ? '<span class="badge">BEST SELLER</span>' : ''}
        <button class="product-image-btn" aria-label="View ${escapeHtml(p.title)} details">
            <div class="product-image-wrap">
                <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" />
            </div>
        </button>
        <button class="product-title-link">${escapeHtml(p.title)}</button>
        <p class="product-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating} (${p.reviews.toLocaleString('en-IN')})</p>
        <div class="product-price-row">
            <span class="product-price">${formatINR(p.price)}</span>
            ${p.mrp > p.price ? `<span class="product-mrp">${formatINR(p.mrp)}</span><span class="product-discount">${discount}% off</span>` : ''}
        </div>
        <p class="product-delivery">Free Delivery</p>
        <div class="product-card-footer">
            ${p.inStock
            ? `<button class="add-to-cart-btn ${inCart ? 'in-cart' : ''}">${inCart ? 'Added ✓ Add more' : 'Add to Cart'}</button>`
            : `<span class="out-of-stock-label">Out of Stock</span>`}
        </div>
    </div>`;
}

function bindProductCardEvents(container) {
    container.querySelectorAll('.product-card').forEach(card => {
        const id = card.dataset.id;
        const wishBtn = card.querySelector('.wishlist-toggle');
        if (wishBtn) wishBtn.addEventListener('click', () => toggleWishlist(id));

        const imgBtn = card.querySelector('.product-image-btn');
        const titleBtn = card.querySelector('.product-title-link');
        [imgBtn, titleBtn].forEach(el => el && el.addEventListener('click', () => openProductModal(id)));

        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) addBtn.addEventListener('click', () => addToCart(id, 1));
    });
}

function refreshProductButtons() {
    // Re-render whichever product lists are currently visible so cart/wishlist state stays in sync.
    if (!document.getElementById('view-home').hidden) {
        renderTodayDeals();
    }
    if (!document.getElementById('view-results').hidden) {
        renderResultsGrid();
    }
    if (!document.getElementById('view-wishlist').hidden) {
        renderWishlist();
    }
}

/* =========================================================
   HOME: CATEGORY GRID / PROMO GRID / DEALS
   ========================================================= */
function renderCategoryGrid() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = Object.entries(CATEGORY_META).map(([key, meta]) => `
        <button class="category-card" data-category="${key}">
            <img src="${meta.img}" alt="" loading="lazy" />
            <span>${meta.label}</span>
        </button>
    `).join('');
    grid.querySelectorAll('.category-card').forEach(btn => {
        btn.addEventListener('click', () => openCategory(btn.dataset.category));
    });
}

const PROMO_CARDS = [
    { title: 'Up to 60% off | Styles for Men', category: 'fashion', items: [{ img: 'https://picsum.photos/seed/promo-clothing/200/150', label: 'Clothing' }, { img: 'https://picsum.photos/seed/promo-footwear/200/150', label: 'Footwear' }, { img: 'https://picsum.photos/seed/promo-watches/200/150', label: 'Watches' }, { img: 'https://picsum.photos/seed/promo-bags/200/150', label: 'Bags' }], cta: 'See more' },
    { title: 'Redefine your living room', category: 'home', items: [{ img: 'https://picsum.photos/seed/promo-sofa/200/150', label: 'Sofas' }, { img: 'https://picsum.photos/seed/promo-chair/200/150', label: 'Office chairs' }, { img: 'https://picsum.photos/seed/promo-beanbag/200/150', label: 'Bean bags' }, { img: 'https://picsum.photos/seed/promo-explore/200/150', label: 'Explore all' }], cta: 'Visit our furniture store' },
    { title: 'Top rated, premium quality electronics', category: 'electronics', items: [{ img: 'https://picsum.photos/seed/promo-home1/200/150', label: 'Home Products' }, { img: 'https://picsum.photos/seed/promo-furn/200/150', label: 'Gadgets' }, { img: 'https://picsum.photos/seed/promo-daily/200/150', label: 'Daily essentials' }, { img: 'https://picsum.photos/seed/promo-fash/200/150', label: 'Accessories' }], cta: 'See more' },
    { title: 'Daily essentials, delivered fast', category: 'home', items: [{ img: 'https://picsum.photos/seed/promo-e1/200/150', label: 'Groceries' }, { img: 'https://picsum.photos/seed/promo-e2/200/150', label: 'Cleaning' }, { img: 'https://picsum.photos/seed/promo-e3/200/150', label: 'Kitchen' }, { img: 'https://picsum.photos/seed/promo-e4/200/150', label: 'Personal care' }], cta: 'See more' },
];

function renderPromoGrids() {
    const html1 = PROMO_CARDS.slice(0, 2).map(renderPromoCard).join('');
    const html2 = PROMO_CARDS.slice(2, 4).concat(PROMO_CARDS.slice(0, 2)).map(renderPromoCard).join('');
    document.getElementById('promo-grid-1').innerHTML = html1;
    document.getElementById('promo-grid-2').innerHTML = html2;
    document.querySelectorAll('.card-product-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            openCategory(e.target.dataset.category);
        });
    });
}

function renderPromoCard(card) {
    return `
    <div class="card-product">
        <h2>${escapeHtml(card.title)}</h2>
        <div class="card-product-nested-card">
            ${card.items.map(i => `
                <div class="card-nested">
                    <img src="${i.img}" alt="" loading="lazy" />
                    <p>${escapeHtml(i.label)}</p>
                </div>`).join('')}
        </div>
        <button class="card-product-btn" data-category="${card.category}">${escapeHtml(card.cta)}</button>
    </div>`;
}

function renderTodayDeals() {
    const list = document.getElementById('today-deals-list');
    const deals = PRODUCTS.filter(p => discountPct(p.price, p.mrp) >= 25).slice(0, 10);
    list.innerHTML = deals.map(renderProductCard).join('');
    bindProductCardEvents(list);
}

/* =========================================================
   PRODUCT DETAILS MODAL
   ========================================================= */
function openProductModal(id) {
    const p = getProduct(id);
    if (!p) return;
    const discount = discountPct(p.price, p.mrp);
    const body = document.getElementById('product-modal-body');
    body.innerHTML = `
        <div class="pm-layout">
            <div>
                <img class="pm-main-image" id="pm-main-image" src="${p.image}" alt="${escapeHtml(p.title)}" />
                <div class="pm-thumbs">
                    <img src="${p.image}" class="active" alt="" />
                    <img src="${p.image}?grayscale" alt="" />
                    <img src="${p.image}?blur=1" alt="" />
                </div>
            </div>
            <div>
                <h2 class="pm-title" id="pm-title">${escapeHtml(p.title)}</h2>
                <p class="pm-brand">Brand: ${escapeHtml(p.brand)}</p>
                <p class="product-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating} &middot; ${p.reviews.toLocaleString('en-IN')} ratings</p>
                <div class="pm-price-row">
                    <span class="pm-price">${formatINR(p.price)}</span>
                    ${p.mrp > p.price ? `<span class="product-mrp">${formatINR(p.mrp)}</span><span class="product-discount">${discount}% OFF</span>` : ''}
                </div>
                <p class="pm-availability ${p.inStock ? 'in-stock' : 'out-stock'}">${p.inStock ? 'In Stock' : 'Currently Unavailable'}</p>
                <p class="product-delivery">Free delivery to ${document.getElementById('delivery-pincode').textContent}</p>
                <p>${escapeHtml(p.description)}</p>
                <ul class="pm-features">${p.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
                ${p.inStock ? `
                <div class="pm-qty-row">
                    <span>Quantity</span>
                    <div class="qty-control">
                        <button id="pm-qty-decrease" aria-label="Decrease quantity">-</button>
                        <span id="pm-qty-value">1</span>
                        <button id="pm-qty-increase" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <div class="pm-actions">
                    <button class="primary-btn" id="pm-add-cart">Add to Cart</button>
                    <button class="buy-now-btn" id="pm-buy-now">Buy Now</button>
                    <button class="wishlist-btn" id="pm-wishlist">${isWishlisted(p.id) ? '❤️ In Wishlist' : '♡ Add to Wishlist'}</button>
                </div>` : `
                <div class="pm-actions">
                    <button class="wishlist-btn" id="pm-wishlist">${isWishlisted(p.id) ? '❤️ In Wishlist' : '♡ Add to Wishlist'}</button>
                </div>`}
            </div>
        </div>
    `;

    let qty = 1;
    if (p.inStock) {
        body.querySelector('#pm-qty-increase').addEventListener('click', () => {
            qty++;
            body.querySelector('#pm-qty-value').textContent = qty;
        });
        body.querySelector('#pm-qty-decrease').addEventListener('click', () => {
            qty = Math.max(1, qty - 1);
            body.querySelector('#pm-qty-value').textContent = qty;
        });
        body.querySelector('#pm-add-cart').addEventListener('click', () => addToCart(p.id, qty));
        body.querySelector('#pm-buy-now').addEventListener('click', () => {
            addToCart(p.id, qty);
            closeModal('product-modal-overlay');
            openCheckout();
        });
    }
    body.querySelector('#pm-wishlist').addEventListener('click', () => {
        toggleWishlist(p.id);
        body.querySelector('#pm-wishlist').textContent = isWishlisted(p.id) ? '❤️ In Wishlist' : '♡ Add to Wishlist';
    });

    body.querySelectorAll('.pm-thumbs img').forEach(thumb => {
        thumb.addEventListener('click', () => {
            body.querySelectorAll('.pm-thumbs img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            document.getElementById('pm-main-image').src = thumb.src;
        });
    });

    openModal('product-modal-overlay');
}

/* =========================================================
   SEARCH + FILTER + SORT (Results view)
   ========================================================= */
function matchesQuery(p, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    return p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        CATEGORY_META[p.category].label.toLowerCase().includes(q);
}

function getFilteredCategoryScope() {
    // base scope before filter panel is applied: by search query / category select
    return PRODUCTS.filter(p => {
        if (state.currentCategory !== 'all' && p.category !== state.currentCategory) return false;
        return matchesQuery(p, state.currentQuery);
    });
}

function applyFiltersAndSort() {
    let list = getFilteredCategoryScope();

    if (state.filters.categories.size > 0) {
        list = list.filter(p => state.filters.categories.has(p.category));
    }
    if (state.filters.brands.size > 0) {
        list = list.filter(p => state.filters.brands.has(p.brand));
    }
    if (state.filters.rating > 0) {
        list = list.filter(p => p.rating >= state.filters.rating);
    }
    if (state.filters.discount > 0) {
        list = list.filter(p => discountPct(p.price, p.mrp) >= state.filters.discount);
    }
    if (state.filters.priceMax < 100000) {
        list = list.filter(p => p.price <= state.filters.priceMax);
    }
    if (state.filters.inStock) {
        list = list.filter(p => p.inStock);
    }

    switch (state.sortMode) {
        case 'price-asc': list = list.slice().sort((a, b) => a.price - b.price); break;
        case 'price-desc': list = list.slice().sort((a, b) => b.price - a.price); break;
        case 'rating': list = list.slice().sort((a, b) => b.rating - a.rating); break;
        case 'newest': list = list.slice().sort((a, b) => a.dateAdded - b.dateAdded); break;
        case 'discount': list = list.slice().sort((a, b) => discountPct(b.price, b.mrp) - discountPct(a.price, a.mrp)); break;
        case 'popularity': list = list.slice().sort((a, b) => b.popularity - a.popularity); break;
        default: break; // relevance = original order
    }
    return list;
}

function renderResultsGrid() {
    const list = applyFiltersAndSort();
    const grid = document.getElementById('results-grid');
    const empty = document.getElementById('results-empty');
    const countEl = document.getElementById('results-count');

    countEl.textContent = `${list.length} result${list.length === 1 ? '' : 's'}`;

    if (list.length === 0) {
        grid.innerHTML = '';
        grid.style.display = 'none';
        empty.hidden = false;
        return;
    }
    grid.style.display = '';
    empty.hidden = true;
    grid.innerHTML = list.map(renderProductCard).join('');
    bindProductCardEvents(grid);
}

function renderFilterPanel() {
    const categoryBox = document.getElementById('filter-category');
    const brandBox = document.getElementById('filter-brand');
    const ratingBox = document.getElementById('filter-rating');
    const discountBox = document.getElementById('filter-discount');

    const scope = getFilteredCategoryScope();
    const categories = [...new Set(scope.map(p => p.category))];
    const brands = [...new Set(scope.map(p => p.brand))];

    categoryBox.innerHTML = categories.map(c => `
        <label><input type="checkbox" data-filter="category" value="${c}" ${state.filters.categories.has(c) ? 'checked' : ''}/> ${CATEGORY_META[c].label}</label>
    `).join('');

    brandBox.innerHTML = brands.map(b => `
        <label><input type="checkbox" data-filter="brand" value="${b}" ${state.filters.brands.has(b) ? 'checked' : ''}/> ${escapeHtml(b)}</label>
    `).join('');

    ratingBox.innerHTML = [4, 3].map(r => `
        <label><input type="radio" name="rating-filter" data-filter="rating" value="${r}" ${state.filters.rating === r ? 'checked' : ''}/> ${r}★ &amp; above</label>
    `).join('') + `<label><input type="radio" name="rating-filter" data-filter="rating" value="0" ${state.filters.rating === 0 ? 'checked' : ''}/> Any rating</label>`;

    discountBox.innerHTML = [10, 25, 50].map(d => `
        <label><input type="radio" name="discount-filter" data-filter="discount" value="${d}" ${state.filters.discount === d ? 'checked' : ''}/> ${d}% or more</label>
    `).join('') + `<label><input type="radio" name="discount-filter" data-filter="discount" value="0" ${state.filters.discount === 0 ? 'checked' : ''}/> Any discount</label>`;

    document.getElementById('price-max').value = state.filters.priceMax;
    document.getElementById('price-max-label').textContent = state.filters.priceMax.toLocaleString('en-IN');
    document.getElementById('filter-instock').checked = state.filters.inStock;

    categoryBox.querySelectorAll('input').forEach(cb => cb.addEventListener('change', () => {
        cb.checked ? state.filters.categories.add(cb.value) : state.filters.categories.delete(cb.value);
        renderResultsGrid();
    }));
    brandBox.querySelectorAll('input').forEach(cb => cb.addEventListener('change', () => {
        cb.checked ? state.filters.brands.add(cb.value) : state.filters.brands.delete(cb.value);
        renderResultsGrid();
    }));
    ratingBox.querySelectorAll('input').forEach(r => r.addEventListener('change', () => {
        state.filters.rating = Number(r.value);
        renderResultsGrid();
    }));
    discountBox.querySelectorAll('input').forEach(r => r.addEventListener('change', () => {
        state.filters.discount = Number(r.value);
        renderResultsGrid();
    }));
}

function resetFilters() {
    state.filters = { categories: new Set(), brands: new Set(), rating: 0, discount: 0, priceMax: 100000, inStock: false };
    renderFilterPanel();
    renderResultsGrid();
}

function openResultsView({ query = '', category = 'all', sort = null } = {}) {
    state.currentQuery = query;
    state.currentCategory = category;
    resetFiltersSilently();
    if (sort) state.sortMode = sort;
    document.getElementById('sort-select').value = state.sortMode;

    const title = query
        ? `Search results for "${query}"`
        : (category === 'all' ? 'All Products' : CATEGORY_META[category]?.label || 'Products');
    document.getElementById('results-title').textContent = title;

    renderFilterPanel();
    renderResultsGrid();
    showView('view-results');
}

function resetFiltersSilently() {
    state.filters = { categories: new Set(), brands: new Set(), rating: 0, discount: 0, priceMax: 100000, inStock: false };
}

function openCategory(category) {
    if (!category) return;
    closeSidebar();
    openResultsView({ category });
}

/* =========================================================
   SEARCH BAR + SUGGESTIONS
   ========================================================= */
function setupSearch() {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const select = document.getElementById('search-select');
    const suggestBox = document.getElementById('search-suggestions');

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        if (!q) { suggestBox.hidden = true; suggestBox.innerHTML = ''; return; }

        let suggestions = [];
        for (const key in KEYWORD_SUGGESTIONS) {
            if (key.includes(q) || q.includes(key)) {
                suggestions = KEYWORD_SUGGESTIONS[key];
                break;
            }
        }
        if (suggestions.length === 0) {
            suggestions = PRODUCTS.filter(p => matchesQuery(p, q)).slice(0, 5).map(p => p.title);
        }

        if (suggestions.length === 0) { suggestBox.hidden = true; return; }
        suggestBox.hidden = false;
        suggestBox.innerHTML = suggestions.slice(0, 6).map(s => `
            <button type="button" role="option"><i class="fa-solid fa-magnifying-glass" style="opacity:.5"></i> ${escapeHtml(s)}</button>
        `).join('');
        suggestBox.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.textContent.trim();
                suggestBox.hidden = true;
                runSearch();
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (!form.contains(e.target)) suggestBox.hidden = true;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        suggestBox.hidden = true;
        runSearch();
    });

    function runSearch() {
        const query = input.value.trim();
        const cat = select.value;
        if (!query && cat === 'all') {
            showToast('Please enter a search term', 'error', '⚠');
            return;
        }
        openResultsView({ query, category: cat });
    }
}

/* =========================================================
   HERO CAROUSEL
   ========================================================= */
function setupHeroCarousel() {
    const list = document.getElementById('hero-image-list');
    const slides = list.children.length;
    const dotsContainer = document.getElementById('hero-dots');
    dotsContainer.innerHTML = Array.from({ length: slides }, (_, i) =>
        `<button role="tab" aria-label="Go to slide ${i + 1}" ${i === 0 ? 'class="active" aria-selected="true"' : 'aria-selected="false"'}></button>`
    ).join('');

    function goTo(index) {
        state.heroIndex = (index + slides) % slides;
        list.style.transform = `translateX(-${state.heroIndex * 100}%)`;
        dotsContainer.querySelectorAll('button').forEach((d, i) => {
            d.classList.toggle('active', i === state.heroIndex);
            d.setAttribute('aria-selected', i === state.heroIndex);
        });
    }

    document.getElementById('slide-btn-left').addEventListener('click', () => { goTo(state.heroIndex - 1); restartAutoplay(); });
    document.getElementById('slide-btn-right').addEventListener('click', () => { goTo(state.heroIndex + 1); restartAutoplay(); });
    dotsContainer.querySelectorAll('button').forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); restartAutoplay(); }));

    const carousel = document.getElementById('hero-carousel');
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { goTo(state.heroIndex - 1); restartAutoplay(); }
        if (e.key === 'ArrowRight') { goTo(state.heroIndex + 1); restartAutoplay(); }
    });

    // touch swipe
    let touchStartX = null;
    carousel.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (dx > 40) { goTo(state.heroIndex - 1); restartAutoplay(); }
        else if (dx < -40) { goTo(state.heroIndex + 1); restartAutoplay(); }
        touchStartX = null;
    });

    function startAutoplay() {
        state.heroTimer = setInterval(() => goTo(state.heroIndex + 1), 4500);
    }
    function restartAutoplay() {
        clearInterval(state.heroTimer);
        startAutoplay();
    }
    carousel.addEventListener('mouseenter', () => clearInterval(state.heroTimer));
    carousel.addEventListener('mouseleave', startAutoplay);

    document.querySelectorAll('.hero-cta').forEach(cta => {
        cta.addEventListener('click', (e) => {
            e.preventDefault();
            openCategory(cta.dataset.category);
        });
    });

    startAutoplay();
}

/* =========================================================
   TODAY'S DEALS CAROUSEL SCROLL
   ========================================================= */
function setupDealsCarousel() {
    const list = document.getElementById('today-deals-list');
    document.getElementById('today_deal_btn_prev').addEventListener('click', () => {
        list.scrollBy({ left: -260, behavior: 'smooth' });
    });
    document.getElementById('today_deal_btn_next').addEventListener('click', () => {
        list.scrollBy({ left: 260, behavior: 'smooth' });
    });
}

/* =========================================================
   SIDEBAR
   ========================================================= */
function openSidebar() {
    const sidebar = document.getElementById('sidebar-container-navigation-id');
    sidebar.classList.add('slidebar-show');
    document.getElementById('mobile-menu-btn').setAttribute('aria-expanded', 'true');
}
function closeSidebar() {
    const sidebar = document.getElementById('sidebar-container-navigation-id');
    sidebar.classList.remove('slidebar-show');
    document.getElementById('mobile-menu-btn').setAttribute('aria-expanded', 'false');
}
function setupSidebar() {
    document.getElementById('mobile-menu-btn').addEventListener('click', openSidebar);
    document.querySelector('.open-nav-slider').addEventListener('click', openSidebar);
    document.getElementById('sidebar-navigation-close').addEventListener('click', closeSidebar);
    document.getElementById('sidebar-container-navigation-id').addEventListener('click', (e) => {
        if (e.target.id === 'sidebar-container-navigation-id') closeSidebar();
    });
}

/* =========================================================
   MODALS (generic open/close)
   ========================================================= */
function openModal(id) {
    document.getElementById(id).hidden = false;
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).hidden = true;
    document.body.style.overflow = '';
}
function setupModals() {
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal(overlay.id);
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(overlay => {
                if (!overlay.hidden) closeModal(overlay.id);
            });
        }
    });
}

/* =========================================================
   LOGIN / SIGNUP (demo, localStorage only)
   ========================================================= */
function updateAccountUI() {
    const nameEls = [document.getElementById('account-name'), document.getElementById('sidebar-account-name')];
    if (state.user) {
        nameEls.forEach(el => el.textContent = state.user.name);
        document.getElementById('account-signed-out').hidden = true;
        document.getElementById('account-signed-in').hidden = false;
        document.getElementById('account-modal-name').textContent = state.user.name;
        document.getElementById('sidebar-signin-link').textContent = 'Sign in';
    } else {
        nameEls.forEach(el => el.textContent = 'sign in');
        document.getElementById('account-signed-out').hidden = false;
        document.getElementById('account-signed-in').hidden = true;
    }
}

function setupAccount() {
    const accountBtn = document.getElementById('account-btn');
    accountBtn.addEventListener('click', () => openModal('account-modal-overlay'));
    document.getElementById('sidebar-account-link').addEventListener('click', (e) => { e.preventDefault(); closeSidebar(); openModal('account-modal-overlay'); });
    document.getElementById('sidebar-signin-link').addEventListener('click', (e) => { e.preventDefault(); closeSidebar(); openModal('account-modal-overlay'); });

    document.getElementById('tab-login').addEventListener('click', () => switchAccountTab('login'));
    document.getElementById('tab-signup').addEventListener('click', () => switchAccountTab('signup'));

    function switchAccountTab(tab) {
        document.getElementById('tab-login').classList.toggle('active', tab === 'login');
        document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
        document.getElementById('login-form').hidden = tab !== 'login';
        document.getElementById('signup-form').hidden = tab !== 'signup';
    }

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;
        const errorEl = document.getElementById('login-error');
        const record = state.users[email];
        if (!record || record.password !== password) {
            errorEl.textContent = 'Incorrect email or password.';
            errorEl.hidden = false;
            return;
        }
        errorEl.hidden = true;
        state.user = { name: record.name, email };
        saveJSON('karo_user', state.user);
        updateAccountUI();
        closeModal('account-modal-overlay');
        showToast('Login successful', 'success', '✓');
    });

    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim().toLowerCase();
        const password = document.getElementById('signup-password').value;
        const confirm = document.getElementById('signup-confirm').value;
        const errorEl = document.getElementById('signup-error');

        if (password !== confirm) {
            errorEl.textContent = 'Passwords do not match.';
            errorEl.hidden = false;
            return;
        }
        if (state.users[email]) {
            errorEl.textContent = 'An account with this email already exists.';
            errorEl.hidden = false;
            return;
        }
        errorEl.hidden = true;
        state.users[email] = { name, password };
        saveJSON('karo_users', state.users);
        state.user = { name, email };
        saveJSON('karo_user', state.user);
        updateAccountUI();
        closeModal('account-modal-overlay');
        showToast('Account created', 'success', '✓');
    });

    document.getElementById('signout-btn').addEventListener('click', () => {
        state.user = null;
        saveJSON('karo_user', null);
        updateAccountUI();
        closeModal('account-modal-overlay');
        showToast('Signed out', 'info', '✓');
    });

    document.querySelectorAll('[data-view-link]').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal('account-modal-overlay');
            navigateTo(btn.dataset.viewLink);
        });
    });
}

/* =========================================================
   LOCATION + LANGUAGE MODALS
   ========================================================= */
function setupLocationModal() {
    document.getElementById('delivery-location-btn').addEventListener('click', () => openModal('location-modal-overlay'));
    document.getElementById('pincode-save-btn').addEventListener('click', () => {
        const input = document.getElementById('pincode-input');
        const error = document.getElementById('pincode-error');
        const value = input.value.trim();
        if (!/^\d{6}$/.test(value)) {
            error.textContent = 'Enter a valid 6-digit pincode.';
            error.hidden = false;
            return;
        }
        error.hidden = true;
        document.getElementById('delivery-pincode').textContent = value;
        closeModal('location-modal-overlay');
        showToast('Delivery location updated', 'success', '✓');
    });
}

function setupLanguageModal() {
    document.getElementById('language-btn').addEventListener('click', () => openModal('language-modal-overlay'));
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.language-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelector('.language-container p').textContent = btn.dataset.lang;
            closeModal('language-modal-overlay');
            showToast('Language preference saved', 'success', '✓');
        });
    });
}

/* =========================================================
   CHECKOUT FLOW
   ========================================================= */
function openCheckout() {
    if (state.cart.length === 0) {
        showToast('Your cart is empty', 'error', '⚠');
        return;
    }
    state.checkoutStep = 1;
    updateCheckoutStepUI();
    openModal('checkout-modal-overlay');
}

function updateCheckoutStepUI() {
    document.querySelectorAll('.checkout-panel').forEach(panel => {
        panel.hidden = Number(panel.dataset.panel) !== state.checkoutStep;
    });
    document.querySelectorAll('.checkout-steps .step').forEach(step => {
        step.classList.toggle('active', Number(step.dataset.step) === state.checkoutStep);
    });
    if (state.checkoutStep === 4) renderCheckoutReview();
}

function renderCheckoutReview() {
    const subtotal = cartTotal();
    const deliveryFee = state.checkoutData.speed === 'express' ? 99 : 0;
    const total = subtotal + deliveryFee;
    const payLabel = { cod: 'Cash on Delivery', card: 'Demo Card', upi: 'Demo UPI' }[state.checkoutData.pay];

    document.getElementById('checkout-review').innerHTML = `
        <h3>Delivery Address</h3>
        <p style="font-size:13px;color:var(--color-text-secondary)">
            ${escapeHtml(state.checkoutData.name)}, ${escapeHtml(state.checkoutData.address)},
            ${escapeHtml(state.checkoutData.city)}, ${escapeHtml(state.checkoutData.state)} - ${escapeHtml(state.checkoutData.pincode)}<br/>
            Mobile: ${escapeHtml(state.checkoutData.mobile)}
        </p>
        <h3>Items</h3>
        ${state.cart.map(c => {
        const p = getProduct(c.id);
        return `<div class="review-line"><span>${escapeHtml(p.title)} × ${c.qty}</span><span>${formatINR(p.price * c.qty)}</span></div>`;
    }).join('')}
        <h3>Payment</h3>
        <div class="review-line"><span>Method</span><span>${payLabel}</span></div>
        <h3>Total</h3>
        <div class="review-line"><span>Subtotal</span><span>${formatINR(subtotal)}</span></div>
        <div class="review-line"><span>Delivery</span><span>${deliveryFee ? formatINR(deliveryFee) : 'Free'}</span></div>
        <div class="review-line" style="font-weight:700"><span>Total</span><span>${formatINR(total)}</span></div>
    `;
}

function setupCheckout() {
    document.getElementById('checkout-btn').addEventListener('click', openCheckout);

    document.getElementById('checkout-panel-1').addEventListener('submit', (e) => {
        e.preventDefault();
        state.checkoutData.name = document.getElementById('co-name').value.trim();
        state.checkoutData.mobile = document.getElementById('co-mobile').value.trim();
        state.checkoutData.pincode = document.getElementById('co-pincode').value.trim();
        state.checkoutData.city = document.getElementById('co-city').value.trim();
        state.checkoutData.state = document.getElementById('co-state').value.trim();
        state.checkoutData.address = document.getElementById('co-address').value.trim();

        if (!/^\d{10}$/.test(state.checkoutData.mobile) || !/^\d{6}$/.test(state.checkoutData.pincode)) {
            const err = document.getElementById('co-address-error');
            err.textContent = 'Please enter a valid 10-digit mobile number and 6-digit PIN code.';
            err.hidden = false;
            return;
        }
        document.getElementById('co-address-error').hidden = true;
        state.checkoutStep = 2;
        updateCheckoutStepUI();
    });

    document.querySelectorAll('.delivery-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.delivery-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            state.checkoutData.speed = opt.dataset.speed;
        });
    });
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            state.checkoutData.pay = opt.dataset.pay;
        });
    });

    document.querySelectorAll('[data-next-step]').forEach(btn => {
        btn.addEventListener('click', () => {
            state.checkoutStep = Number(btn.dataset.nextStep);
            updateCheckoutStepUI();
        });
    });
    document.querySelectorAll('[data-back-step]').forEach(btn => {
        btn.addEventListener('click', () => {
            state.checkoutStep = Number(btn.dataset.backStep);
            updateCheckoutStepUI();
        });
    });

    document.getElementById('place-order-btn').addEventListener('click', placeOrder);
}

function placeOrder() {
    const subtotal = cartTotal();
    const deliveryFee = state.checkoutData.speed === 'express' ? 99 : 0;
    const total = subtotal + deliveryFee;
    const orderId = 'CWV-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    const etaDays = state.checkoutData.speed === 'express' ? 2 : 5;
    const etaDate = new Date();
    etaDate.setDate(etaDate.getDate() + etaDays);
    const etaLabel = etaDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    const order = {
        id: orderId,
        date: new Date().toISOString(),
        items: state.cart.map(c => ({ id: c.id, qty: c.qty, title: getProduct(c.id).title, price: getProduct(c.id).price, image: getProduct(c.id).image })),
        total,
        status: 'Order Confirmed',
        eta: etaLabel,
    };
    state.orders.unshift(order);
    saveJSON('karo_orders', state.orders);

    state.cart = [];
    saveJSON('karo_cart', state.cart);
    updateCartCount();

    closeModal('checkout-modal-overlay');
    document.getElementById('confirmation-order-id').textContent = orderId;
    document.getElementById('confirmation-total').textContent = formatINR(total);
    document.getElementById('confirmation-delivery').textContent = etaLabel;
    openModal('confirmation-modal-overlay');
    showToast('Order placed', 'success', '✓');
}

/* =========================================================
   ORDERS VIEW
   ========================================================= */
function renderOrders() {
    const list = document.getElementById('orders-list');
    const empty = document.getElementById('orders-empty');
    if (state.orders.length === 0) {
        list.innerHTML = '';
        empty.hidden = false;
        return;
    }
    empty.hidden = true;
    list.innerHTML = state.orders.map(o => `
        <div class="order-card">
            <div class="order-card-head">
                <span>Order ID: ${o.id}</span>
                <span>${new Date(o.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span>Total: ${formatINR(o.total)}</span>
                <span class="order-status">${o.status}</span>
            </div>
            <div class="order-items-row">
                ${o.items.map(i => `<img src="${i.image}" alt="${escapeHtml(i.title)}" loading="lazy" />`).join('')}
            </div>
        </div>
    `).join('');
}

/* =========================================================
   NAVIGATION HELPERS
   ========================================================= */
function navigateTo(viewId) {
    closeSidebar();
    if (viewId === 'view-cart') renderCart();
    if (viewId === 'view-wishlist') renderWishlist();
    if (viewId === 'view-orders') renderOrders();
    showView(viewId);
}

function setupGlobalNav() {
    document.getElementById('logo-home-link').addEventListener('click', (e) => { e.preventDefault(); navigateTo('view-home'); });
    document.getElementById('cart-nav-btn').addEventListener('click', () => navigateTo('view-cart'));
    document.getElementById('orders-nav-btn').addEventListener('click', () => navigateTo('view-orders'));
    document.getElementById('sidebar-orders-link').addEventListener('click', (e) => { e.preventDefault(); navigateTo('view-orders'); });
    document.getElementById('sidebar-wishlist-link').addEventListener('click', (e) => { e.preventDefault(); navigateTo('view-wishlist'); });

    document.getElementById('cart-start-shopping-btn').addEventListener('click', () => navigateTo('view-home'));
    document.getElementById('wishlist-start-shopping-btn').addEventListener('click', () => navigateTo('view-home'));
    document.getElementById('orders-start-shopping-btn').addEventListener('click', () => navigateTo('view-home'));
    document.getElementById('confirmation-continue-btn').addEventListener('click', () => {
        closeModal('confirmation-modal-overlay');
        navigateTo('view-home');
    });

    // any element with data-category anywhere in the doc (nav links, sidebar, footer, promo)
    document.body.addEventListener('click', (e) => {
        const catEl = e.target.closest('[data-category]');
        if (catEl && catEl.tagName === 'A') {
            e.preventDefault();
            const sort = catEl.dataset.sort || null;
            closeSidebar();
            openResultsView({ category: catEl.dataset.category, sort });
        }
        const scrollEl = e.target.closest('[data-scroll]');
        if (scrollEl && scrollEl.tagName === 'A') {
            e.preventDefault();
            closeSidebar();
            const targetId = scrollEl.dataset.scroll;
            navigateTo('view-home');
            requestAnimationFrame(() => {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
}

/* =========================================================
   RESULTS VIEW TOOLBAR
   ========================================================= */
function setupResultsToolbar() {
    document.getElementById('sort-select').addEventListener('change', (e) => {
        state.sortMode = e.target.value;
        renderResultsGrid();
    });
    document.getElementById('clear-filters-btn').addEventListener('click', resetFilters);
    document.getElementById('results-clear-filters-btn').addEventListener('click', resetFilters);
    document.getElementById('filter-instock').addEventListener('change', (e) => {
        state.filters.inStock = e.target.checked;
        renderResultsGrid();
    });
    document.getElementById('price-max').addEventListener('input', (e) => {
        state.filters.priceMax = Number(e.target.value);
        document.getElementById('price-max-label').textContent = state.filters.priceMax.toLocaleString('en-IN');
        renderResultsGrid();
    });
}

/* =========================================================
   BACK TO TOP
   ========================================================= */
function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        btn.hidden = window.scrollY < 500;
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('footer-back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* =========================================================
   INIT
   ========================================================= */
function init() {
    renderCategoryGrid();
    renderPromoGrids();
    renderTodayDeals();
    updateCartCount();
    updateAccountUI();

    setupHeroCarousel();
    setupDealsCarousel();
    setupSidebar();
    setupModals();
    setupSearch();
    setupAccount();
    setupLocationModal();
    setupLanguageModal();
    setupCheckout();
    setupGlobalNav();
    setupResultsToolbar();
    setupBackToTop();

    showView('view-home');
}

document.addEventListener('DOMContentLoaded', init);
