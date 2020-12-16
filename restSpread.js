function filterOutOdds(...nums){
	return nums.filter(num=> num % 2 === 0);
}

function findMin(...nums){
	return Math.min(...nums);
}
function mergeObjects(obj1, obj2){
	return {...obj1, ...obj2}
}

function doubleAndReturnArgs(arr, ...args){
    return [...arr , ...args.map(val => val * 2)]
}

const removeRandom = (items)=>{
    let rand = Math.floor(Math.random() * items.length);
    return [...items.slice( 0, rand), ...items.slice(rand+1)];
}

const extend= (array1, array2)=>{
    return [...array1, ...array2]
}

const addKeyVal = (obj, key, val)=>{
    return {...obj, [key]: val}
}

const removeKey = (obj, key)=>{
    newObj = {...obj}
    delete newObj[key];
    return newObj;
}
const combine = (obj1, obj2)=>{
    return {...obj1, ...obj2}
}
const update = (obj, key, val)=>{
    newObj = {...obj};
    newObj[key] = val;
    return newObj;
}