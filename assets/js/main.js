const form = document.querySelector("#form")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido, preencha os campos corretamente!", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválida, preencha os campos corretamente!", false);
        return;
    }

    const imc = getIMC(peso,altura);
    const levelIMC = getLevelIMC(imc);
    
    const msg = `Seu IMC é ${imc} se enquadra como (${levelIMC}).`

    setResultado(msg, true);
    
});

function getLevelIMC(imc) {
    const level = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade I', 'Obesidade II'];

    if (imc >=39.9) return level[5]
    if (imc >=34.9) return level[4]
    if (imc >=29.9) return level[3]
    if (imc >=24.9) return level[2]
    if (imc >=18.5) return level[1]
    if (imc < 18.5) return level[0]
}

function getIMC(peso, altura) {
    const imc = peso / (altura **2)
    return imc.toFixed(2)
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}



