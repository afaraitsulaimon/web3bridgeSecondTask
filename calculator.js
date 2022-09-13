
    // get where the figures will be displayed
    const theDisplay = document.querySelector('.display');

    // get the buttons, which is inside the content, so the buttons are children
const theButtons = document.querySelector('.content').children;
//store all the symbols in an array
const allSymbols = ['+','*','-','/','=','C']

// then store first value, second value and the symbol in an empty variable
//but as string, we stored it as a string, so that we can concatenate 2 values together

let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''

const calculate = () => {

    //so we convert it to float here, cos we might have integer decimal in our value
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

   //lets do calculation
   if(symbol === '+'){
       result = firstValue + secondValue
       theDisplay.innerText = result
        firstValue = result
        secondValue = ''
    }

   if(symbol === '-'){
    result = firstValue - secondValue
    theDisplay.innerText = result
    firstValue = result
        secondValue = ''
}

if(symbol === '*'){
    result = firstValue * secondValue
    theDisplay.innerText = result
    firstValue = result
        secondValue = ''
}

if(symbol === '/'){
    result = firstValue / secondValue
    theDisplay.innerText = result
    firstValue = result
    secondValue = ''
}

}

//use for each to get the button click
//then return the button as an event listener
//create a const variable that holds the clicked button 
// then display it on the screen and also concatenating it, should incase 2 numbers or more are needed
for (let button of theButtons) {

    button.addEventListener('click', () => {
        const {innerText : btnValue} = button;

        //create a variable, that checks if the button click include any of the 
        //symbol stored in the array allSymbols above
        
        const btnValueIsSymbol = allSymbols.includes(btnValue)

        //checking if C was clicked, then make firstValue empty
        //Then make the second value too to be empty
        //also theDisplay.innerText to be empty


        //check if there is no secondValue, then return null
        if(!secondValue && btnValue === '='){
            return null
        }

        if(btnValue === 'C'){
            firstValue = ''
            secondValue = ''
            symbol = ''
            return theDisplay.innerText = ''

        }



        //check if there is a first value and the value clicked is the symbol
        //why we did this, is because the user might start a value wkith -5 
        //Then we store symbol as the btnValue
        if(firstValue && btnValueIsSymbol){
            secondValue && calculate()
            symbol = btnValue
            
            
        }else if(!symbol){

            firstValue += btnValue

        }else if(symbol){

            secondValue += btnValue
        }

        if(btnValue !== '='){
            theDisplay.innerText += btnValue;
        }
        
    });

}