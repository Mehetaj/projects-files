// function updatePrice(){
//     const foodFieldString = document.getElementById('food-field').value;
//     const foodField = parseInt(foodFieldString);
//     const rentFieldString = document.getElementById('rent-field').value;
//     const rentField = parseInt(rentFieldString);
//     const clothFieldString = document.getElementById('cloth-field').value;
//     const clothField = parseInt(clothFieldString);
//     const totalExpenses = foodField + rentField + clothField;
//     const totalExpensesSetupString = document.getElementById('total-expense'); 
//     totalExpensesSetupString.innerText = totalExpenses;
//     const totalExpensesSetup = document.getElementById('total-expense'); 
//     totalExpensesSetup.innerText = totalExpenses;
//     // step 2
    
    
//     // step 3
//     const balance = incomeField - totalExpenses;
//     return balance;
// }

document.getElementById('btn-calc').addEventListener('click',function steps(){
    // step 1
    const foodFieldString = document.getElementById('food-field').value;
    const foodField = parseInt(foodFieldString);
    const rentFieldString = document.getElementById('rent-field').value;
    const rentField = parseInt(rentFieldString);
    const clothFieldString = document.getElementById('cloth-field').value;
    const clothField = parseInt(clothFieldString);
    const totalExpenses = foodField + rentField + clothField;

    const totalExpensesSetupString = document.getElementById('total-expense'); 
    totalExpensesSetupString.innerText = totalExpenses;
    
    // step 2
    const incomeFieldString = document.getElementById('income-field').value;
    const incomeField = parseInt(incomeFieldString)
    // step of alert
    if (incomeField < totalExpenses) {
        alert('Fokinni tor kase kono tekah nai BBBBBBBaaaaaaaaGGGGG')
        getBalanceString.value = '2'
    }
    // step 3
    const balance = incomeField - totalExpenses;
    const getBalanceString = parseInt(document.getElementById('balance').innerText = balance);

    if (incomeField < totalExpenses) {
        alert('Fokinni tor kase kono tekah nai BBBBBBBaaaaaaaaGGGGG')
        getBalanceString.value = '2'
    }
})

// step 4

document.getElementById('saving').addEventListener('click', function(){
    const incomeFieldString = document.getElementById('income-field').value;
    const incomeField = parseInt(incomeFieldString)
    const savingTekah = incomeField * 0.2;
    const setSaving = document.getElementById('seving-amount');
    setSaving.innerText = savingTekah;

    // step 5
    const foodFieldString = document.getElementById('food-field').value;
    const foodField = parseInt(foodFieldString);
    const rentFieldString = document.getElementById('rent-field').value;
    const rentField = parseInt(rentFieldString);
    const clothFieldString = document.getElementById('cloth-field').value;
    const clothField = parseInt(clothFieldString);
    const totalExpenses = foodField + rentField + clothField;

    // step
    const balance = incomeField - totalExpenses;
    const remian = balance - savingTekah;
    const setRemainBalance = parseInt(document.getElementById('remian-amount'));
    setRemainBalance.innerText = remian;
})



