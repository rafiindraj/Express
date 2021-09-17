// const square = function(x){
//     return x*x
// }

// const square = (x) =>{
//     return x*x
// }

// const square = (x) => x*x
// console.log(square(3))
const events = {
    name:'people',
    guessList:['Max', 'Sai','Cagali'],
    printGuessList(){
        // const that = this
        console.log(this.name+' is VIP guessList')
        this.guessList.forEach((guest)=> console.log(guest+ ' is coming soon to save the world where '+ this.name+ ' lived in')
         
        )
    }
}

events.printGuessList()