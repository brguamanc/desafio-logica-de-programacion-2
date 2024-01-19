// Función que muestra "¡Hola, mundo!" en la consola
function holaMundo() {
    console.log('¡Hola, mundo!');
  }
  
  // Función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola
  function holaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  // Función que recibe un número como parámetro y devuelve el doble de ese número
  function doble(numero) {
    return numero * 2;
  }
  
  // Función que recibe tres números como parámetros y devuelve su promedio
  function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
  }
  
  // Función que recibe dos números como parámetros y devuelve el mayor de ellos
  function mayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo
  function cuadrado(numero) {
    return numero * numero;
  }
  
  // Ejemplos de uso:
  holaMundo();
  holaNombre('Juan');
  console.log(doble(5));
  console.log(promedio(10, 20, 30));
  console.log(mayor(8, 12));
  console.log(cuadrado(4));
  