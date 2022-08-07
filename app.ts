//let message: string = 'This will be a tip calc soon!';
//let heading = document.createElement('h1');
//heading.textContent = message;

//document.body.appendChild(heading)
///////////////////////////////////////////////////

var beforeTip:number = 0;
var tipPercent:number = 20;
var billWithTip:number = 0;

var updateView: () => void;

var handleSlider: (percent: string) => void;
handleSlider = function(percent:string) {
    tipPercent = parseFloat(percent);
    updateView();
}

var handleBill: (subtotal: string) => void;
handleBill = function(subtotal: string) {
    beforeTip = parseFloat(subtotal);
    updateView();
}

var updateView: () => void;
updateView = function() {
    const tipDisplay = document.getElementById("tipTotal");
    const totalBillDisplay = document.getElementById("total");
    const tipPercentDisplay = document.getElementById("tip-percentage-display");

    let tipAmt:number = beforeTip * (tipPercent/100)
    let totalBill:number = beforeTip + tipAmt
    billWithTip = totalBill;

    tipPercentDisplay.innerHTML = `${tipPercent}%`
    tipDisplay.innerHTML =  `Tip: $${tipAmt.toFixed(2)}`
    totalBillDisplay.innerHTML = `Total: $${totalBill.toFixed(2)} `
}

var roundUp: () => void;
roundUp = function() {
    let up:number = Math.ceil(billWithTip)
    let diff:number = parseFloat((up - billWithTip).toFixed(2))

    let newTip:number = (beforeTip * (tipPercent/100)) + diff
    let displayText = `If you round up, your new total will be $${up}. This means that the tip needs to be $${newTip.toFixed(2)}.
    This new tip is ${((newTip/beforeTip)*100).toFixed(2)}% of the original subtotal.`

    document.getElementById("roundUpText").innerHTML = displayText;
}