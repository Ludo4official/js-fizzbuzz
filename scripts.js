for (let contatore = 1; contatore < 101; contatore++) {

    if (contatore % 5 == 0 && contatore % 3 == 0) {
        console.log('fizzbuzz')
        }    
    
    else if (contatore % 3 == 0) {
            
        console.log('fizz')
        }

    else if (contatore % 5 == 0) {
            
        console.log('buzz')
        }

    else {
            console.log(contatore)
        }
            
    } 