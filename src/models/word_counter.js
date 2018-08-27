const PubSub = require("../helpers/pub_sub.js")

const WordCounter = function(){

};

WordCounter.prototype.bindEvents = function(){
  PubSub.subscribe("InputView:text-inputted", (event) => {
    const inputtedText = event.detail;
    const result = this.totalWords(inputtedText);
    PubSub.publish("WordCounter:result", result)
    // console.log(result);
  });
};

WordCounter.prototype.totalWords = function(text){
  return true;
};

module.exports = WordCounter;
