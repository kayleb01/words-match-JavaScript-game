

function spinWords(strings) {
var words = strings.split(" ");
var worder = "";
	
	for (var i = 0; i < words.length;  i++) {
		if (words[i].length >= 5) {
			words[i] = words[i].split("").reverse().join("");
		}
	}
	worder =  words.join(" ");
	return worder;

}

//console.log(spinWords("this is another test"))

function wordRev(word) {
	return word.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ');
}

//console.log(wordRev("This is  welcome message"))


function arrayDiff(a, b) {
	return a.filter(ar => !b.includes(ar));
}
//console.log(arrayDiff([], [3,2,7]));

function decendingOrder(n) {
	let singleNum = n.toString().split("").sort((a,b) => b - a).join("");
	return +singleNum

	
}
//console.log(decendingOrder(12345))

let arr = [10, 20, 30, 40]
arr.forEach( function (i) {
	setTimeout(function(){
console.log("the index of this number is:" + i);
            }, 3000);
});

