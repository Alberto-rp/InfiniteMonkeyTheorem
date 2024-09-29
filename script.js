window.addEventListener("load", init);
function init() {
    //Send word
    document.querySelector('#sendWord').addEventListener('click', () => {
        let word = document.querySelector('#word').value
        showSpinner();
        setTimeout(() => {
            randomWorld(word);
        }, 250);
    })

    //Check if the word it's bigger or equal to 7
    document.querySelector('#word').addEventListener('input', () => {
        let word = document.querySelector('#word').value
        if (word.length >= 7){
            document.querySelector('.warning').classList.add('visible')
        }else{
            document.querySelector('.warning').classList.remove('visible')
        }

    })
}

let showSpinner = () => {
    document.querySelector('.spinner-container').classList.add('show');
    document.querySelector('.response-container').classList.remove('show');
}

let randomWorld = (word) => {
    // Inner vars
    const start = Date.now();
    var counter = 0;
    let numLetras = word.length;
    let cadenaEnContruccion = '';
    const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Inner functions
    let showElapsedTime = () => {
        let elapsedTime = Math.floor((Date.now() - start));
        document.querySelector('.timmer').innerHTML = `A very fast monkey would have taken ${Math.floor(elapsedTime / 1000)} Seconds (${elapsedTime}ms)`
    }

    for(;;){
        counter++
        //Create a random word with the same words
        for(let i = 0; i < numLetras; i++){
            let letra = letras[Math.floor(Math.random() * (27))]
            cadenaEnContruccion += letra;
        }
        //Check if the created random word it's like the input
        if(cadenaEnContruccion == word){
            document.querySelector('.container').innerHTML = `The word <b>${cadenaEnContruccion}</b> has taken <i>${Intl.NumberFormat("es-ES", {maximumFractionDigits: 3,}).format(counter)}</i> combinations`
            document.querySelector('.response-container').classList.add('show');
            document.querySelector('.spinner-container').classList.remove('show');
            showElapsedTime();
            break
        }else{
            cadenaEnContruccion = '';
        }
    }
}