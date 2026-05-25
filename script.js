/* ==========================================
   DW MOBILES & GIFTS — INTERACTIVE LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- MOBILE DRAWER SYSTEM ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.navbar-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Set active class
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // --- PRODUCT CATALOG DATABASE ---
    const products = [
        // Smartphones
        {
            id: 1,
            name: "Samsung Galaxy S24 Ultra",
            brand: "Samsung",
            category: "smartphones",
            desc: "256GB/12GB, Snapdragon 8 Gen 3, Titanium Gray, AI Features enabled.",
            price: "LKR 315,000",
            image: "s24_ultra.jpg",
            badge: "Trending"
        },
        {
            id: 2,
            name: "Honor 90 5G",
            brand: "Honor",
            category: "smartphones",
            desc: "512GB/12GB, 200MP Ultra-Clear Camera, 6.7-inch Quad-Curved Screen.",
            price: "LKR 145,000",
            image: "honor_90.jpg",
            badge: "Popular"
        },
        {
            id: 3,
            name: "Infinix Hot 40 Pro",
            brand: "Infinix",
            category: "smartphones",
            desc: "256GB/8GB, Helio G99 Processor, 108MP Camera, Fast Charging.",
            price: "LKR 62,500",
            image: "infinix_hot40.jpg",
            badge: "Best Seller"
        },
        {
            id: 4,
            name: "Tecno Spark 20 Pro",
            brand: "Tecno",
            category: "smartphones",
            desc: "256GB/8GB, 120Hz Display, 108MP Ultra Sensing Camera, premium finish.",
            price: "LKR 58,000",
            image: "tecno_spark20.jpg",
            badge: "New"
        },
        {
            id: 5,
            name: "Realme C67",
            brand: "Realme",
            category: "smartphones",
            desc: "128GB/8GB, Snapdragon 685, 108MP Camera, ultra-slim design.",
            price: "LKR 59,500",
            image: "realme_c67.jpg",
            badge: ""
        },
        {
            id: 6,
            name: "Xiaomi Redmi Note 13 Pro",
            brand: "Xiaomi",
            category: "smartphones",
            desc: "256GB/8GB, 200MP Camera, MediaTek Helio G99-Ultra, 67W Turbo Charge.",
            price: "LKR 95,000",
            image: "redmi_note13.jpg",
            badge: "Glow Accent"
        },
        
        // Feature Phones
        {
            id: 7,
            name: "Nokia 220 4G",
            brand: "Nokia",
            category: "feature-phones",
            desc: "Dual SIM, 4G Connectivity, MP3 Player, Wireless FM Radio, Long Battery.",
            price: "LKR 12,500",
            image: "nokia_220.jpg",
            badge: "Long Battery"
        },
        {
            id: 8,
            name: "Greentel Classic 3",
            brand: "Greentel",
            category: "feature-phones",
            desc: "Dual SIM, Camera, Bluetooth, FM Radio, torch light, expandable storage.",
            price: "LKR 6,800",
            image: "greentel_classic.jpg",
            badge: ""
        },
        {
            id: 9,
            name: "Switch F1 Metal",
            brand: "Switch",
            category: "feature-phones",
            desc: "Premium metal housing, robust keypad, loud speaker, powerful vibration.",
            price: "LKR 7,500",
            image: "switch_f1.jpg",
            badge: "Metal Body"
        },
        {
            id: 10,
            name: "Etel Power Max",
            brand: "Etel",
            category: "feature-phones",
            desc: "Super large 3000mAh battery, Powerbank functionality, super torch.",
            price: "LKR 8,200",
            image: "etel_power.jpg",
            badge: "Powerbank Function"
        },

        // Accessories
        {
            id: 11,
            name: "Baseus Bowie WM02 TWS",
            brand: "Baseus",
            category: "accessories",
            desc: "Mini True Wireless Earbuds, Bluetooth 5.3, 25 hours long battery life.",
            price: "LKR 8,500",
            image: "baseus_wm02.jpg",
            badge: "Top Rated"
        },
        {
            id: 12,
            name: "Joyroom JR-QP193 20000mAh",
            brand: "Joyroom",
            category: "accessories",
            desc: "22.5W Fast Charging Power Bank, LED Digital Display, Multi-device charging.",
            price: "LKR 10,500",
            image: "joyroom_powerbank.jpg",
            badge: "Fast Charge"
        },
        {
            id: 13,
            name: "Bavin 20W PD Fast Charger",
            brand: "Bavin",
            category: "accessories",
            desc: "Dual Port (Type-C + USB) adapter with matching fast charging cable.",
            price: "LKR 4,200",
            image: "bavin_charger.jpg",
            badge: ""
        },
        {
            id: 14,
            name: "Celebrat Fly-4 Wireless Headphones",
            brand: "Celebrat",
            category: "accessories",
            desc: "Over-ear headphones, Hi-Fi stereo sound, ultra comfortable ear-pads.",
            price: "LKR 7,800",
            image: "celebrat_headphones.jpg",
            badge: ""
        },
        {
            id: 15,
            name: "Baseus Smart Watch 2 Pro",
            brand: "Baseus",
            category: "accessories",
            desc: "Heart rate monitoring, multiple sports modes, long battery, HD touch screen.",
            price: "LKR 16,500",
            image: "baseus_watch.jpg",
            badge: "Premium"
        },

        // Gift Items
        {
            id: 16,
            name: "Elite Tech Gift Combo Box",
            brand: "DW Premium",
            category: "gifts",
            desc: "Includes modern smartwatch, Bluetooth TWS earbuds, and carbon leather wallet.",
            price: "LKR 24,500",
            image: "gift_elite.jpg",
            badge: "Special Gift"
        },
        {
            id: 17,
            name: "Dazzling LED Speaker Pack",
            brand: "Moxom",
            category: "gifts",
            desc: "Surround sound speaker with dancing RGB lights, includes premium micro USB kit.",
            price: "LKR 11,500",
            image: "gift_speaker.jpg",
            badge: "Best Seller"
        },
        {
            id: 18,
            name: "VIP Leather Case & Stand Pack",
            brand: "Baseus",
            category: "gifts",
            desc: "Luxury gift wrap with executive cardholder phone stand and wireless charger.",
            price: "LKR 13,800",
            image: "gift_case.jpg",
            badge: "Premium Wrap"
        }
    ];

    // --- RENDER PRODUCTS ---
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('catalog-search-input');

    let activeFilter = 'all';
    let searchQuery = '';

    const renderProducts = () => {
        // Clear grid
        productsGrid.innerHTML = '';

        // Filter products
        const filtered = products.filter(product => {
            const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products-msg">
                    <i class="fa-regular fa-face-frown" style="font-size: 3rem; margin-bottom: 15px; color: var(--accent-red);"></i>
                    <h3>No products found</h3>
                    <p>Try refining your search or select another category.</p>
                </div>
            `;
            return;
        }

        // Generate cards
        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card reveal';
            
            // Choose background glow effect based on badge or category
            const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
            
            // Build the card HTML
            // Using real downloaded products images from assets/products/
            card.innerHTML = `
                <div class="product-image-container">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;">
                </div>
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer">
                    <div class="product-price">${product.price}</div>
                    <button class="product-inquiry-btn" data-name="${product.name}" data-brand="${product.brand}">
                        <i class="fa-brands fa-whatsapp"></i> Inquiry
                    </button>
                </div>
            `;
            
            productsGrid.appendChild(card);
        });

        // Re-run scroll reveal so new elements fade in
        setupScrollReveal();

        // Bind WhatsApp events to new buttons
        bindInquiryButtons();
    };

    // --- FILTER HANDLERS ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeFilter = button.dataset.filter;
            renderProducts();
        });
    });

    // --- SEARCH HANDLER ---
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // --- WHATSAPP DYNAMIC MESSAGE DISPATCH ---
    const PHONE_NUMBER = "94714366377"; // Shop owner WhatsApp

    const bindInquiryButtons = () => {
        const inquiryButtons = document.querySelectorAll('.product-inquiry-btn');
        inquiryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productName = btn.dataset.name;
                const productBrand = btn.dataset.brand;
                
                const textMessage = `Hi DW Mobiles & Gifts! I am interested in inquiring about the "${productName}" (${productBrand}) which I saw on your website. Could you please let me know if it is available and share any details regarding warranty and current price? Thank you!`;
                
                const encodedMsg = encodeURIComponent(textMessage);
                const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMsg}`;
                
                window.open(waUrl, '_blank');
            });
        });
    };

    // Global WhatsApp hooks (Hero, Navbar, Banner, Gift cards)
    const customWhatsAppTriggers = document.querySelectorAll('[data-whatsapp-action]');
    customWhatsAppTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const actionType = trigger.dataset.whatsappAction;
            let messageText = "Hi DW Mobiles & Gifts! I am browsing your website and would like to ask some questions. Please let me know how I can proceed. Thanks!";

            if (actionType === 'hero-shop') {
                messageText = "Hi DW Mobiles & Gifts! I would like to shop for the latest mobile phones and premium accessories. Please share details on what is currently in stock. Thank you!";
            } else if (actionType === 'gift-inquiry') {
                const giftName = trigger.dataset.giftName || "Premium Gift Item";
                messageText = `Hi DW Mobiles & Gifts! I am looking for gift items and I am interested in "${giftName}". Please let me know what custom packaging or products are available in this gift pack. Thanks!`;
            } else if (actionType === 'banner-instant') {
                messageText = "Hi DW Mobiles & Gifts! I need immediate help selecting a smartphone or accessories. Could you please assist me right now? Thank you!";
            }

            const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(messageText)}`;
            window.open(waUrl, '_blank');
        });
    });

    // --- SCROLL REVEAL ANIMATION SYSTEM ---
    const setupScrollReveal = () => {
        const revealElements = document.querySelectorAll('.reveal');
        
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px" // Triggers slightly before element enters viewport fully
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Reveal only once
                }
            });
        }, observerOptions);

        revealElements.forEach(element => {
            observer.observe(element);
        });
    };

    // --- INITIALIZATION ---
    renderProducts(); // Render initial list of products and set animations
});
