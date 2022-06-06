$(document).ready(function () {
  $("form#sentence").submit(function(event){
    event.preventDefault();
    const sentenceString =$("#sentenceInput").val();

    const space = ' '

    sentenceArray = sentenceString.split(space);
    let newSentenceArray = [];
    console.log(newSentenceArray);

    sentenceArray.forEach(function (word){

      if (word.length >= 3)
      {
        newSentenceArray.push(word);
      }
      
    });

    reversedArray = newSentenceArray.reverse();

    finalString = reversedArray.join(space);

    $("#results").text(finalString);

  });
});