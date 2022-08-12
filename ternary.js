var n = 10

var str = ''

if (n % 2 == 0 ){
    str = 'even'
}
else{
    str = 'odd'
}

console.log(str + '\tThis is first condition result')

// use ternary operator for single condition


var result = n%2 == 0 ? 'Even' : 'Odd'

// variable = condition ? '..' : '..' 

console.log(result  + '\tThis is second condition result')