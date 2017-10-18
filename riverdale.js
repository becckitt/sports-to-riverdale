var wordMap = {
  "nba": "blossom maple farm",
  "the nba": "The Blossom Maple Farm",
  "basketball": "riverdale",
  "lebron james": "archie",
  "lebron": "archie",
  "kingjames": "archie",
  "stephen curry": "jughead jones",
  "steph curry": "jughead"
}

var elements = document.getElementsByTagName('*');
var regex = new RegExp('\\b(' + Object.keys(wordMap).join('|') + ')\\b', 'gi');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(regex, replaceTextNodesWithGoodRiverdaleContent);

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}

function replaceTextNodesWithGoodRiverdaleContent(match) {
  var replacementWord = wordMap[match.toLowerCase()];
      /* match capitalization -- wordMap is all lowercase */
  if (match != match.toLowerCase()) {
    if (match == match.toLowerCase().charAt(0).toUpperCase()) {
      replacementWord = replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1);
    } else if (match == match.toUpperCase()) {
      replacementWord = replacementWord.toUpperCase();
    }
  }
  console.log('replacing ' + match + ' with ' + replacementWord);
  return replacementWord;
}
