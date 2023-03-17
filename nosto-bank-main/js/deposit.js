// DRY ---> Do Not Repeat Yourself
// document.getElementById("btn-deposit").addEventListener("click", function () {
//   const newDepositAmountString = document.getElementById('deposit-field')
//   const newDepositAmount = parseInt(newDepositAmountString).value;
//   const previousDepositTotalString = document.getElementById('deposit-total')
//   const previousDepositTotal = parseInt(previousDepositTotalString);
//   const newDepositTotalString = previousDepositTotal + newDepositAmount;
//   const newDepositTotal = parseInt(newDepositTotalString)
//   // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
//   // setTextElementValueById("deposit-total", newDepositTotal);
  
//   // const previousBalanceTotal = getextElementValueById("balance-total");
//   // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//   // ("balance-total", newBalanceTotal);
// });

document.getElementById('btn-deposit').addEventListener('click', function() {
  const depositInputFieldString = document.getElementById('deposit-field').value;
  const depositInputField = parseInt(depositInputFieldString)
  
  const previousDepositTotalString = document.getElementById('deposit-total').innerText;
  const previousDepositTotal = parseInt(previousDepositTotalString);

  const newDepositAmount = depositInputField + previousDepositTotal;
 document.getElementById('deposit-total').innerText = newDepositAmount;

  const depositBalanceTotalString = document.getElementById('balance-total').innerText;
  const depositBalanceTotal = parseInt(depositBalanceTotalString);

  const totalDepositWithBalance = newDepositAmount + depositBalanceTotal;

  document.getElementById('balance-total').innerText = totalDepositWithBalance;

})

