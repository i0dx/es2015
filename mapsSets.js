/*
Quick Question #1
It returns a set with the following values [1,2,3,4]
Quick Question #2
"refr"
Quick Question #3
Since Arrays are reference based data types [1,2,3] is not equal to [1,2,3]
m will have two entires one true one false
*/
function hasDuplicate(arr){
    const tester = [...new Set(arr)];
    return tester.size !== arr.length;
}
function vowelCount(str){
    const letters = str.toLowerCase().split('');
    let vowelCounter = new Map();
    
    for( let letter of letters){
        if('aeiou'.indexOf(letter) !== -1){
            if(vowelCounter.has(letter)){
                vowelCounter.set(letter, vowelCounter.get(letter) +1);
            }else{
            vowelCounter.set(letter, 1);
            }
        }
    }
    return vowelCounter;
}
