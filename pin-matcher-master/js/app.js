function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else{
        // console.log('Pin not 4 digit Found');
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})


document.getElementById('calcalator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNUmberField = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if(number === 'C'){
            typedNUmberField.value = ''
        } else if(number == '<'){
            const digits = previusTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNUmberField.value = remainingDigits;
        }
    } else{
        
        const previusTypedNumber = typedNUmberField.value;
        const newTypedNumber = previusTypedNumber + number;
        typedNUmberField.value = newTypedNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click', function(){
    // console.log('HI I om PIn on pen')
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNUmberField = document.getElementById('typed-numbers');

    const typedNumber = typedNUmberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailed = document.getElementById('pin-fail');
    if(typedNumber === currentPin){
       
       pinSuccessMessage.style.display = 'block'
    } 
    else{
       
        pinFailed.style.display = 'block'
        pinSuccessMessage.style.display = 'none'
    }
})

