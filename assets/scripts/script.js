//update all dates for the days using dayjs

const today = dayjs();
const secondDate = today.add(1, 'day');
const thirdDate = today.add(2, 'day');
const fourthDate = today.add(3, 'day');
const fifthDate = today.add(4, 'day');
const sixthDate = today.add(5, 'day');

$("#currentCity").text(today.format("DD/MM/YYYY"));
$("#secondDate").text(secondDate.format("DD/MM/YYYY"));
$("#thirdDate").text(thirdDate.format("DD/MM/YYYY"));
$("#fourthDate").text(fourthDate.format("DD/MM/YYYY"));
$("#fifthDate").text(fifthDate.format("DD/MM/YYYY"));
$("#sixthDate").text(sixthDate.format("DD/MM/YYYY"));

var searchIdArr = [1,2,3,4,5,6];
var counterValue;

//accessing API

const APIKey = "c27b6f158393dd9e97b1661d03e463b8";


// accessing and displaying current day info.

 $("#search-button").on("click", function (e) {
    e.preventDefault();
    
  const searchValue = $("#search-field").val().trim();
  
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${APIKey}&units=metric`;

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    $("#currentCity").text(data.name + " " + today.format("DD/MM/YYYY"));
    $("#day1temp").text(data.main.temp);
    $("#day1wind").text(((data.wind.speed)*3.6).toPrecision(2));
    $("#day1humidity").text(data.main.humidity);
    $("#iconday1").css({"background-image":`url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`});
      })
        
    });

    //accessing and displaying next five day data

    $("#search-button").on("click", function (e) {
      e.preventDefault();
      
    const searchValue = $("#search-field").val().trim();
    
    const search = $("#search-field").val();
    
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${APIKey}&units=metric`;

    
  
      fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {  
        $("#day2temp").text(data.list[7].main.temp);
        $("#day2wind").text(((data.list[7].wind.speed)*3.6).toPrecision(2));
        $("#day2humidity").text(data.list[7].main.humidity);
        $("#iconday2").css({"background-image":`url(https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png)`});
        $("#day3temp").text(data.list[15].main.temp);
        $("#day3wind").text(((data.list[15].wind.speed)*3.6).toPrecision(2));
        $("#day3humidity").text(data.list[15].main.humidity);
        $("#iconday3").css({"background-image":`url(https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png)`});
        $("#day4temp").text(data.list[23].main.temp);
        $("#day4wind").text(((data.list[23].wind.speed)*3.6).toPrecision(2));
        $("#day4humidity").text(data.list[23].main.humidity);
        $("#iconday4").css({"background-image":`url(https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png)`});
        $("#day5temp").text(data.list[31].main.temp);
        $("#day5wind").text(((data.list[31].wind.speed)*3.6).toPrecision(2));
        $("#day5humidity").text(data.list[31].main.humidity);
        $("#iconday5").css({"background-image":`url(https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png)`});
        $("#day6temp").text(data.list[39].main.temp);
        $("#day6wind").text(((data.list[39].wind.speed)*3.6).toPrecision(2));
        $("#day6humidity").text(data.list[39].main.humidity);
        $("#iconday6").css({"background-image":`url(https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png)`});
      })   
      setLocal(search);
    }
            );
  
      
    //local storage save of past search and updating search history


function pageFunction() {
  counterValue = localStorage.getItem("count");
  getLocalStorage();
}

//side click event function after a new search made.

function setLocal(Search) {
  counterValue = localStorage.getItem("count");
  if (counterValue === null || counterValue === 0) 
  {
    counterValue = 1
    localStorage.setItem (counterValue, Search);
    counterValue = 2
    localStorage.setItem ("count", counterValue);
  getLocalStorage(); 
  }
  else if (counterValue < 7) 
  {
    localStorage.setItem (counterValue, Search);
    counterValue = parseInt(counterValue) + parseInt(1);
    localStorage.setItem ("count", counterValue);
  getLocalStorage();
  } 
  else {
    counterValue = 1;
    localStorage.setItem (counterValue, Search);
    counterValue = parseInt(counterValue) + parseInt(1);
    localStorage.setItem ("count", counterValue);
  getLocalStorage();
  }
}

function getLocalStorage() {
  for (let i = 0; i < searchIdArr.length; i++) {
  var inputContent = localStorage.getItem(searchIdArr[i]);
  $("#"+ searchIdArr[i]).html(inputContent);
    }
    }
     
  $( document ).ready(pageFunction());

