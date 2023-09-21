/*
number of paragraphs
number of sentences in a paragraph
	a comma between sentences
	a dot at the middle or end of a paragraph.
number of words in a sentence
number of letters in a word
	40% vowel, 60% consonant
*/

var minP = 5, maxP = 5;
var minS = 8, maxS = 12;
var minW = 4, maxW = 7;
var minL = 2, maxL = 8;

let inputElm, labels={'pn':5, 'pm':5, 'sn':8, 'sm':12, 'wn':4, 'wm':7, 'ln':2, 'lm':8};
for (let label of Object.keys(labels)){
	inputElm = document.getElementById(label);
	inputElm.value = labels[label];
}

const vowels = "euioa"
const consonants = "qwrtplsdfghjkmnbc"

function getRandom(n, m){
	return parseInt(Math.random()*(m - n + 1)) + n;
}

function getRanItem(list){
	return list[getRandom(0, list.length - 1)]
}

function capitalize(strarray){
	return strarray[0].toUpperCase() + strarray.slice(1)
}

function generateWord(){
	let generated = '';
	for (let i=0; i<getRandom(minL, maxL); i++){
		if (getRandom(0, 10) <= 8){
			if (consonants.indexOf(generated.slice(generated.length-1)) != -1){
				generated += getRanItem(vowels);
				while (generated.length > 1 && (generated.slice(generated.length-2, generated.length-1) == generated.slice(generated.length-1, generated.length))){
					generated = generated.slice(0, generated.length-1)
					generated += getRanItem(vowels);
				}
				continue
			} else{
				generated += getRanItem(consonants);
				while (generated.length > 1 && (generated.slice(generated.length-2, generated.length-1) == generated.slice(generated.length-1, generated.length))){
					generated = generated.slice(0, generated.length-1)
					generated += getRanItem(consonants);
				}
			}
		} else{
			generated += getRanItem(getRanItem([vowels, consonants]));
			while (generated.length > 1 && (generated.slice(generated.length-2, generated.length-1) == generated.slice(generated.length-1, generated.length))){
				generated = generated.slice(0, generated.length-1)
				generated += getRanItem(getRanItem([vowels, consonants]));
			}
		}
	}
	return generated;
}

function generateSentence(){
	let generated = '';
	for (let i=0; i<getRandom(minW, maxW); i++){
		generated += generateWord() + ' ';
	}
	return generated.slice(0, generated.length-1);
}

function generateParagraph(){
	let generated = '';
	let count = getRandom(minS, maxS);
	let newSentence;
	for (let i=0; i<count; i++){
		newSentence = generateSentence();
		if (generated.slice(generated.length - 2) == ". "){
			newSentence = capitalize(newSentence)
		}
		generated += newSentence;
		if (count > 3 && i > (count/2) && i < count - 3){
			if (getRandom(0, 10) <= 2){
				generated += ". ";
			}
		}
		if (i != count - 1){
			if (generated.slice(generated.length - 2) != ". "){
				generated += ", "
			}
		} else{
			generated += '.';
		}
	}
	return capitalize(generated);
}

function generateParagraphs(){
	let generated = '';
	for (let i=0; i<getRandom(minP, maxP); i++){
		generated += generateParagraph() + "\n\n";
	}
	return generated;
}

function generate(){
	let input, labels={'pn':0, 'pm':0, 'sn':0, 'sm':0, 'wn':0, 'wm':0, 'ln':0, 'lm':0};
	for (let label of Object.keys(labels)){
		input = document.getElementById(label).value;
		if (input == null){return}
		labels[label] = Number(input);
	}
	
	minP = labels['pn'];
	maxP = labels['pm'];
	minS = labels['sn'];
	maxS = labels['sm'];
	minW = labels['wn'];
	maxW = labels['wm'];
	minL = labels['ln'];
	maxL = labels['lm'];
	
	let output = document.getElementById("output");
	output.readOnly = false;
	output.value = generateParagraphs();
	output.readOnly = true;
}
