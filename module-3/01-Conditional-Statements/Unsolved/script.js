// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 20;
var expression1 = x < 25;
var expression2 = x > 0;

// TODO: Write Your JavaScript Code Here

// Checked if both expressions are true
if (expression1 && expression2){
    console.log('True ✅ True ✅')

// If both conditions are not true, checked if expression1 is true
} else if (expression1){
    console.log('True ✅ False ❌')

// If expressions1 is not true, then checked if expression2 is true
} else if (expression2){
    console.log('False ❌ True ✅')

// If none of the conditions above evalutated to true, both expressions must be false
} else {
    console.log('False ❌ False ❌')
}