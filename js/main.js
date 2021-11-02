
// ismingiz
var userName = prompt ("Ismingizni");
console.log(userName);

// Familyangiz
var userSurname = prompt ("Familyangizni");
console.log(userSurname);

// data
var userDate = prompt ("Dasturlashdan nimalarni bilasiz");
console.log(userDate);

// tel
var userTel = prompt ("Telefon raqamingiz");
console.log(userTel);

// ishingiz
var userStudy = prompt ("Ishlaysizmi uqisizmi");
console.log(userStudy);

//  yashash joyingiz
var userLocation = prompt ("Yashash joyingiz");
console.log(userLocation);

// nimalarni bilasiz
var userDeveloper = prompt ("Dasturlashdan nimalarni bilasiz");
console.log(userDeveloper);

// nimaga
var userWhay = prompt ("Nega aynan Dasturlashni tanlagansiz");
console.log(userWhay);


// maqsadingiz
var userGoal = prompt ("Maqsadingiz");
console.log(userGoal);

// fikringiz
var userThought = prompt ("Biz haqimizda fikringiz");
console.log(userThought);


var information = [
    "Ismingiz:" + " " +  userName + "\n" +
    "Familyangiz:" + " " +  userSurname + "\n" +
    "Tug'ilgan kuningiz: " + " " +  userDate +  "\n" +
    "raqamingiz:" + " " +  userTel + "\n" +
    "o'qishingiz:" + " " +  userStudy + "\n" +
    "yashash joyingiz:" + " " + userLocation + "\n" +
    "nimalarni bilasiz:" + " " + userDeveloper + "\n" +
    "nimaga:" + " " +  userWhay + "\n" +
    "Maqsadingiz:" + " " +  userGoal + "\n" +
    "biz haqimizda:" + " " +  userThought
]

console.log(information);

alert(information);