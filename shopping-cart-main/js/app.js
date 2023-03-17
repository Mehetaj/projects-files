function UpdatePhoneNumber(increase) {
    const phoneNumberField = document.getElementById('phone-input-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);

    if(increase === true){
        newPhoneNumber = phoneNumber + 1;
    } else{
        newPhoneNumber = phoneNumber - 1;
    }
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    UpdatePhoneNumber(increase);
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    UpdatePhoneNumber();
})