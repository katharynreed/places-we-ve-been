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

  var newDestination = new Destination()
  $("span#hidden").text(newDestition);

  $(".reveal").click(function() {
    $(this).children().show();
  });
});
