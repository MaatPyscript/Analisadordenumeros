const vetor1 = [];

function adicionar() {
  const value = document.getElementById("txtboxnum");
  const valor = Number(value.value);
  console.log(valor);
  if (valor >= 1 && valor <= 100) {
    if (vetor1.includes(valor)) {
      alert("Valor ja encontrado na lista");
    } else {
      vetor1.push(valor);
      const exibir = document.getElementById("exibir");
      let newOption = document.createElement("option");
      newOption.innerText = `Foi aidicionado: ${valor}`;
      exibir.appendChild(newOption);
      console.log(vetor1);
      value.value = "";
    }
  } else {
    alert("São permitidos somente valores entre 1 e 100");
  } 
}

function finalizar() {
    let resps = document.querySelector('div#resps')

    if (vetor1.length === 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let resps = document.getElementById('resps');
        let total = vetor1.length;
        let maior = vetor1[0];
        let menor = vetor1[0];
        for (let i = 0; i < vetor1.length; i++) {
            if (vetor1[i] > maior) {
                maior = vetor1[i];
            }
            if (vetor1[i] < menor) {
                menor = vetor1[i];
            }
        }
        resps.innerHTML = '';
        resps.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resps.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resps.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    }
}