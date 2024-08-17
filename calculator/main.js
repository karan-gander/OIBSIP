const buttons = document.querySelectorAll(".items");
const input = document.querySelector("input");
// console.log(buttons);
let preOperand='';
let currOperand='';
let operation='';


function getNum(number){

  if(currOperand==''&& currOperand.includes('.')) return
  currOperand = currOperand + number;
  updateDisplay()

  
}

const getOpertion = (op)=>{
  console.log(operation)
  if(currOperand=="0") return
  if(preOperand !==""){
    cal()
  }
  operation = op
  preOperand = currOperand;
  currOperand = ""
   

}


const cal = ()=>{
  let result;
  const pre = parseInt(preOperand)
  const curr = parseInt(currOperand)
  console.log("pre and pass",pre,curr )
  if(isNaN(pre)||isNaN(curr)) return console.log("hi")

  console.log("opertaion in cal",operation)
  switch(operation){
    case "+":
      result = pre + curr
      break
    case "-":
      result = pre - curr
      break
    case "X":
      result = pre * curr
      break
    case "/":
      result = pre / curr
      break
    
  }
  console.log("res",result)
  operation =""
  preOperand=""
  currOperand = String(result)
  updateDisplay()

  



}

function clearDisplay(){
  preOperand=""
  operation=""
  currOperand = ""
  input.value = currOperand
}


function updateDisplay(){
  input.value= currOperand
}




// buttons.forEach((div) =>
//   div.addEventListener("click", () => {
//     console.log("hiii karan", div.innerText);
//     const clickedButton = div.innerText;
//     clickedValues.push(clickedButton);
//     console.log(clickedValues);
//     console.error(secNum)
//     if (clickedValues.length >= 3) {
//       clickedValues.shift();
//     }
//   })
// );
