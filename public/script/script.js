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
        let flip_card = document.createElement("div");
        let flip_card_inner = document.createElement("div");
        let flip_card_front = document.createElement("div");
        let flip_card_back = document.createElement("div");
        let img = document.createElement("img");
        let price = document.createElement("div");
        let addToCart = document.createElement("button");
        addToCart.innerHTML = "Add to cart"
        addToCart.style.backgroundColor = "green";
        addToCart.style.color = "black";
        addToCart.id = "addToCartButton";
        addToCart.setAttribute("name", keyboard.name);
        addToCart.setAttribute("img", keyboard.img);
        addToCart.setAttribute("price", keyboard.price);
        addToCart.onclick = function(e) {
            console.log(e.srcElement.name);
        };
        price.classList.add("center");
        price.innerHTML = "$" + keyboard.price;
        flip_card.classList.add("flip-card");
        flip_card_inner.classList.add("flip-card-inner");
        flip_card_front.classList.add("flip-card-front");
        flip_card_back.classList.add("flip-card-back")
        img.src = keyboard.img;
        flip_card_back.innerHTML = keyboard.name;
        flip_card.appendChild(flip_card_inner);
        flip_card_inner.appendChild(flip_card_front);
        flip_card_inner.appendChild(flip_card_back);
        flip_card_front.appendChild(img);
        flip_card_back.appendChild(price);
        flip_card_back.append(addToCart);
        div.appendChild(flip_card);
    }
}
