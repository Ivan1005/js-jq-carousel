$(document).ready(function(){
  $(".prev").click(function(){
    prevImage();
  });
  $(".next").click(function(){
    nextImage();
  });
// ESERCIZIO BONUS CHE SICURAMENTE NON SI FA COSI
  // $(".a").click(function(){
  //   var image = $(".images img.active");
  //   image.removeClass("active");
  //   $(".nav i.active").removeClass("active");
  //   $(".a").addClass("active");
  //   $("#primo").addClass("active");
  // });
  // $(".b").click(function(){
  //   var image = $(".images img.active");
  //   image.removeClass("active");
  //   $(".nav i.active").removeClass("active");
  //   $(".b").addClass("active");
  //   $("#sec").addClass("active");
  // });
  // $(".c").click(function(){
  //   var image = $(".images img.active");
  //   image.removeClass("active");
  //   $(".nav i.active").removeClass("active");
  //   $(".c").addClass("active");
  //   $("#ter").addClass("active");
  // });
  // $(".d").click(function(){
  //   var image = $(".images img.active");
  //   image.removeClass("active");
  //   $(".nav i.active").removeClass("active");
  //   $(".d").addClass("active");
  //   $("#qua").addClass("active");
  // });


  
// SOLUZIONE FATTA IN CLASSE

$(".nav i").click (
  function(){
    var posizione = $(this).index();
    $(".images img").removeClass("active");
    $(".images img").eq(posizione).addClass("active");
    $(".nav i").removeClass("active");
    $(".nav i").eq(posizione).addClass("active");
  }
);



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
