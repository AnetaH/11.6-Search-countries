var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#country');
var capitalsList = $('#capital');
var regionsList = $('#region');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();

    if(!countryName.length) {
      countryName = 'Poland';
    } 
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
}

function showCountriesList(resp) {
  countriesList.empty();
  capitalsList.empty();
  regionsList.empty();

  resp.forEach(function(item) {
    $('<li>').text('Country name: ' + item.name).appendTo(countriesList);
    $('<li>').text('Region: ' + item.region).appendTo(regionsList);
    $('<li>').text('Capital city: ' + item.capital).appendTo(capitalsList);
    console.log(item);
  });
}