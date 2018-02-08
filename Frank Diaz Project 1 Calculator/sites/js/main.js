// Frank Diaz, Professor Kahn Mai, DIG 2930

/* In this Javascript file, I am going to create Javascript operations that will calculate the total price of the cake order based on what the user choosed from the ordering options in the DOM. I will create basic functions and variables as well as a couple of other methods to ensure that the computer gets the results properly. I will first make the results appear in a console log, and based on how it works, I will later implement it on the DOM screen. */

// Create a variable below that contains an array of all the cake size prices.
var cakeSizePrices = new Array();
cakeSizePrices["size1"]=30.00;
cakeSizePrices["size2"]=35.00;
cakeSizePrices["size3"]=40.00;
cakeSizePrices["size4"]=45.00;
cakeSizePrices["size5"]=50.00;
cakeSizePrices["size6"]=60.00;
cakeSizePrices["size7"]=65.00;
cakeSizePrices["size8"]=70.00;
cakeSizePrices["size9"]=80.00;

// Create a variable that holds an array of all the cake type prices.
var cakeTypePrices = new Array();
cakeTypePrices["type1"]=5.00;
cakeTypePrices["type2"]=5.00;
cakeTypePrices["type3"]=5.00;
cakeTypePrices["type4"]=7.00;
cakeTypePrices["type5"]=10.00;
cakeTypePrices["type6"]=10.00;
cakeTypePrices["type7"]=12.00;

// Create a variable below that contains an array of all the cake icing prices.
var cakeIcingPrizes = new Array();
cakeIcingPrizes["icing1"]=2.00;
cakeIcingPrizes["icing2"]=2.00;
cakeIcingPrizes["icing3"]=5.00;
cakeIcingPrizes["icing4"]=5.00;
cakeIcingPrizes["icing5"]=5.00;
cakeIcingPrizes["icing6"]=5.00;
cakeIcingPrizes["icing7"]=7.00;

// Create a variable below that contains an array of all the cake filling prices.
var cakeFillingPrices = new Array();
cakeFillingPrices["filling1"]=3.00;
cakeFillingPrices["filling2"]=3.00;
cakeFillingPrices["filling3"]=6.00;
cakeFillingPrices["filling4"]=6.00;
cakeFillingPrices["filling5"]=6.00;
cakeFillingPrices["filling6"]=6.00;
cakeFillingPrices["filling7"]=8.00;
cakeFillingPrices["filling8"]=7.00;
cakeFillingPrices["filling9"]=8.00;
cakeFillingPrices["filling10"]=10.00;

// Create a variable below that contains an array of all the cake topper prices.
var cakeTopperPrices = new Array();
cakeTopperPrices["topper1"]=50.00;
cakeTopperPrices["topper2"]=70.00;
cakeTopperPrices["topper3"]=120.00;
cakeTopperPrices["topper4"]=200.00;

// Create a variable below that contains an array of all the cake decoration prices.
var cakeDecorationPrices = new Array();
cakeDecorationPrices["dec1"]=5.00;
cakeDecorationPrices["dec2"]=10.00;
cakeDecorationPrices["dec3"]=10.00;
cakeDecorationPrices["dec4"]=15.00;
cakeDecorationPrices["dec5"]=15.00;
cakeDecorationPrices["dec6"]=15.00;
cakeDecorationPrices["dec7"]=15.00;
cakeDecorationPrices["dec8"]=15.00;
cakeDecorationPrices["dec9"]=20.00;
cakeDecorationPrices["dec10"]=20.00;
cakeDecorationPrices["dec11"]=25.00;

// Create a variable below that contains an array of the cake pre-cut options.
var cakePreCut = new Array();
cakePreCut["pre1"]=20.00;
cakePreCut["pre2"]=0.00;

/* This is where things now get interesting. Below I am goint to create a bunch of functions which all serve the same purpose. These functions are going to have for loops which will check when a user has clicked on an option for their cake order, and will evaluate the radio button's value. */

