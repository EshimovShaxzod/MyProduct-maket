let shaxzod = document.getElementById('menu');
let elHeaderMenu = document.getElementById("navList");
let elIcon = document.getElementById('icon')

let count = 0;
shaxzod.addEventListener('click', function()
{
  elHeaderMenu.classList.toggle('show');
  if (count == 0){
    shaxzod.style.color = '#fff';
    elIcon.className = "bx bx-x";
    count++
  }else {
    shaxzod.style.color = '#000';
    elIcon.className = "bx bx-menu";
    count = 0;
  }
})


elDark = document.querySelector("#light");

elDark = document.addEventListener('click', function(){
   document.body.classList.toggle('darke');
})