// chrome.runtime.sendMessage({method: "isEnabled"}, function(response) {
//   if (isLesbianEnabled(response.status)) {
	var elements = document.getElementsByTagName('*');

	for (var i = 0; i < elements.length; i++) {
	    var element = elements[i];

	    for (var j = 0; j < element.childNodes.length; j++) {
	        var node = element.childNodes[j];

	        if (node.nodeType === 3) {
	            var text = node.nodeValue;
	            var replacedText =
	            	text.replace(/vampire/g, 'lesbian')
	            		.replace(/Vampire/g, 'Lesbian')
	            		.replace(/vamps/g, 'lesbos')
	            		.replace(/Vamps/g, 'Lesbos');

	            if (replacedText !== text) {
	                element.replaceChild(document.createTextNode(replacedText), node);
	            }
	        }
	    }
	}
//   }
// });

// function isLesbianEnabled(val) {
// 	return val == "true"
// }
