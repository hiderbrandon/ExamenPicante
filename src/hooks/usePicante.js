import ComponenteHijo from './ComponenteHijo';

const picante = (myArray) => {

    let sortedArray = myArray.sort();
    let responseArray = [];

    for (let i = 1; i < myArray.length; i++) {

        let auxArray = [];
        let auxString = `${sortedArray[0]}`;

        if (sortedArray[i] - sortedArray[i - 1] == 1) {
            auxString+= `${sortedArray[i]}`;
            auxArray.push()
        }
        else{

        }

    }

}