document.getElementById('btn-get').addEventListener('click',function(){
    const textFieldString = document.getElementById('text-field').value;
    const textField = parseInt(textFieldString);
    const getDiscount30Add = (textField*30 )/100;
    const getDiscount30Minus = textField-getDiscount30Add;
    const setTextFieldInnetText = document.getElementById('paying-amount');
    const setInnerText = setTextFieldInnetText.innerText = getDiscount30Minus;   
})

document.getElementById('btn-get-50%').addEventListener('click',function(){
    const textFieldString = document.getElementById('text-field-40%').value;
    const textField = parseInt(textField40String);
    if (textField == 'DISC40') {
        const getDiscount40Add = (textField40*40)/100;
    const getDiscount40Minus = textField-getDiscount40Add;
    const setTextField40 = document.getElementById('paying-amount');
    const setInnerText40 = setTextField40.innerText = getDiscount40Minus;
    }
})