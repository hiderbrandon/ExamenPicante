//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
//import { shallow } from 'enzyme'
import { picante } from '../hooks/picante'



describe('testing picante function for splitting correctly a couple arrays', () => {

    test('cas0 1 : [9,8,4,5,6,7,1,9] ', () => {
        // const { getByText } = render(<Contador propNum={0}/>)
        //  expect( getByText('HOLA SOY CONTADOR')).toBeInTheDocument()
        const array1 = [9, 8, 4, 5, 6, 7, 1, 9];
        const splitted = picante(array1)

        expect(splitted).toEqual(["1", "456789", "9"]);


    })

    test('cas0 2 : [1,2,5,8,9]', () => {
        // const { getByText } = render(<Contador propNum={0}/>)
        //  expect( getByText('HOLA SOY CONTADOR')).toBeInTheDocument()
        const array1 = [1, 2, 5, 8, 9];
        const splitted = picante(array1)

        expect(splitted).toEqual(["12", "5", "89"]);


    })

    test('cas0 3 : [7,2,8,3,9,6]', () => {
        // const { getByText } = render(<Contador propNum={0}/>)
        //  expect( getByText('HOLA SOY CONTADOR')).toBeInTheDocument()
        const array1 = [7, 2, 8, 3, 9, 6];
        const splitted = picante(array1)

        expect(splitted).toEqual(["23", "6789"]);


    })

    test('cas0 4 : [1,3,5,7,9]', () => {
        // const { getByText } = render(<Contador propNum={0}/>)
        //  expect( getByText('HOLA SOY CONTADOR')).toBeInTheDocument()
        const array1 = [1, 3, 5, 7, 9]
        const splitted = picante(array1)

        expect(splitted).toEqual(["1", "3", "5", "7", "9"]);


    })

    test('cas0 5 : [1,3,4,5,7,9]', () => {
        // const { getByText } = render(<Contador propNum={0}/>)
        //  expect( getByText('HOLA SOY CONTADOR')).toBeInTheDocument()
        const array1 = [1, 3, 4, 5, 7, 9];
        const splitted = picante(array1);

        expect(splitted).toEqual(["1", "345", "7", "9"]);


    })




})