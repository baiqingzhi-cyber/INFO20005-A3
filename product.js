const products = [
    // COOKIE
    {
        id: "cookie001",
        title: "Classic Chocolate Chip Cookie",
        category: "cookie",
        price: 8.90,
        weight: "6 pcs",
        img: "image/choc chip cookie.jpg",
        desc: "A timeless chewy cookie packed with rich chocolate chips.",
        allergens: "Wheat (gluten), dairy, eggs, soy",
        storage: "Up to 5 days at room temperature.",
        tags: ["popular"]
    },

    {
        id: "cookie002",
        title: "Matcha White Choco Cookie",
        category: "cookie",
        price: 9.50,
        weight: "6 pcs",
        img: "image/matcha white choco cookie.jpeg",
        desc: "Fragrant matcha cookie blended with creamy white chocolate chunks.",
        allergens: "Wheat (gluten), dairy, eggs, soy",
        storage: "Up to 4 days at room temperature.",
        tags: ["newArrival"]
    },

    {
        id: "cookie003",
        title: "Anzac Biscuit",
        category: "cookie",
        price: 9.20,
        weight: "8 pcs",
        img: "image/anzac biscuit.jpg",
        desc: "Crunchy golden Anzac biscuits made with oats and coconut.",
        allergens: "Wheat (gluten), dairy, oats",
        storage: "Up to 7 days at room temperature.",
        tags: ["popular"]
    },

    {
        id: "cookie004",
        title: "Double Chocolate Fudge Cookie",
        category: "cookie",
        price: 10.50,
        weight: "6 pcs",
        img: "image/choco fudge cookie.jpg",
        desc: "A rich brownie-like cookie with deep cocoa flavour and chocolate chunks.",
        allergens: "Wheat (gluten), dairy, eggs, soy",
        storage: "Up to 4 days at room temperature.",
        tags: []
    },

    {
        id: "cookie005",
        title: "Peanut Butter Crinkle Cookie",
        category: "cookie",
        price: 9.80,
        weight: "6 pcs",
        img: "image/Peanut Butter Crinkle Cookie.jpg",
        desc: "Soft and nutty peanut butter cookies with a crackly sugar crust.",
        allergens: "Peanuts, wheat (gluten), dairy, eggs",
        storage: "Up to 5 days at room temperature.",
        tags: []
    },

    {
        id: "cookie006",
        title: "Salted Caramel Cookie",
        category: "cookie",
        price: 10.20,
        weight: "6 pcs",
        img: "image/Salted Caramel Cookie.jpg",
        desc: "Chewy caramel-infused cookies finished with a hint of sea salt.",
        allergens: "Wheat (gluten), dairy, eggs, soy",
        storage: "Up to 5 days at room temperature.",
        tags: []
    },

    {
        id: "cookie007",
        title: "Red Velvet Cream Cheese Cookie",
        category: "cookie",
        price: 11.00,
        weight: "6 pcs",
        img: "image/Red Velvet Cream Cheese Cookie.jpeg",
        desc: "Soft red velvet cookies with a sweet cream cheese centre.",
        allergens: "Wheat (gluten), dairy, eggs, soy",
        storage: "Keep refrigerated at 0-4°C. Consume within 3 days.",
        tags: []
    },

    {
        id: "cookie008",
        title: "Hazelnut Mocha Cookie",
        category: "cookie",
        price: 10.80,
        weight: "6 pcs",
        img: "image/Hazelnut Mocha Cookie.jpg",
        desc: "Coffee-flavoured cookies with roasted hazelnuts and dark chocolate bits.",
        allergens: "Tree nuts (hazelnuts), wheat (gluten), dairy, eggs, soy",
        storage: "Up to 5 days at room temperature.",
        tags: []
    },

    // BREAD
    {
        id: "bread001",
        title: "Garlic Butter Bread Roll",
        category: "bread",
        price: 7.90,
        weight: "320g",
        img: "image/Garlic Butter Bread Roll.jpg",
        desc: "Soft bread rolls baked with rich garlic butter flavour.",
        allergens: "Wheat (gluten), dairy",
        storage: "Up to 2 days at room temperature.",
        tags: []
    },

    {
        id: "bread002",
        title: "Classic Sourdough Country Loaf",
        category: "bread",
        price: 9.50,
        weight: "800g",
        img: "image/sourdough 1.png",
        desc: "Slow-fermented sourdough with a crispy crust and chewy inside.",
        allergens: "Contains wheat (gluten). May contain traces of dairy or nuts.",
        storage: "Up to 3 days at room temperature.",
        tags: ["popular"]
    },

    {
        id: "bread003",
        title: "Honey Oat Bread",
        category: "bread",
        price: 8.20,
        weight: "600g",
        img: "image/Honey Oat Bread.jpeg",
        desc: "Light and fluffy oat bread with a gentle honey sweetness.",
        allergens: "Wheat (gluten), oats, dairy",
        storage: "Up to 3 days at room temperature.",
        tags: []
    },

    {
        id: "bread004",
        title: "Japanese Shokupan",
        category: "bread",
        price: 9.00,
        weight: "500g",
        img: "image/Japanese Shokupan.jpeg",
        desc: "Extra soft and creamy milk bread perfect for toast or sandwiches.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Up to 2 days at room temperature.",
        tags: []
    },

    {
        id: "bread005",
        title: "Cheese & Herb Focaccia",
        category: "bread",
        price: 9.80,
        weight: "450g",
        img: "image/Cheese & Herb Focaccia.jpeg",
        desc: "Fluffy focaccia topped with herbs and melted cheese.",
        allergens: "Wheat (gluten), dairy",
        storage: "Up to 2 days at room temperature.",
        tags: []
    },

    {
        id: "bread006",
        title: "Honey Butter Brioche",
        category: "bread",
        price: 6.80,
        weight: "300g",
        img: "image/honey butter brioche.jpg",
        desc: "Fluffy brioche glazed with honey butter, lightly sweet and rich.",
        allergens: "Contains wheat (gluten), dairy (milk), eggs. May contain traces of soy and nuts.",
        storage: "Best enjoyed fresh. Up to 2 days at room temperature.",
        tags: ["newArrival"]
    },

    {
        id: "bread007",
        title: "Cinnamon Raisin Swirl Bread",
        category: "bread",
        price: 9.30,
        weight: "550g",
        img: "image/Cinnamon Raisin Swirl Bread.jpeg",
        desc: "Sweet cinnamon bread swirled with raisins for a warm spiced bite.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Up to 3 days at room temperature.",
        tags: []
    },

    {
        id: "bread008",
        title: "Ham & Cheese Croissant",
        category: "bread",
        price: 9.90,
        weight: "130g * 2",
        img: "image/Ham & Cheese Croissant.jpeg",
        desc: "Flaky croissants filled with savoury ham and melted cheese.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 2 days.",
        tags: []
    },

    // CAKE
    {
        id: "cake001",
        title: "Strawberry Shortcake Slice",
        category: "cake",
        price: 6.80,
        weight: "150g",
        img: "image/strawberry shortcake.png",
        desc: "Soft sponge cake layered with fresh cream and sweet strawberries.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 3 days.",
        tags: ["newArrival"]
    },

    {
        id: "cake002",
        title: "Chocolate Fudge Cake Slice",
        category: "cake",
        price: 7.50,
        weight: "160g",
        img: "image/Chocolate Fudge Cake Slice.jpg",
        desc: "Rich chocolate cake with smooth fudge frosting and deep cocoa flavour.",
        allergens: "Wheat (gluten), dairy, eggs, soy",
        storage: "Refrigerate and consume within 4 days.",
        tags: []
    },

    {
        id: "cake003",
        title: "Matcha Cream Cake Slice",
        category: "cake",
        price: 7.80,
        weight: "150g",
        img: "image/Matcha Cream Cake Slice.jpeg",
        desc: "Light matcha sponge paired with silky whipped cream filling.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Keep refrigerated and consume within 3 days.",
        tags: []
    },

    {
        id: "cake004",
        title: "Lemon Cheesecake Slice",
        category: "cake",
        price: 8.20,
        weight: "170g",
        img: "image/Lemon Cheesecake Slice.jpg",
        desc: "Creamy cheesecake with a refreshing lemon twist and buttery crust.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 5 days.",
        tags: []
    },

    {
        id: "cake005",
        title: "Tiramisu Cake Slice",
        category: "cake",
        price: 8.50,
        weight: "160g",
        img: "image/Tiramisu Cake Slice.jpg",
        desc: "Coffee-soaked sponge layered with mascarpone cream and cocoa dusting.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 3 days.",
        tags: []
    },

    {
        id: "cake006",
        title: "Carrot Walnut Cake Slice",
        category: "cake",
        price: 8.30,
        weight: "170g",
        img: "image/Carrot Walnut Cake Slice.jpg",
        desc: "Moist carrot cake packed with walnuts and topped with cream cheese frosting.",
        allergens: "Wheat (gluten), dairy, eggs, tree nuts (walnuts)",
        storage: "Refrigerate and consume within 4 days.",
        tags: []
    },

    {
        id: "cake007",
        title: "Mango Mousse Cake Slice",
        category: "cake",
        price: 8.80,
        weight: "150g",
        img: "image/Mango Mousse Cake Slice.jpg",
        desc: "Smooth mango mousse layered on soft sponge for a tropical finish.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 3 days.",
        tags: []
    },

    {
        id: "cake008",
        title: "Black Forest Cake Slice",
        category: "cake",
        price: 9.00,
        weight: "170g",
        img: "image/Black Forest Cake Slice.jpg",
        desc: "Chocolate sponge layered with cherries and whipped cream for a classic taste.",
        allergens: "Wheat (gluten), dairy, eggs, soy",
        storage: "Refrigerate and consume within 3 days.",
        tags: []
    },

    {
        id: "cake009",
        title: "Basque Cheesecake",
        category: "cake",
        price: 10.50,
        weight: "160g",
        img: "image/basque cake.jpg",
        desc: "Creamy cheesecake with a caramelized top and smooth center.",
        allergens: "Contains dairy (milk), eggs. May contain traces of wheat (gluten).",
        storage: "Keep refrigerated at 0-4°C. Consume within 3 days.",
        tags: ["popular"]
    },

    // PIE
    {
        id: "pie001",
        title: "Apple Cinnamon Crumble Pie",
        category: "pie",
        price: 22.00,
        weight: "750g",
        img: "image/apple cinnamon crumble pie.jpg",
        desc: "Warm apple filling with cinnamon and a crunchy crumble topping.",
        allergens: "Contains wheat (gluten), dairy (milk), eggs. May contain traces of nuts.",
        storage: "Store at room temperature for up to 1 day. Refrigerate up to 4 days.",
        tags: ["newArrival"]
    },

    {
        id: "pie002",
        title: "Blueberry Pie",
        category: "pie",
        price: 23.50,
        weight: "720g",
        img: "image/Blueberry Pie.jpg",
        desc: "Sweet and tangy blueberry filling wrapped in a buttery crust.",
        allergens: "Wheat (gluten), dairy",
        storage: "Refrigerate and consume within 4 days.",
        tags: []
    },

    {
        id: "pie003",
        title: "Lemon Meringue Pie",
        category: "pie",
        price: 24.50,
        weight: "680g",
        img: "image/Lemon Meringue Pie.jpeg",
        desc: "Zesty lemon custard topped with fluffy toasted meringue.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 3 days.",
        tags: []
    },

    {
        id: "pie004",
        title: "Pecan Pie",
        category: "pie",
        price: 26.00,
        weight: "700g",
        img: "image/Pecan Pie.jpg",
        desc: "Sweet caramel-like filling loaded with crunchy pecans.",
        allergens: "Wheat (gluten), dairy, eggs, tree nuts (pecans)",
        storage: "Refrigerate and consume within 5 days.",
        tags: []
    },

    {
        id: "pie005",
        title: "Pumpkin Pie",
        category: "pie",
        price: 23.80,
        weight: "750g",
        img: "image/Pumpkin Pie.jpg",
        desc: "Creamy pumpkin filling baked with warm seasonal spices.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 4 days.",
        tags: []
    },

    {
        id: "pie006",
        title: "Egg Custard Pie",
        category: "pie",
        price: 21.90,
        weight: "680g",
        img: "image/Egg Custard Pie.jpg",
        desc: "Smooth egg custard baked in a buttery flaky pastry base.",
        allergens: "Wheat (gluten), dairy, eggs",
        storage: "Refrigerate and consume within 3 days; best served slightly warmed.",
        tags: []
    },
]
