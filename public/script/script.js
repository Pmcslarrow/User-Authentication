/* GLOBAL VARS */
let cart = [];
let collection_tuples = [
    {
        name: "Year of the Rat Edition",
        price: "199"
    },

    {
        name: "Year of the Pig Edition",
        price: "189"
    },

    {
        name: "Year of the Dog Edition",
        price: "229"
    },

    {
        name: "Year of the Rooster Edition",
        price: "199"
    },

    {
        name: "Year of the Monkey Edition",
        price: "199"
    },

    {
        name: "Year of the Goat Edition",
        price: "169"
    },

    {
        name: "Year of the Horse Edition",
        price: "189"
    },

    {
        name: "Year of the Snake Edition",
        price: "215"
    },

    {
        name: "Year of the Dragon Edition",
        price: "177"
    },

    {
        name: "Year of the Rabbit Edition",
        price: "176"
    },

    {
        name: "Year of the Tiger Edition",
        price: "189"
    },

    {
        name: "Year of the Ox Edition",
        price: "189"
    }
]


function openSlideMenu(){
    document.getElementById('menu').style.width = '400px';
    document.getElementById('content').style.marginLeft = '400px';
}

function closeSlideMenu(){
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
}

function hide() {
    let block1 = document.getElementById("block1");
    block1.style.visibility = "hidden";

}

function cartAction() {
    let cart = document.getElementById('cartContent');
    let img = document.getElementById("cart");
    let state = cart.getAttribute("data");
    if (state === "off")
    {
        cart.setAttribute("data", "on");
        img.style.left = "100px";
        cart.style.height = "400px";
        cart.style.width = "100%";
        cart.style.border = "1px solid black";
        setTimeout(hide, 1000);

    } else {
        cart.setAttribute("data", "off");
        cart.style.height = "0";
        cart.style.width = "0";
        cart.style.border = "0";
        block1.style.visibility = "visible";
    }
}

function create_new_card(div, obj){
    let flip_card = document.createElement("div");
    let flip_card_inner = document.createElement("div");
    let flip_card_front = document.createElement("div");
    let flip_card_back = document.createElement("div");
    let img = document.createElement("img");
    img.style.width = obj.width;
    img.style.height = obj.height;
    let price = document.createElement("div");
    let addToCart = document.createElement("button");
    addToCart.innerHTML = "Add to cart"
    addToCart.style.backgroundColor = "white";
    addToCart.style.color = "black";
    addToCart.id = "addToCartButton";
    addToCart.setAttribute("name", obj.name);
    addToCart.setAttribute("img", obj.img);
    addToCart.setAttribute("price", obj.price);
    addToCart.onclick = function(e) {
        let obj = this;
        let price = obj.getAttribute("price");
        let name = obj.getAttribute("name");
        let img = obj.getAttribute("img")
        console.log(obj);
    };
    price.classList.add("center");
    price.innerHTML = "$" + obj.price;
    flip_card.classList.add("flip-card");
    flip_card_inner.classList.add("flip-card-inner");
    flip_card_front.classList.add("flip-card-front");
    flip_card_back.classList.add("flip-card-back")
    img.src = obj.img;
    flip_card_back.innerHTML = obj.name;
    flip_card.appendChild(flip_card_inner);
    flip_card_inner.appendChild(flip_card_front);
    flip_card_inner.appendChild(flip_card_back);
    flip_card_front.appendChild(img);
    flip_card_back.appendChild(price);
    flip_card_back.append(addToCart);
    div.appendChild(flip_card);
}