// Declare a function below that contains a for loop for the cakeSizePrices.
function calculateCakeSize() {
    var normCakeSizePrice = 0;
    // Create a variable called cakeForm that will get a reference to the DOM form. Use this for the other functions as well.
    var cakeForm = document.forms["cakecalculator"];
    var checkSize = cakeForm.elements["size"];
    // Create a for loop that will loop all of the radio buttons when the user interacts with them.
    for (var i = 0; i < checkSize.length; i++) {
        if(checkSize[i].checked) {
            calculateCakeSize = cakeSizePrices[checkSize[i].value];
            break;
        } else {
            document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        }
    }
    return calculateCakeSize;
}

// Declare a function below that contains a for loop for the cakeTypePrices.
function calculateCakeType() {
    var normCakeTypePrice = 0;
    var cakeForm = document.forms["cakecalculator"];
    var checkType = cakeForm.elements["type"];
    for (var i = 0; i < checkType.length; i++) {
        if(checkType[i].checked) {
            calculateCakeType = cakeTypePrices[checkType[i].value];
            break;
        } else {
            document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        }
    }
    return calculateCakeType;
}

// Declare a function below that contains a for loop for the cakeIcingPrices.
function calculateCakeIcing() {
    var normCakeIcingPrice = 0;
    var cakeForm = document.forms["cakecalculator"];
    var checkIcing = cakeForm.elements["icing"];
    for (var i = 0; i < checkIcing.length; i++) {
        if(checkIcing[i].checked) {
            calculateCakeIcing = cakeIcingPrizes[checkIcing[i].value];
            break;
        } else {
            document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        }
    }
    return calculateCakeIcing;
}

// Declare a function below that contains a for loop for the cakeFillingPrices.
function calculateCakeFilling() {
    var normCakeFillingPrice = 0;
    var cakeForm = document.forms["cakecalculator"];
    var checkFilling = cakeForm.elements["filling"];
    for (var i = 0; i < checkFilling.length; i++) {
        if(checkFilling[i].checked) {
            calculateCakeFilling = cakeFillingPrices[checkFilling[i].value];
            break;
        } else {
            document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        }
    }
    return calculateCakeFilling;
}

// Declare a function below that contains a for loop for the cakeTopperPrices.
function calculateCakeTopper() {
    var normCakeTopperPrice = 0;
    var cakeForm = document.forms["cakecalculator"];
    var checkTopper = cakeForm.elements["topper"];
    for (var i = 0; i < checkTopper.length; i++) {
        if(checkTopper[i].checked) {
            calculateCakeTopper = cakeTopperPrices[checkTopper[i].value];
            break;
        } else {
            document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        }
    }
    return calculateCakeTopper;
}

// Declare a function below that contains a for loop for the cakeDecorationPrices.
function calculateCakeDecoration() {
    var nowmCakeDecPrice = 0;
    var cakeForm = document.forms["cakecalculator"];
    var checkDecoration = cakeForm.elements["decoration"];
    for (var i = 0; i <checkDecoration.length; i++) {
        if(checkDecoration[i].checked) {
            calculateCakeDecoration = cakeDecorationPrices[checkDecoration[i].value];
            break;
        } else {
            document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        }
    }
    return calculateCakeDecoration;
}

// Declare a function below that contains a for loop for the cakePreCut prices.
function calculateCakePreCut() {
    var normCakePreCutPrice = 0;
    var cakeForm = document.forms["cakecalculator"];
    var checkPreCut = cakeForm.elements["precut"];
    for (var i = 0; i <checkPreCut.length; i++) {
        if(checkPreCut[i].checked) {
            calculateCakePreCut = cakePreCut[checkPreCut[i].value];
            break;
        } else {
            document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        }
    }
    return calculateCakePreCut;
}

// Declare a function below that will dum up all of the previous functions to get the total price.
function calculateTotalPrice() {
    var cakePriceAdd = calculateCakeSize() + calculateCakeType() + calculateCakeIcing() + calculateCakeFilling() + calculateCakeTopper() + calculateCakeDecoration() + calculateCakePreCut();
    var divObject = document.getElementById('cakePriceTotal');
    divObject.style.display='block';
    divObject.innerHTML = "Thank You for your order! Your total price is: $" + cakePriceAdd.toFixed(2);
    if (cakePriceAdd == "") {
        document.getElementById('cakePriceTotal').innerHTML = "Please finish filling out the order before you proceed.";
        
    }
    
}

function hideCakeTotalPrice() {
    var divObject = document.getElementById('cakePriceTotal');
    divObject.style.display='none';
}