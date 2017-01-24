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

  //this fires when ANY button is clicked
  $("button").click(function(event) {
    event.preventDefault();

     //this grabs the button (event.target) and fetches the value of the attribute of 'data-name'
    var countryName = $(event.target).attr('data-name');

    //window holds all local variables, even the ones defined above (spain, scotland, etc...)
    //if window is fed in a string (countryName), it finds the variable that matches the name
    //e.g. window['spain'] will return the variable of spain
    var countryObject = window[countryName];
    $(".hidden-img").hide();
    $(".place").text(countryObject.place);
    $(".year").text(countryObject.year);
    $(".memory").text(countryObject.memory);
    $("#" + countryName + "-img").show(); //simply uses the countryName string to show the right image
  });
});
