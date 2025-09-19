function firstChar(text) {
  // your code here
  if (text.length <= 1) return " ";
	for (let index = 0; index < text.length; index++) {
		if (text[index] !== " ") return text[index];
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
console.log(firstChar(""));
