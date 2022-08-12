//This code dosen't work because js 
//here console.log print linear type out put 
// at first print one line then print print loop 

/*
var n = 10

for(i = 1; i <= n; i++){
    for(j = 1; j <= i; j++){
        console.log(i)
    }
}
*/

/*
        var n = 10 

        for(var i = 1; i <= n; i++){
            var result = ''
            for(var j = 1; j <= i; j++){
                result += j + ' '
            }
            console.log(result)
        }
*/

/*
        var n = 10 

        for(i = 1; i <= n; i++){
            var result = ''
            for(j = 1; j <= n; j++){
                result += '* '
            }
            console.log(result)
        }
*/


var n = 10 
var result = ''

for(i = 0; i < n; i++){
    
    for(j = 0; j < n - 1; j++){
        result += '* '
    }
    console.log(result)
}

