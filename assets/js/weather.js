//weather for Lisbon

$.getJSON("https://brainvibe.github.io/travelportugal/http://api.openweathermap.org/data/2.5/weather?id=2267057&units=metric&appid=f9527bd49f458a18800b244d4ad4e41c", function (data) {


    var lisbon = 2267057;
    var porto =2735943;
    var lagos=2267226;
    
    let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let temp = Math.floor(data.main.temp);
    let weather=data.weather[0].main;

    $('.icon').attr('src',icon);
    $('.weather').append(weather);
    $('.temp').append(temp +"º");
});



