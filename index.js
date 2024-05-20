let bgColorInput1 = document.getElementById("bgColorInput");
let fontColorInput1 = document.getElementById("fontColorInput");
let fontSizeInput1 = document.getElementById("fontSizeInput");
let fontWeightInput1 = document.getElementById("fontWeightInput");
let paddingInput1 = document.getElementById("paddingInput");
let borderRadiusInput1 = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function applyButton() {
    let bgColorInputValue = bgColorInput1.value;
    let fontColorInputValue = fontColorInput1.value;
    let fontSizeInputValue = fontSizeInput1.value;
    let fontWeightInputValue = fontWeightInput1.value;
    let paddingInputValue = paddingInput1.value;
    let borderRadiusInputValue = borderRadiusInput1.value;

    customButton.style.backgroundColor = bgColorInputValue;
    customButton.style.color = fontColorInputValue;
    customButton.style.fontSize = fontSizeInputValue;
    customButton.style.fontWeight = fontWeightInputValue;
    customButton.style.padding = paddingInputValue;
    customButton.style.borderRadius = borderRadiusInputValue;
}
