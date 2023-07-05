document.getElementById("urlForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var url = document.getElementById("urlInput").value;
    if (url) {
      fetch(url)
        .then(response => response.text())
        .then(text => {
          var wordCount = countWords(text);
          displayResult(wordCount);
        })
        .catch(error => {
          console.log("Error:", error);
          displayResult(0);
        });
    }
  });
  
  function countWords(text) {
    var words = text.trim().split(/\s+/);
    return words.length;
  }
  
  function displayResult(wordCount) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Total words: " + wordCount;
  }
  