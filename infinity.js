//Infinity using for loop

for(; ;){
    var rand  = Math.floor(Math.random() * 10 +1)
    if (rand == 9) {
        console.log('Winner Winner ')
        break
    }

    else{
        console.log('You have got ' + rand)
    }
}