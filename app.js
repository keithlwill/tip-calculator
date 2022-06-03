//let message: string = 'This will be a tip calc soon!';
//let heading = document.createElement('h1');
//heading.textContent = message;
//document.body.appendChild(heading)
///////////////////////////////////////////////////
var beforeTip = 0;
var tipPercent = 20;
var billWithTip = 0;
var updateView;
var handleSlider;
handleSlider = function (percent) {
    tipPercent = parseFloat(percent);
    updateView();
};
var handleBill;
handleBill = function (subtotal) {
    beforeTip = parseFloat(subtotal);
    updateView();
};
var updateView;
updateView = function () {
    var tipDisplay = document.getElementById("tipTotal");
    var totalBillDisplay = document.getElementById("total");
    var tipPercentDisplay = document.getElementById("tip-percentage-display");
    var tipAmt = beforeTip * (tipPercent / 100);
    var totalBill = beforeTip + tipAmt;
    billWithTip = totalBill;
    tipPercentDisplay.innerHTML = "".concat(tipPercent, "%");
    tipDisplay.innerHTML = "Tip: $".concat(tipAmt.toFixed(2));
    totalBillDisplay.innerHTML = "Total: $".concat(totalBill.toFixed(2), " ");
};
var roundUp;
roundUp = function () {
    var up = Math.ceil(billWithTip);
    var diff = parseFloat((up - billWithTip).toFixed(2));
    var newTip = (beforeTip * (tipPercent / 100)) + diff;
    var displayText = "If you round up, your new total will be $".concat(up, ". This means that the tip needs to be $").concat(newTip.toFixed(2), ".\n    This new tip is ").concat(((newTip / up) * 100).toFixed(2), "%");
    document.getElementById("roundUpText").innerHTML = displayText;
};
