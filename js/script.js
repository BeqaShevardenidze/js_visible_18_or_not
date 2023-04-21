console.log('hello');

let number = 5;
console.log(number);

const sum = 8;
console.log(sum);

const obj = {
    name: 'test',
    height: 180
}

console.log(obj.name);

// -----------------alerts
// alert('hello');

// const result = confirm('18 წლის ხაართ?');
// console.log(result);

// const answer = prompt('რამდენი წლის ხართ?');
// console.log(answer);

// const name = 'beqa';
// const name2 = 'Shevardenidze';
// console.log(`Hello ${name} ${name2}`);

// var user = 'cicada04.12';
// console.log(`https://www.facebook.com/${user}`);

const answer = prompt('რამდენი წლის ხართ?', '');
var element = document.getElementById("test");

if(answer < 18){
    alert('თქვენ არ ხართ 18 წლის');
}else{
    alert('მობრძანდით');
    element.style.visibility = "visible";
}