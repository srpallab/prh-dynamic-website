function getAmout(inputId) {
  const inputField = document.getElementById(inputId);
  const amount = inputField.value;
  inputField.value = "0";
  return parseFloat(amount);
}

function updateBalance(updateId, amount, isAddition) {
  if (amount > 0) {
    const amountSpan = document.getElementById(updateId);
    const totalSpan = document.getElementById("total-amount");
    amountSpan.innerText = parseFloat(amountSpan.innerText) + amount;
    if (isAddition) {
      totalSpan.innerText = parseFloat(totalSpan.innerText) + amount;
    } else {
      totalSpan.innerText = parseFloat(totalSpan.innerText) - amount;
    }
  }
}

function deposite() {
  let currentAmount = getAmout("deposit");
  console.log(currentAmount);
  updateBalance("deposit-amount", currentAmount, true);
}

function withdraw() {
  let currentAmount = getAmout("withdraw");
  console.log(currentAmount);
  updateBalance("withdraw-amount", currentAmount, false);
}

document.getElementById("deposit-btn").addEventListener("click", deposite);
document.getElementById("withdraw-btn").addEventListener("click", withdraw);
