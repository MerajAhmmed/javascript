var date = new Date()

var today = date.getDay()

switch (today) {                                   // also use switch (6 or another) for case up to 6 
    case 0: 
    console.log('Today is Sunday')
    break

    case 1: 
    console.log('Today is Monday')
    break

    case 2: 
    console.log('Today is Tuesday')
    break
    case 3: 
    console.log('Today is Wednesday')
    break

    case 4: 
    console.log('Today is thursday')
    break

    case 5: 
    console.log('Today is Friday')
    break

    case 6: 
    console.log('Today is Saturday')
    break

    default :
    console.log('Not a valid number') 
}
