const allButtons = document.querySelectorAll('.btn')
const displayBoard = document.querySelector('#res')

allButtons.forEach( ThisBtn => {
    ThisBtn.addEventListener('click',()=>{
        if(String(ThisBtn.innerHTML)==="C")
            displayBoard.innerHTML = ""
        else if(String(ThisBtn.innerHTML)==="=")
            displayBoard.innerHTML = evaluateBinary()
        else 
            displayBoard.innerHTML += ThisBtn.innerHTML
    })
});

function evaluateBinary(){
    let operands = /\d+/g
    let operator = /[\+\-\*\/]/
    let inputStr = displayBoard.innerHTML
    let numArray = inputStr.match(operands)
    let op = inputStr.match(operator)
    let binToDec = [0,0]
    for(let i=0; i<=1; i++)
        for (let j = 0; j < numArray[i].length; j++)
            binToDec[i] += Number(numArray[i][j])*(2**(numArray[i].length-j-1));
            // console.log(numArray[i][j])
    let result 
    switch(op[0]){
        case '+' : result = (binToDec[0] + binToDec[1]); break;
        case '-' : result = (binToDec[0] - binToDec[1]); break;
        case '*' : result = (binToDec[0] * binToDec[1]); break;
        case '/' : result = (binToDec[0] / binToDec[1]); break;
    }
    result = result.toString(2)
    return result
}
