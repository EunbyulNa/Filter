const menu = [
 {
   id: 1,
   title: "Cake",
   category: "cake",
   price: 15,
   img: "./img/cake.jpeg",
   desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit`,
 },

 {
   id: 2,
   title: "Cupcake",
   category: "cupcake",
   price: 15,
   img: "./img/cupcake.jpeg",
   desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit`,
 },


 {
   id: 3,
   title: "Cake",
   category: "cake",
   price: 30,
   img: "./img/cake2.jpeg",
   desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit`,
 },

 {
   id: 4,
   title: "Cupcake",
   category: "cupcake",
   price: 10,
   img: "./img/cupcake2.jpeg",
   desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit`,
 },

 {
   id: 5,
   title: "Sweet",
   category: "sweet",
   price: 5,
   img: "./img/sweet.jpeg",
   desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit`,
 },

 {
   id: 6,
   title: "Dougnut",
   category: "dougnut",
   price: 7,
   img: "./img/dougnut.jpeg",
   desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit`,
 },
]

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function() {
    displayMenu(menu);
})

filterBtns.forEach(function(btns) {
  btns.addEventListener("click", function (e) {
    const filterCategory = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(items) {
       if(filterCategory === items.category){
         return items;
       }
    });//filter ends
    if(filterCategory === "All"){
      displayMenu(menu);
    }  else {
      displayMenu(menuCategory);
    }
})//btns.addEventListener ends;
})



function displayMenu(menuItem){

  let displayMenu = menuItem.map(function(items) {

           return `<article class="menu-item">
              <img src=${items.img} alt="">
              <div class="item-info">
                <header>
                  <h3>${items.title}</h3>
                  <h4>£ ${items.price}</h4>
                </header>
                <p class="itme-text">
                ${items.desc}</p>
         </article>`;

  })
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;

}
