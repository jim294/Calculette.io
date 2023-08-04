const operateursHtml = document.querySelectorAll(".operateur")
const opHtml = document.querySelector(".op")
const inputFirstHtml = document.getElementById("firstNumber")
const inputSecondHtml = document.getElementById("secondNumber")
const resultHtml = document.querySelector(".result")
const calculHtml = document.querySelector(".calculer")
let opChoix="+";
opHtml.textContent=opChoix;
console.log(operateursHtml)

operateursHtml.forEach(element=>{
    element.addEventListener("click", function(){
        console.log(element.textContent)
        opHtml.textContent= element.textContent
        opChoix = element.textContent
    })
})

function calcul(op,nb1, nb2){
    let result;
    if(op=="+"){
        result=nb1+nb2
    } else if(op=="-"){
        result=nb1-nb2
    } else if(op=="x"){
        result=nb1*nb2
    }else if(op=="÷"){
        result=nb1/nb2
    }
    resultHtml.textContent= result;
}

calculHtml.addEventListener("click", ()=>{
    let n1= inputFirstHtml.value
    n1=Number(n1)
    let n2= inputSecondHtml.value
    n2=Number(n2)
    console.log(typeof(n1))
    calcul(opChoix,n1,n2)
})



