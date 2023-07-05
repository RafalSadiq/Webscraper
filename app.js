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
function displayInsight(insight) {
    var tableBody = document.getElementById('insightsBody');
    var row = tableBody.insertRow();
    row.innerHTML = `
      <td>${insight.url}</td>
      <td>${insight.wordCount}</td>
      <td>${insight.favorite ? 'Yes' : 'No'}</td>
      <td>${insight.mediaLinks.join(', ')}</td>
      <td>
        <button class="favoriteBtn" data-url="${insight.url}" data-favorite="${insight.favorite}">${
      insight.favorite ? 'Remove Favorite' : 'Add to Favorites'
    }</button>
        <button class="removeBtn" data-url="${insight.url}">Remove</button>
      </td>
    `;
  
    // Attach event listeners to the buttons
    var favoriteBtn = row.querySelector('.favoriteBtn');
    var removeBtn = row.querySelector('.removeBtn');
    favoriteBtn.addEventListener('click', toggleFavorite);
    removeBtn.addEventListener('click', removeInsight);
  }
  