function setUpNewCollection()
{
    let div = document.getElementById("newCollectionDIV");
    const lst_of_collection = [
        {
            name: "Year of the Rat Edition",
            price: "199",
            img: "http://localhost:3000/public/images/YofRat.png",
            alt: "Year of the Rat Keyboard"
        },

        {
            name: "Year of the Pig Edition",
            price: "189",
            img: "http://localhost:3000/public/images/yearOfPig.png",
            alt: "Year of the Pig Keyboard"
        },

        {
            name: "Year of the Dog Edition",
            price: "229",
            img: "http://localhost:3000/public/images/yearOfDog.png",
            alt: "Year of the Dog Keyboard"
        },

        {
            name: "Year of the Rooster Edition",
            price: "199",
            img: "http://localhost:3000/public/images/yearOfRooster.png",
            alt: "Year of the Rooster Keyboard"
        },

        {
            name: "Year of the Monkey Edition",
            price: "199",
            img: "http://localhost:3000/public/images/yearOfMonkey.png",
            alt: "Year of the Monkey Keyboard"
        },

        {
            name: "Year of the Goat Edition",
            price: "169",
            img: "http://localhost:3000/public/images/yearOfGoat.png",
            alt: "Year of the Goat Keyboard"
        },

        {
            name: "Year of the Horse Edition",
            price: "189",
            img: "http://localhost:3000/public/images/yearOfHorse.png",
            alt: "Year of the Horse Keyboard"
        },

        {
            name: "Year of the Snake Edition",
            price: "215",
            img: "http://localhost:3000/public/images/yearOfSnake.png",
            alt: "Year of the Snake Keyboard"
        },

        {
            name: "Year of the Dragon Edition",
            price: "177",
            img: "http://localhost:3000/public/images/yearOfDragon.png",
            alt: "Year of the Dragon Keyboard"
        },

        {
            name: "Year of the Rabbit Edition",
            price: "176",
            img: "http://localhost:3000/public/images/yearOfRabbit.png",
            alt: "Year of the Rabbit Keyboard"
        },

        {
            name: "Year of the Tiger Edition",
            price: "189",
            img: "http://localhost:3000/public/images/yearOfTiger.png",
            alt: "Year of the Tiger Keyboard"
        },

        {
            name: "Year of the Ox Edition",
            price: "189",
            img: "http://localhost:3000/public/images/yearOfOx.png",
            alt: "Year of the Ox Keyboard"
        }
    ];

    for (let keyboard of lst_of_collection)
    {
        create_new_card(div, keyboard);
    }
}

function setUpKeyboards()
{
    let div = document.getElementById("keyboardDIV");
    const lst_of_keyboards = [
        {
            name: "Corsair K70 RGB",
            price: "99.99",
            img: "http://localhost:3000/public/images/keyboards/corsair_k70.jpg",
            width: 300,
            height: 126
        },

        {
            name: "Corsair K65 Mini",
            price: "109.99",
            img: "http://localhost:3000/public/images/keyboards/corsair_k65_mini.jpg",
            width: 300,
            height: 161
            
        },

        {
            name: "Logitech Wireless",
            price: "169.99",
            img: "http://localhost:3000/public/images/keyboards/logitech_wireless_graphite.jpg",
            width: 263,
            height: 200
        },

        {
            name: "HyperX - Alloy Core Wired Keybaord",
            price: "49.99",
            img: "http://localhost:3000/public/images/keyboards/hyperx_alloy_core.jpg",
            width: 300,
            height: 139
        },

        {
            name: "Logitech G915 LIGHTSPEED TKL",
            price: "190.99",
            img: "http://localhost:3000/public/images/keyboards/logitech_g915.jpg",
            width: 300,
            height: 151
        },

        {
            name: "Microsoft - Comfort Desktop 5050",
            price: "44.99",
            img: "http://localhost:3000/public/images/keyboards/microsoft_comfort.jpg",
            width: 300,
            height: 113
        },

        {
            name: "Razer - Blackwidow V3",
            price: "119.99",
            img: "http://localhost:3000/public/images/keyboards/razer_blackwidow.jpg",
            width: 300,
            height: 168
        },


        {
            name: "Logitech - K380",
            price: "29.99",
            img: "http://localhost:3000/public/images/keyboards/logitech_k380.jpg",
            width: 300,
            height: 138
        }


    ]

    for (let keyboard of lst_of_keyboards)
    {
        create_new_card(div, keyboard);
    }
}

