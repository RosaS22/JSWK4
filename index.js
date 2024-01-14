var bankAccountBalance = 52.10;

var firstName = "Tom";
var lastName = 'Sawyer';
var fullName = firstName + " " + lastName;
var numberOfFriends = 5;


var isHotOutside= false;
var isHappy = true;

console.log('Hello World');

console.log(5 + 3);
console.log(4 - 2);
console.log(6 * 7);
console.log(8 / 2);

console.log(bankAccountBalance - 30);
console.log(bankAccountBalance * numberOfFriends);

console.log(5 == 5);
console.log(5 == 6);
console.log(bankAccountBalance == numberOfFriends);
console.log(bankAccountBalance == 52.10);


console.log(fullName);

/*
Question 2: Addition Operation

You have been given two variables, num1 and num2, 
each with predefined values as test cases. 
Your task is to calculate the sum of these variables 
and display the result using the console.log()
*/


let age = 25;

console.log(typeof age);
console.log(age);
console.log(isHappy);

var computerIsOn = true;


var ageRequiredToDrive = 16;

var currentAge = 15;

var canPersonDrive = currentAge >= ageRequiredToDrive;

console.log(canPersonDrive);

var firstName = 'sam';

if (firstName == 'sam') {
    console.log('Hello, sam');
} else {
    console.log('Hey, ' + firstName)
}

var costOfMilk = 3;

if (costOfMilk < 2) {
    console.log('We will buy 2 gallons');
} else if (costOfMilk < 3) {
    console.log('We will buy only 1 gallon');
} else {
    console.log('No thanks, way too expensive!');
} 

var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;//break means that as soon as it finds the right one it will stop searching
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}

//loops - for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('whatever is next');

for (let i = 0; i < 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

let names= ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let a = 0;

while(a < 10) {
    console.log(a);
    a++;
}

do {
    console.log(a);
} while (a < 10);

for (i in names) {
    console.log(names[i]);
}

for (i of names) {
    console.log(i);
}



//if (username == 'samy123' && password == '12345'); {
   //alert('Welcome back, ' + username);
//}  {//supposed to have - else - between these two brackets but it gives me an error
   // alert('Incorrect username or password.');
//}

var loggedIn = false;

while(!loggedIn) {
    let username = prompt('Username:');
    let password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {
        alert('Welcome back,' + username); //it doesn't put space between comma and username
        loggedIn = true;
    } else {
        alert('Incorrect username or password.');
    }

}
