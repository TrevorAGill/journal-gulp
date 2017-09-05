$(document).ready(function() {
  $('#journal').submit(function(event) {
    debugger;
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var journal = new Journal(title,entry);

    var numOfWordsOutput = journal.countWords(entry);
    var numOfVowelsOutput = journal.countVowels(entry);
    var numOfConsonantsOutput = journal.countConsonants(entry);
    var teaserOutput = journal.teaser(entry);

    // console.log(numOfWordsOutput);
    // console.log(numOfVowelsOutput);
    // console.log(numOfConsonantsOutput);
    // console.log(teaserOutput);
    $('#entries').prepend('<p>Entry Title:' + title + 'Entry text' + entry + '</p>');

    });
  });
