const cervejasDeposito = ["Heineken", "Stella Artois", "Becks"];

function adicionaCervejas([...cervejas]) {
    cervejas.push("Colorado", "Estrella Galicia")
    console.log(`Inicialmente a gente tinha apenas essas cervejas no depósito: ${cervejasDeposito}`)
    console.log(`
Adicionando com as que chegaram, agora temos: ${cervejas}`)
}


adicionaCervejas(cervejasDeposito);
