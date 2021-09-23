function focusFunction(){
    let parentNode = this.parentNode.parentNode;
    console.log("parentnode: " +parentNode.nodeName)
    parentNode.classList.add('focus');
}
function blurFunction(){
    let parentNode = this.parentNode.parentNode;
    if(this.value == ''){
        parentNode.classList.remove('focus');
    }
}

function addFocusBlurToInputs(){
    console.log("addFocusBlurToInputs");
    const inputs = document.querySelectorAll(".input");
    inputs.forEach(input=>{
        input.addEventListener('focus',focusFunction);
        input.addEventListener('blur',blurFunction);
    });
}


