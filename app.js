const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BAGGY JEANS",
    price: 3979,
    colors: [
      {
        code: "black",
        img: "./img/black.jpg",
      },
      {
        code: "darkblue",
        img: "./img/12.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "ROLEX WATCH",
    price: 2265,
    colors: [
      {
        code: "yellow",
        img: "./img/20.jpg",
      },
      {
        code: "gray",
        img: "./img/2.jpg",
      },
     
    ],
  },
  {
    id: 3,
    title: "CHAINS",
    price: 999,
    colors: [
      {
        code: "yellow",
        img: "./img/golden.jpg",
      },
      {
        code: "gray",
        img: "./img/silver.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "CARGO PANTS",
    price: 2999,
    colors: [
      {
        code: "khaki",
        img: "./img/khaki.jpg",
      },
      {
        code: "black",
        img: "./img/black2.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Bape Hoodies",
    price: 1833,
    colors: [
      {
        code: "blue",
        img: "./img/bluebape.jpg",
      },
      {
        code: "red",
        img: "./img/redbape.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "ETB " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
 exports.build  =  series(scssTask, jsTask);