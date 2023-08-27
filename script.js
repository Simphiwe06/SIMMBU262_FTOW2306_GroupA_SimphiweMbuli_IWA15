// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [firstLabel, firstArray] = data.lists.find(item => item[0] === 'first') || [];
const [secondLabel, secondArray] = data.lists.find(item => item[0] === 'second') || [];
const [thirdLabel, thirdArray] = data.lists.find(item => item[0] === 'third') || [];

const result = []

const extractBiggest = () => {
	const firstValue = firstArray && firstArray.length > 0 ? firstArray[firstArray.length - 1] : -Infinity;
	const secondValue = secondArray && secondArray.length > 0 ? secondArray[secondArray.length - 1] : -Infinity;
	const thirdValue = thirdArray && thirdArray.length > 0 ? thirdArray[thirdArray.length - 1] : -Infinity;

	if (firstValue >= secondValue && firstValue >= thirdValue) {
		return firstArray.pop();
	} else if (secondValue >= firstValue && secondValue >= thirdValue) {
		return secondArray.pop();
	} else {
		return thirdArray.pop();
	}
}

// Only edit above

for (let i = 0; i < 15; i++) {
	result.push(extractBiggest());
}

console.log(result);
