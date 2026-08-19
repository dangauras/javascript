const accountId = 122345
let accountEmail = "dangauras@gmail.com"
var accountPassword = "12345"
accountCity = "Dhangadhi"
let accountState;

// accountId = 2 // constant value not allowed to change
//  using the let and var we can change the value of variable

 console.log(accountId);
  
//  console.log();
console.table({accountId, accountEmail, accountPassword, accountCity, accountState});
 
/*
Prefer not to use var,because of issue in block scope and functional scope
*/