//business logic

function Destination(place, year, memory) {
  this.place = place;
  this.year = year;
  this.memory = memory;
}

var spain = new Destination("Spain", "2008", "sidra y pinchos");
var scotland = new Destination("Scotland", "2016", "Gus the Necromancer");
var canada = new Destination("Canada", "2015", "Victoria");
var ireland = new Destination("Ireland", "2016", "Magners, Kev, and Johnny Cash");
var portugal = new Destination("Portugal", "2009", "Lisbon at night");

//user interface logic

$(document).ready(function() {
  $("button.spain").click(function(event) {
    event.preventDefault();
    $(".hidden-img").hide();
    $(".place").text(spain.place);
    $(".year").text(spain.year);
    $(".memory").text(spain.memory);
    $("#spain-img").show();
  });

  $("button.scotland").click(function(event) {
    event.preventDefault();
    $(".hidden-img").hide();
    $(".place").text(scotland.place);
    $(".year").text(scotland.year);
    $(".memory").text(scotland.memory);
    $("#scotland-img").show();
  });

  $("button.portugal").click(function(event) {
    event.preventDefault();
    $(".hidden-img").hide();
    $(".place").text(portugal.place);
    $(".year").text(portugal.year);
    $(".memory").text(portugal.memory);
    $("#portugal-img").show();
  });

  $("button.ireland").click(function(event) {
    event.preventDefault();
    $(".hidden-img").hide();
    $(".place").text(ireland.place);
    $(".year").text(ireland.year);
    $(".memory").text(ireland.memory);
    $("#ireland-img").show();
  });

  $("button.canada").click(function(event) {
    event.preventDefault();
    $(".hidden-img").hide();
    $(".place").text(canada.place);
    $(".year").text(canada.year);
    $(".memory").text(canada.memory);
    $("#canada-img").show();
  });
});
