var inventoryShown = false;

window.addEventListener('load', function(e) {
    let button = document.getElementById("btn_inv");

     let chapeau = document.getElementById("chapeau_trouve");
    //  let tete = document.getElementById("tete_trouve");
    //  let corps = document.getElementById("corps_trouve");
    //  let jambes = document.getElementById("jambes_trouve");
    


     chapeau.addEventListener("click", function(e) {
         let chapeauInventory = document.getElementById("chapeau");
         chapeauInventory.style.filter = "brightness(100%)";
     });

    //  tete.addEventListener("click", function(e) {
    //      let teteInventory = document.getElementById("tete");
    //      teteInventory.style.filter = "brightness(100%)";
    //  });

    //  corps.addEventListener("click", function(e) {
    //      let corpsInventory = document.getElementById("corps");
    //      corpsInventory.style.filter = "brightness(100%)";
    //  });

    //  jambes.addEventListener("click", function(e) {
    //      let jambesInventory = document.getElementById("jambes");
    //     jambesInventory.style.filter = "brightness(100%)";
    //  });


    button.addEventListener("click", function(e) {
        
        let inventory = document.getElementById('inventory');
        let img = document.querySelectorAll("img.charlie");
        if(!inventoryShown) {
          inventory.classList.add('active');
          //inventory.classList.remove('inactive');
          button.classList.add('active');
          img.forEach(function (element) {
            element.classList.add("active");
          });
        }
        else {
            //inventory.classList.add('inactive');
            inventory.classList.remove('active');
            button.classList.remove('active');
            img.forEach(function (element) {
                element.classList.remove("active");
            });
        }
        inventoryShown = !inventoryShown;
      });
});