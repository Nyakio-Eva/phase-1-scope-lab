var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastfavoriteCustomer = 'its bob';
function changeLeastFavoriteCustomer(){
    leastfavoriteCustomer = 'sure bob';
    return leastfavoriteCustomer;
}