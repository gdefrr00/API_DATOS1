const bcrypt = require('bcrypt');
const readline = require('readline');
// Crear interfaz para leer desde la terminal
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
const saltRounds = 10; // Número de rondas de hashing
// Preguntar al usuario por una contraseña
rl.question("Introduce una contraseña para hashear: ", (password) => {
// Generar el hash de la contraseña
bcrypt.hash(password, saltRounds, (err, hash) => {
if (err) {
console.error("Error al generar el hash:", err);
rl.close();
return;
}
console.log("\nHash generado:", hash);
// Ahora comprobamos si la contraseña ingresada coincide con el hash generado
rl.question("\nIntroduce la misma contraseña para verificar: ", (passwordToVerify) => {
bcrypt.compare(passwordToVerify, hash, (err, result) => {
if (err) {
console.error("Error al verificar la contraseña:", err);
} else if (result) {
console.log("Contraseña correcta: Coincide con el hash.");
} else {
console.log("Contraseña incorrecta: No coincide con el hash.");
}
rl.close(); // Cerrar la interfaz de lectura
});
});
});
});