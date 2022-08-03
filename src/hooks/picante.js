//import ComponenteHijo from './ComponenteHijo';

const picante = (myArray) => {

    let sortedArray = myArray.sort();
    let responseArray = [];

    let auxArray = [];
    let auxString = `${sortedArray[0]}`;
    for (let i = 1; i <= myArray.length; i++) {


        if (sortedArray[i] - sortedArray[i - 1] == 1) {
            auxString += `${sortedArray[i]}`;
        }

        else {
            auxArray.push(auxString);
            auxString = `${sortedArray[i]}`;

        }


    }

    return auxArray

}


export { picante }
