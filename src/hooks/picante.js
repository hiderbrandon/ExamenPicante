//import ComponenteHijo from './ComponenteHijo';

const picante = (myArray) => {

    let sortedArray = myArray.sort();
    console.log(sortedArray)
    let responseArray = [];

    let auxArray = [];
    let auxString = `${sortedArray[0]}`;
    for (let i = 1; i <= myArray.length; i++) {


        if (sortedArray[i] - sortedArray[i - 1] == 1) {
            auxString += `${sortedArray[i]}`;
            console.log(`nigga ima in ${auxString}`)
        }

        else {
            auxArray.push(auxString);
            auxString = `${sortedArray[i]}`;

        }


    }

    return auxArray

}

console.log(picante([9, 8, 4, 5, 6, 7, 1, 9]));

export { picante }
