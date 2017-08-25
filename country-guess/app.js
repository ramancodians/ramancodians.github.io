var countryEndPoint = "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json";
var countries = [];
var timeLeft = 20;
var $timer;
var breaker;
var level = 1;
 var score = 0;
var currentCountry;

$(document).ready(()=>{
  $timer = $('.time h1');
  // Get countries
  fetch("countries.json")
  .then(res => res.json())
  .then((res) => {
    countries = res;
  })
  .catch(e =>{
    handleError(e);
  })

  // events
  $("body").on('click','.o',(e) => {
    var countriesCode = $(e.target).attr("data-code");
    if(countriesCode === currentCountry.code){
      console.log("right");
      getQuestion();
      updateScore();
    }else{
      gameOver();
      console.log("wrong");
    }
  })
})

function resetGame(){
  timeLeft = 20;

  $(".gameover").fadeOut();
  $(".launch").slideDown();
}

function getQuestion(){
  currentCountry = getANewRansomCountry();
  renderCountryName(currentCountry.name);
  var options = getOptions();
  var optionsData = mixOptionsWithCurrent(options,currentCountry);
  renderOptions(shuffle(optionsData));
}

function gameOver(){
  $(".finalscore").text(score);
  $(".gameover").fadeIn();
}

function startGame(){
  currentCountry = getANewRansomCountry();
  $(".launch").fadeOut();
  renderCountryName(currentCountry.name);
  var options = getOptions();
  var optionsData = mixOptionsWithCurrent(options,currentCountry);
  renderOptions(shuffle(optionsData));
  console.log(options);
  startTimer();
}

function mixOptionsWithCurrent(options, currentCountry){
  var initOpt = _.map(options, (index) => {
    return countries[index];
  });
  initOpt.push(currentCountry);
  return initOpt;
}

function renderOptions(options){
  var $ops = $('.ops');
  console.log(options);
  console.log(countries.length);
  $ops.html('');
  _.map(options,(country) => {
    var $op = `<div class="o" data-code="${country.code}">
      <img class="res" src="./res/flags/${country.code.toLowerCase()}.png" alt="countries">
      </div>`
    $ops.append($op)
  })
}

function handleError(error){
  console.warn("ERROR",error);
}

function updateScore(){
  var $scrore = $(".score h1").text(++score);
}

function getANewRansomCountry(){
  console.log("getting new CCC");

  var filterCountries = countries.filter(country => country.level === 1 && !country.asked);
  console.log("aaaaaaaaaaa", filterCountries);
  var random = _.random(filterCountries.length);
  //countries.splice(random,1);
  var selected = filterCountries[random]
  var mainIndex = countries.indexOf(selected);
  countries[mainIndex].asked = true;

  console.log("mainIndex --> ", mainIndex);
  console.log("random --> ", random);
  console.log("cccc ", countries[mainIndex]);
  return selected;
}

function renderAll(){
  var $ops = $('.ops');
  _.map(countries,(country) => {
    var $op = `<div class="o" data-code="${country.code}">
      <img class="res" src="./res/flags/${country.code.toLowerCase()}.png" alt="countries">
      <a target="_blank" href="https://www.google.co.in/search?source=hp&q=${country.name}">${country.name}(${country.code})</a>
      </div>`
    $ops.append($op)
  })
}


function startTimer(){
  breaker = setInterval(function(){
    if(timeLeft <= 1){
      clearInterval(breaker)
      handleTimeOut();
      gameOver();
    }
    $timer.text(--timeLeft)
  },1000);
}

function handleTimeOut(){
  // handleTimeOut
  console.log("timeout");
}

function renderCountryName(name){
  $(".countryName").text(name);
}

function getOptions(){
  var options = []
  var i = 0;
  i > 1000 && console.log("overload issues");
  while(options.length <= 2 && i < 1000){
    var random = _.random(countries.length);
    options.length === 0 && options.push(random)
    if(options.indexOf(random) === -1){
      console.log("pushing..",random);
      options.push(random)
    }
    i++;
  }
  return options;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
