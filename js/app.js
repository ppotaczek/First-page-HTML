document.addEventListener("DOMContentLoaded", function(){
  // hiding description
  var photo1 = document.getElementsByClassName('photo1')[0];
  var photo2 = document.getElementsByClassName('photo2')[0];

  function hide(){
    var elementToHide = this.getElementsByClassName('transparentPart')[0];
    elementToHide.style.display = "none";
  }

  function show(){
    var elementToHide = this.getElementsByClassName('transparentPart')[0];
    elementToHide.style.display = "block";
  }

  photo1.addEventListener("mouseover", hide);
  photo2.addEventListener("mouseover", hide);
  photo1.addEventListener("mouseout", show);
  photo2.addEventListener("mouseout", show);

  // slider
  var leftArrow = document.getElementsByClassName('arrowLeft')[0];
  var rightArrow = document.getElementsByClassName('arrowRight')[0];
  var picture = document.getElementsByClassName('chair-img')[0];
  var pictureIndex = 1;

  function wrap(){
    if (pictureIndex < 1){
      pictureIndex = 3;
    }
    else if (pictureIndex > 3){
      pictureIndex = 1;
    }
  }
  function prev(){
    pictureIndex--;
    wrap()
    changeImage();
  }
  function next(){
    pictureIndex++;
    wrap()
    changeImage();
    console.log(pictureIndex);
  }
  function changeImage(){
    if (pictureIndex == 1){
      picture.src="images/black_chair.png";
    }
    else if (pictureIndex == 2){
      picture.src="images/orange.png";
    }
    else if (pictureIndex == 3){
      picture.src="images/red.png";
    }
  }

  leftArrow.addEventListener('click', prev);
  rightArrow.addEventListener('click', next);

  // Calculator
  var listArrow = document.getElementsByClassName("list_arrow");
  var listPanel_1 = document.getElementsByClassName("list_panel")[0].children;
  var listPanel_2 = document.getElementsByClassName("list_panel")[1].children;
  var listPanel_3 = document.getElementsByClassName("list_panel")[2].children;
  var transport = document.getElementById("transport");
  var sumPrice = document.getElementsByClassName("sum")[0];

  var name = document.getElementsByClassName("title")[0];
  var color = document.getElementsByClassName("color")[0];
  var pattern = document.getElementsByClassName("pattern")[0];
  var transportValue = document.getElementsByClassName("transport")[0];

  var priceName = document.getElementsByClassName("title")[1];
  var priceColor = document.getElementsByClassName("color")[1];
  var pricePattern = document.getElementsByClassName("pattern")[1];
  var priceTransport = document.getElementsByClassName("transport")[1];

  function showList(){
    this.parentNode.getElementsByClassName("list_panel")[0].classList.toggle("show");
  }
  function calculatePrice(){
    var num1 = isNaN(parseInt(priceName.innerText)) ? 0 : parseInt(priceName.innerText);
    var num2 = isNaN(parseInt(priceColor.innerText)) ? 0 : parseInt(priceColor.innerText);
    var num3 = isNaN(parseInt(pricePattern.innerText)) ? 0 : parseInt(pricePattern.innerText);
    var num4 = isNaN(parseInt(priceTransport.innerText)) ? 0 : parseInt(priceTransport.innerText);

    sumPrice.innerText = num1 + num2 + num3 + num4;
  }
  function selectChair(){
    //this.parentNode.parentNode.getElementsByClassName("list_label")[0].innerText = this.innerText;
    name.innerText = this.innerText;
    priceName.innerText = this.dataset.namePrice + " zł";
    calculatePrice();
  }
  function selectColor(){
    color.innerText = this.innerText;
    priceColor.innerText = this.dataset.colorPrice + " zł";
    calculatePrice();
  }
  function selectMaterial(){
    pattern.innerText = this.innerText;
    pricePattern.innerText = this.dataset.materialPrice + " zł";
    calculatePrice();
  }
  function selectTransport(){
    transportValue.innerText = "Transport";
    priceTransport.innerText = this.dataset.transportPrice + " zł";
    if (transport.checked === false){
      transportValue.innerText = "";
      priceTransport.innerText = "";
    }
    calculatePrice();
  }

  for (var i = 0; i < listArrow.length; i++){
    listArrow[i].addEventListener("click", showList);
  }
  for (var i = 0; i < listPanel_1.length; i++){
      listPanel_1[i].addEventListener("click", selectChair);
  }
  for (var i = 0; i < listPanel_2.length; i++){
      listPanel_2[i].addEventListener("click", selectColor);
  }
  for (var i = 0; i < listPanel_3.length; i++){
      listPanel_3[i].addEventListener("click", selectMaterial);
  }
  transport.addEventListener("click", selectTransport);
});
