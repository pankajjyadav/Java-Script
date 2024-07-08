const accountId = 1234
let accountEmail = "pankajyadav@gmail.com"
var accountPassword = "12345"

let  accountState;

accountCity = " Noida"

//  accountId = 223     // not allowed to  change "const"

accountEmail = "pkyadav@gmail.com"
accountPassword = "12345"
accountCity = "Delhi"



console.log(accountId);

/* 
Prefer not to use  # var  
because of issue in block scope and function scope
so we can use   # let
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
