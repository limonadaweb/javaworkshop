//Escribe tu código aquí

function welcome(){
    console.log("¡Bienvenido!");
};
welcome();
//Escribe tu código aquí
function evenOrOdd(n){
    
    if (n % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
}
console.log(evenOrOdd(5)); // Imprime 'impar'
console.log(evenOrOdd(10)); // Imprime 'par'
console.log(evenOrOdd(0)); // Imprime 'par'
//Escribe tu código aquí
function greeting(name) {
    console.log(`¡Hola, ${name}! Bienvenido.`);
}
greeting('Pedrito');

export { evenOrOdd, greeting, welcome }