function gamingMice(div)
{
    const lst_of_gaming_mice = [
        {
            name: "Logitech - G502 Lightspeed Wireless",
            price: "119.99",
            img: "http://localhost:3000/public/images/mice/logitech_g502.jpg",
            width: 300,
            height: 126
        },
        
        {
            name: "Razer - Basilisk with HyperSpeed Charging Dock",
            price: "169.99",
            img: "http://localhost:3000/public/images/mice/razer_basilisk.jpg",
            width: 300,
            height: 198
        },

        {
            name: "SteelSeries - Aerox 3",
            price: "99.99",
            img: "http://localhost:3000/public/images/mice/steel_aerox.jpg",
            width: 152,
            height: 200
        },

        {
            name: "Razer - Orochi",
            price: "69.99",
            img: "http://localhost:3000/public/images/mice/orochi.jpg",
            width: 116,
            height: 200
        },
        
        {
            name: "HyperX - Pulsefire Dart",
            price: "39.99",
            img: "http://localhost:3000/public/images/mice/pulsefire.jpg",
            width: 118,
            height: 200
        }

    ]

    for (let mouse of lst_of_gaming_mice)
    {
        create_new_card(div, mouse);
    }
}

function productivityMice(div)
{
    const lst_of_productivity_mice = [
        {
            name: "Logitech - M720",
            price: "39.99",
            img: "http://localhost:3000/public/images/mice/logitech_m720.jpg",
            width: 165,
            height: 200
        },

        {
            name: "Logitech - MX Master 3",
            price: "99.99",
            img: "http://localhost:3000/public/images/mice/logitech_master.jpg",
            width: 300,
            height: 171
        },

        {
            name: "Microsoft - Modern Mobile Wireless",
            price: "19.99",
            img: "http://localhost:3000/public/images/mice/microsoft_mobile.jpg",
            width: 300,
            height: 150
        },

        {
            name: "Logitech - ERGO M575",
            price: "44.99",
            img: "http://localhost:3000/public/images/mice/logitech_ergo.jpg",
            width: 183,
            height: 200
        },

        {
            name: "Microsoft - Bluetooth Ergonomic Mouse",
            price: "30.99",
            img: "http://localhost:3000/public/images/mice/microsoft_ergo.jpg",
            width: 129,
            height: 200
        }

    ]

    for (let mouse of lst_of_productivity_mice)
    {
        create_new_card(div, mouse);
    }
}

function setUpMice()
{
    let gamingDiv = document.getElementById("gamingMiceDIV");
    let productivityDiv = document.getElementById("productivityMiceDIV");

    gamingMice(gamingDiv);
    productivityMice(productivityDiv);
}

function setUpAccessories()
{
    let div = document.getElementById("accessoriesDIV");
    const lst_of_accessories = [
        {
            name: "Toshiba - 1TB External Portable Hard Drive - Black",
            price: "45.99",
            img: "http://localhost:3000/public/images/accessories/hard_drive_1.jpg",
            width: 165,
            height: 200
        },

        {
            name: "Wireless Charging System for Select Logitech Mice",
            price: "119.99",
            img: "http://localhost:3000/public/images/accessories/mousepad_1.jpg",
            width: 300,
            height: 193
        },

        {
            name: "Logitech - C920s Pro 1080 Webcam",
            price: "59.99",
            img: "http://localhost:3000/public/images/accessories/webcam_1.jpg",
            width: 148,
            height: 200
        },

        {
            name: "Apple - 6.6' USB Type C-to-Lightning Charging Cable",
            price: "29.00",
            img: "http://localhost:3000/public/images/accessories/charging_1.jpg",
            width: 283,
            height: 200
        },

        {
            name: "Sony - INZONE H7 Wireless Gaming Headset - White",
            price: "229.99",
            img: "http://localhost:3000/public/images/accessories/headphone_1.jpg",
            width: 185,
            height: 200
        },

        {
            name: "USB-C Docking Station for Apple MacBook - Gray",
            price: "69.99",
            img: "http://localhost:3000/public/images/accessories/dock_1.jpg",
            width: 300,
            height: 193
        }
    ]

    for (let part of lst_of_accessories)
    {
        create_new_card(div, part);
    }
}