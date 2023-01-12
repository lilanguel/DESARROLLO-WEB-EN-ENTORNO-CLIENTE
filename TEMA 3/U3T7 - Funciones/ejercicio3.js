function signoEgipcio() {
    let dia = parseInt(prompt(`Ingresa el dia de nacimiento`));
    let mes = parseInt(prompt(`Ingresa el mes de nacimiento`));
    let ano = parseInt(prompt(`Ingresa el ano de nacimiento`));

    let fechaNac = new Date(ano, mes, dia);

    alert(`Tu fecha de nacimiento es: ${fechaNac.getDate()}/${fechaNac.getMonth()}/${fechaNac.getFullYear()}`);

    switch (fechaNac.getMonth()) {
        case 1: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 31) {
                alert(`Hijo de Bastet, la diosa Gato`)
            } else {
                alert(`Hijo de Anubis, el chacal`)
            }
            break;
        }
        case 2: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 29) {
                alert(`Hijo de Selket, la Madre`)
            } else {
                alert(`Hijo de Bastet, la diosa Gato`)
            }
            break;
        }
        case 3: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 31) {
                alert(`Hijo de Apep, la serpiente sagrada`)
            } else {
                alert(`Hijo de Selket, la Madre`)
            }
            break;
        }
        case 4: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 30) {
                alert(`Hijo de Ptah, el que abre`)
            } else {
                alert(`Hijo de Apep, la serpiente sagrada`)
            }
            break;
        }
        case 5: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 31) {
                alert(`Hijo de Atum, el dios del sol`)
            } else {
                alert(`Hijo de Ptah, el que abre`)
            }
            break;
        }
        case 6: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 30) {
                alert(`Hijo de Isis, la Media Luna`)
            } else {
                alert(`Hijo de Atum, el dios del sol`)
            }
            break;
        }
        case 7: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 31) {
                alert(`Hijo de Ra, el sol`)
            } else {
                alert(`Hijo de Isis, la Media Luna`)
            }
            break;
        }
        case 8: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 31) {
                alert(`Hijo de Horus, el halcón`)
            } else {
                alert(`Hijo de Ra, el sol`)
            }
            break;
        }
        case 9: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 30) {
                alert(`Hijo de Maat, la justicia`)
            } else {
                alert(`Hijo de Horus, el halcón`)
            }
            break;
        }
        case 10: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 31) {
                alert(`Hijo de Osiris, dios de la agricultura y la religión`)
            } else {
                alert(`Hijo de Maat, la justicia`)
            }
            break;
        }
        case 11: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 30) {
                alert(`Hijo de Hato, madre de la femineidad`)
            } else {
                alert(`Hijo de Osiris, dios de la agricultura y la religión`)
            }
            break;
        }
        case 12: {
            if (fechaNac.getDate() >= 16 && fechaNac.getDate() <= 31) {
                alert(`Hijo de Anubis, el chacal`)
            } else {
                alert(`Hijo de Hato, madre de la femineidad`)
            }
            break;
        }
    }
}

signoEgipcio();