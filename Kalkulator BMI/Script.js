const button = document.getElementById("input-btn")
const result = document.getElementById("result")
const reset = document.getElementById("reset")
const ligth = document.getElementById("ligth")

function ambilData(){
    const beratBadan = parseFloat(document.getElementById("berat-badan").value);
    let tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);

    if (tinggiBadan > 3) {
        tinggiBadan = tinggiBadan/100
    }

    let bmi = beratBadan/tinggiBadan**2
    let fixBmi = parseFloat (bmi.toFixed(1))
    console.log(fixBmi)

    if(fixBmi < 18.5 ){
        result.textContent = "BMI: " +  fixBmi + " Berat Badan Kurang (Underweight) "
    }else if (fixBmi >= 18.5 && fixBmi <= 24.9){
        result.textContent = "BMI: " + fixBmi + " Berat Badan Normal (Healthy Weight) "
    }else if(fixBmi >= 25 && fixBmi <= 29.9){
        result.textContent =  "BMI: " + fixBmi + " Kelebihan Berat Badan (Overweight) "
    }else if(fixBmi >= 30){
        result.textContent = "BMI: " + fixBmi + " Obesitas (Obesity) "
    }
}

reset.addEventListener('click', function() {
    result.textContent = ""
    document.getElementById("berat-badan").value = ""
    document.getElementById("tinggi-badan").value = ""
})

ligth.addEventListener('click', function(){
    document.body.classList.toggle('ligth')
})
