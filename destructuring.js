 /* 
 Object Destructuring 1
 the code will return:
 8
 1846
 on two separate lines
Object Destructuring 2
the code will return an object that contains yearNeptuneDiscovered and yearMarsDiscovered
Object { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }
Object Destructuring 3
the code will return:
"Your name is Alejandro and you like purple"
"Your name is Melissa and your like green"
"Your name is undefined and you like green"
Array Destructuring 1
the code will retrun:
"Maya"
"Marisa"
"Chi"
Array Destructuring 2
the code will return:
"Raindrops on roses"
"whiskers on kittens"
["Bright coppers kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
Array Destructuring 3
the code will return:
[10, 30, 20]
*/

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
let {a,b} = obj.numbers;

var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]
const raceResults = ([first, second, third, ...rest])=> {first, second, third, rest}