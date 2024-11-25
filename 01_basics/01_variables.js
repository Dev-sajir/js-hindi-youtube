// Fixed value should be in const
// Changeable values should be in let
// var is no longer used. bcz of block scope and block function issues
// console.table to display multiple info in table format
// Values can be reassign in let. 

const accountID = 121;
let accountEmail = "Sajir@gmail.com";
let accountPassword = "12345";
let accountCity = "Bangladesh";

console.table([accountID, accountEmail, accountPassword, accountCity]);

accountEmail = "hmSajir@gmail.com";
accountPassword = "61234115";
accountCity = "india";
console.table([accountID, accountEmail, accountPassword, accountCity]);
