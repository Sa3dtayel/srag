function cars(){
    var container = document.getElementById('cotainer');
    if (container.innerHTML.trim() === "") {
   var boxList= ` <div  class="list">
        <a href="#">MODERN CAR</a>
        <a href="#">CLASSIC CAR</a>
        <a href="#">USED CAR</a>
           </div>
    `;
    container.innerHTML = boxList;
} else { container.innerHTML = "";}}
function pages(){ 
    var containerTow = document.getElementById('cotainerTow');
    if (containerTow.innerHTML.trim() === "") {
   var boxList= ` <div  class="listTow">
        <a href="#">BMW 7</a>
        <a href="#">Mercedes</a>
        <a href="#">Porschee</a>
        <a href="#">Audi</a>
        <a href="#">Range Rover</a> </div>  `;
    containerTow.innerHTML = boxList;
} else { containerTow.innerHTML = "";}}

function menuList(){
    var cotanerListMenu = document.getElementById('cotainerMenu');
    if (cotanerListMenu.innerHTML.trim() === "") {
   var boxList= `  <div class="arowList">
        <i class="fas fa-sort-down" ></i>
    </div>
    <div class="childMenuList">
  <a href="#"> HOME</a>
    <a onclick="cars()" href="#">CARS</a>     
        <a href="#">SHOP</a>
        <a href="#"> SERVICE</a>
        <a onclick="pages()" href="#"> PAGES</a>
        <a href="#"> CONTACT</a></div> `;
    cotanerListMenu.innerHTML = boxList;
} else {  cotanerListMenu.innerHTML = "";
}}