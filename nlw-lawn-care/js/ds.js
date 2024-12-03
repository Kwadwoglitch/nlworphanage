function formatAmount(){
    const amountInput = document.getElementById('amount'):
    let value = amountInput.value.replace([/^0-9.]/g, ''):
    if (value) {
        amount.value = '$' + value
    }
}