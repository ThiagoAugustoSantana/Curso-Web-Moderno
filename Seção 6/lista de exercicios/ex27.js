function crescimento (altura1, taxa1, altura2, taxa2) {
    console.log('\n')
    
    if (altura1 > altura2) {
        console.log('Atualmente a criança 1 é maior')

        for (let i = 1; i <= 20; i++) {
            altura1 = altura1 + (taxa1 * altura1) 
            altura2 = altura2 + (taxa2 * altura2)

            if (altura2 > altura1) {
                return `A criança 2 ira ultrapassar a altura da criança 1 em ${i} anos`
            } else if (i == 20) {
                return `A criança 2 não ira ultrapassar a altura da criança 1 nem 20 anos`
            }
        }
        
    } else if (altura1 == altura2) {

        console.log('Atualmente as crianças tem amesma altura')
        for (let i = 1; i <= 20; i++) {
            altura1 = altura1 + (taxa1 * altura1) 
            altura2 = altura2 + (taxa2 * altura2)

            if (altura2 > altura1) {
                return `A criança 2 ira ultrapassar a altura da criança 1 em ${i} anos`
            } else if (altura2 < altura1) {
                return `A criança 1 ira ultrapassar a altura da criança 2 em ${i} anos`
            } else {
                return `Depois de 20 anos as criança ainda tem a mesma altura`
            }
        }

    } else {
        console.log('Atualmente a criança 2 é maior')

        for (let i = 1; i <= 20; i++) {
            altura1 = altura1 + (taxa1 * altura1) 
            altura2 = altura2 + (taxa2 * altura2)

            if (altura1 > altura2) {
                return `A criança 1 ira ultrapassar a altura da criança 2 em ${i} anos`
            }
        }
        return `A criança 1 não ira ultrapassar a altura da criança 2 nem 20 anos`
    }
}

console.log(crescimento(140, 0.02, 120, 0.03))
console.log(crescimento(140, 0.02, 120, 0.01))

console.log(crescimento(120, 0.03, 140, 0.02))
console.log(crescimento(120, 0.01, 140, 0.02))

console.log(crescimento(140, 0.02, 140, 0.03))
console.log(crescimento(140, 0.03, 140, 0.02))
console.log(crescimento(140, 0.02, 140, 0.02))

