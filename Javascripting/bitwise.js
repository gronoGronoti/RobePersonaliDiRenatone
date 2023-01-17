const bitwiseAND = (n1, n2) => {
	return n1 & n2 // and - converte in binario e stampa 1 se, messi in colonna, entrambi i numeri contengono 1
}

const bitwiseOR = (n1, n2) => {
	return n1 | n2 // or - basta che trova un 1 e lo stampa
}

const bitwiseXOR = (n1, n2) => {
	return n1 ^= n2 //xor - se trova 1 in entrambe le colonne stampa 0, basta un 1 in una delle due colonne
}

console.log(bitwiseAND(4, 5));
console.log(bitwiseOR(6, 8));
console.log(bitwiseXOR(3, 12));