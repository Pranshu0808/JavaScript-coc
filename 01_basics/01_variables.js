const accountId = 144533
let accountEmail = "pranshu@google.com"
var accountPassword = "12345"      
accountCity = "jaipur"
let accountState;

// accountId = 2    not allowed
//  console.log(accountId); if there any const is present.so const doesn't change
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Benguluru"

/*
    prefer not to use var 
    because of issue in block scope and functional scope 
*/

 console.table([accountId ,accountEmail, accountPassword , accountCity , accountState])
ṇ