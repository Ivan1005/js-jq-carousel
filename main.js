$(document).ready(function(){
  $(".prev").click(function(){
    prevImage();
  });
  $(".next").click(function(){
    nextImage();
  });





// funzioni
// FUNZIONE PER ANDARE AVANTI CON LE IMMAGINI
function nextImage (){
  var image = $(".images img.active");
  var first = $(".images img.first");
  var cerchio = $(".nav i.active");
  var cerchioF = $(".nav i.first");
  image.removeClass("active");
  cerchio.removeClass("active");

  if (image.hasClass("last")) {
    first.addClass("active");
    cerchioF.addClass("active");
  }else{
    image.next().addClass("active");
    cerchio.next().addClass("active");

  };
};
// FUNZIONE PER TORNARE INDIETRO
function prevImage (){
  var image = $(".images img.active");
  var last = $(".images img.last");
  var cerchio = $(".nav i.active");
  var cerchioF = $(".nav i.last");
  image.removeClass("active");
  cerchio.removeClass("active");

  if (image.hasClass("first")) {
    last.addClass("active");
    cerchioF.addClass("active");
  }else{
    image.prev().addClass("active");
    cerchio.prev().addClass("active");
  };
}
});
