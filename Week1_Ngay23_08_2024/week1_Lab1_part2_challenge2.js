// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array)

var tip;
var bill1 = 275;
var bill2 = 40;
var bill3 = 430;

//Su dung if else
function calculateTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

//Su dung toan tu 3 ngoi
function tipToanTu3Ngoi(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

console.log("<-----------------Ket qua test su dung if else----------------->");
console.log(`The bill was ${bill1}, the tip was ${calculateTip(bill1)}, and the total value ${bill1 + calculateTip(bill1)}`);
console.log(`The bill was ${bill2}, the tip was ${calculateTip(bill2)}, and the total value ${bill2 + calculateTip(bill2)}`);
console.log(`The bill was ${bill3}, the tip was ${calculateTip(bill3)}, and the total value ${bill3 + calculateTip(bill3)}`);


console.log("<-----------------Ket qua test su dung toan tu 3 ngoi----------------->");
console.log(`The bill was ${bill1}, the tip was ${tipToanTu3Ngoi(bill1)}, and the total value ${bill1 + tipToanTu3Ngoi(bill1)}`);
console.log(`The bill was ${bill2}, the tip was ${tipToanTu3Ngoi(bill2)}, and the total value ${bill2 + tipToanTu3Ngoi(bill2)}`);
console.log(`The bill was ${bill3}, the tip was ${tipToanTu3Ngoi(bill3)}, and the total value ${bill3 + tipToanTu3Ngoi(bill3)}`);

//Ham calcTip
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}