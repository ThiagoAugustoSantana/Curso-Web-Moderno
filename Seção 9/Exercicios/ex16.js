function checarAnoBissexto (ano) {
    if ((ano % 4) == 0 && ((ano % 100) != 0 || (ano % 400) == 0)) {
        return `O ano ${ano} é Bissexto!`
    } else {
        return `O ano ${ano} não é Bissexto!`
    }
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(2400))