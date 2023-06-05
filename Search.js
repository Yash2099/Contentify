const Links = document.querySelectorAll(".Links")
const fileDiv = document.querySelector("#fileContent")
const Title = document.querySelector("#fileName")
const Card = document.querySelector(".card")
console.log(Links)

Links.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault()

    const fileName = event.target.id

    fetch(`./books/${fileName}.txt`).then(response => response.text())
      .then((content) => {



        //Remove line breaks and carriage returns and replaces with <br> tags
        content = content.replace(/\r?\n/g, "<br>");

        Title.innerHTML = event.target.innerHTML
        fileDiv.innerHTML = content
        Card.classList.add("book_loaded")
        const string = content
        const excludedWords = [
          "their",
          "when",
          "an",
          "which",
          "from",
          "mr.",
          "all",
          "we",
          "",
          "not",
          "have",
          "is",
          "this",
          "with",
          "his",
          "her",
          "they",
          "my",
          "her",
          "as",
          "you",
          "he",
          "she",
          "",
          "the",
          "there",
          "by",
          "at",
          "and",
          "so",
          "if",
          "than",
          "but",
          "about",
          "in",
          "on",
          "the",
          "was",
          "for",
          "that",
          "said",
          "a",
          "or",
          "of",
          "to",
          "there",
          "will",
          "be",
          "what",
          "get",
          "go",
          "think",
          "just",
          "every",
          "are",
          "it",
          "were",
          "had",
          "i",
          "very",
          "no",
          "me",
          "up"
        ]; 
        
        // List of words to exclude
        const words = string.toLowerCase().split(' ');
        const frequency = words.reduce((freq, currentWord) => {
          if (!excludedWords.includes(currentWord)) {
            freq[currentWord] = (freq[currentWord] || 0) + 1;
          }
          return freq;
        }, {});

        const maxFrequency = Math.max(...Object.values(frequency));
        const wordsWithMaxFrequency = Object.keys(frequency).filter(word => frequency[word] === maxFrequency);
        const Mostusediv = document.getElementById("mostUsed");
        console.log(wordsWithMaxFrequency)
        Mostusediv.innerHTML = wordsWithMaxFrequency

      })

  })
})


