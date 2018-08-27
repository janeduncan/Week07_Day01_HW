const InputView = require("./views/input_view.js");
const WordCounter = require("./models/word_counter.js");
const ResultView = require("./views/result_view.js");

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#wordcounter-form');
  form.addEventListener('submit', handleFormSubmit);

  const inputView = new InputView();
  inputView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});

const getList = function(){
  if (JSON.parse(localStorage.getItem('words')) !== null){
    return JSON.parse(localStorage.getItem('words'));
  } else {
    return [];
  }
};

const handleFormSubmit = function(event){
  event.preventDefault();
  wordList = totalWords();


  localStorage.setItem('words', JSON.stringify(wordList));

  event.target.reset();
};
