console.log("1)",this === global)
console.log("2)",this === module)

console.log ("3)",this === module.exports)

console.log("4)",this === exports)

function logThis(){
   
    console.log("Dentro da função = ",this === exports)
}

logThis()