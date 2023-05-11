"use strict";

let menu = {
    drinks: ['Water','Tea','Sweet Tea', 'Coke', 'Dr. Pepper', 'Sprite', ],
  
    entrees: ['Hamburger w/ Fries',
      'Grilled Cheese w/ Tater Tots',
      'Grilled Chicken w/ Veggies',
      'Chicken Fried Steak w/ Mashed Potatoes',
      'Fried Shrimp w/ Coleslaw',
      'Veggie Plate',
    ],
  
    desserts: ['Cheesecake', 'Chocolate Cake', 'Snickerdoodle Cookie',],
  };

  window.onload = function() {
    const category = document.getElementById("category");
    category.onchange = categorySelected;
  }
 
  function categorySelected() {
    const category = document.getElementById("category");
    console.log(category.value);
    const member = document.getElementById("member");

    if(category.value == "drinks") {  
      member.options.length = 0;  
      let drink = menu.drinks;  
      for(let i=0; i<drink.length; i++) {  
      let theOption = new Option(drink[i], drink[i]);
      member.appendChild(theOption);
      }
      member.size = drink.length;
    }
    if(category.value == "entrees") {
      member.options.length = 0;
      let entree = menu.entrees;
      for(let j=0; j<entree.length; j++) {
        let theOption = new Option(entree[j], entree[j]);
        member.appendChild(theOption);
      }  
      member.size = entree.length;
    }
    if(category.value == "desserts") {
        member.options.length = 0;
        let dessert = menu.desserts;
        for(let k=0; k<dessert.length; k++) {
          let theOption = new Option(dessert[k], dessert[k]);
          member.appendChild(theOption);
        }
       member.size = dessert.length; 
    }
    if(category.value == "selectCategory") {
        member.options.length = 0;
        member.size = 0;
    }
  }

