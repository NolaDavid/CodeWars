function topThreeWords(text) {
    // Remove punctuation and convert to lowercase

    text = text.replace(/[^\w\s]/gi, "").toLowerCase();
  
    // Split the text into words
    let words = text.split(" ");
  
    // Count the occurrences of each word
    let counted = words.reduce((acc, word) => {
     
      console.log('word',word)
      if(word.length){
          acc[word] = acc[word] ? acc[word] + 1 : 1;
      }
    
      return acc;
    }, {});
  
    // Sort the counted words by count in descending order
    let sorted = Object.entries(counted).sort((a, b) => b[1] - a[1]);
  
    // Return the top-3 most occurring words
    return sorted.slice(0, 3).map(entry => entry[0]);
  
  
  }