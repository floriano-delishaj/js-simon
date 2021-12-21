function randomNumber (minNum, maxNum) {
    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;
}

function getUniqueRandomNumbers (k) {

    const array = [];

    while (array.length < 5) {
        const num = randomNumber (1, k);
        if (!array.includes(num)) {
            array.push(num)
        }
    }

    console.log(array);
    return array;
}

const numberBox1 = document.getElementById('box-num1');
const numberBox2 = document.getElementById('box-num2');
const firstNumbers = getUniqueRandomNumbers(100);


numberBox1.append(firstNumbers)

setTimeout(function() {
    numberBox1.style.display = 'none';
}, 30000)

setTimeout(function() {
    const secondNumbers = [];
    let risultato = [];
    let counter = 0;

    for (i = 0; i < 5; i++) {
        let num = parseInt(prompt('Inserisci numero'));
        secondNumbers.push(num);

        if (secondNumbers[i] === firstNumbers[i]) {
            risultato.push(num);
            counter++;
        }
    }

    if (counter !== 0) {
        numberBox2.innerHTML += `I numeri che hai indovinato sono ${risultato}`;
    } else {
        numberBox2.innerHTML = 'Hai indovinato 0 numeri!';
    }
}, 32000)

