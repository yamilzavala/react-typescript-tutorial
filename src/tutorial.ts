// Practical Application of Type Annotation
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
let foundBook: string | undefined;
for(let book of books) {
    if(book === '1984') {
        foundBook = book;
        break;
    }
}
console.log('foundBook: ', foundBook)

// Practical Union types
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: number | string = 20;
discount = '20%'

//Challenge arrays
const temperatures: (number | string)[] = [10,10,10]
temperatures.push('20')

//Objects
let car:{brand: string, year: number} = {brand: 'ford', year:2024}
let book = {title: 'some title', year: 2022}
let book2 = {title: 'some title two', year: 2024}
let booksArr: {title: string, year: number}[] = []
booksArr.push(book, book2)
booksArr.push({title: 'some title three', year: 2048})

//functions
/*
- Create a new array of names.
- Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
- Use this function to check if various names are in your array and log the results.
*/
const names: string[] = ['jhon', 'jack', 'marie']
function nameExist(name: string, arr: string[]): boolean {
    return arr.includes(name)
}
console.log(nameExist('clark', names))
console.log(nameExist('jack', names))

//functions parameters
// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
// - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// - If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(value: string | number):string | number {
    return typeof value === 'number' ? value*2 : value.toUpperCase()
}
console.log(processInput(10))
console.log(processInput('cooking'))


//Functions - Using Objects as Function Parameters                     
function processData(input: string | number, config: {reverse: boolean} = {reverse: false}) {
    return typeof input === 'number' ?
                  Math.pow(input, 2) :
                  config.reverse ? 
                        input.split('').reverse().join('').toUpperCase() :
                        input.toUpperCase() 
}

//Type Alias
type TEmployee= {id: number, name: string, department: string};
type TManager = {id: number, name: string, employees: TEmployee[]};
type TStaff = TEmployee | TManager;

function printStaffDetails(person:TStaff) {
    if('employees' in person) {
        console.log(`${person.name} is a Manager of ${person.employees.length} employees`)
    } else {
        console.log(`${person.name} is an Employee of departament ${person.department}`)
    }
}

const alice: TEmployee = {
    id: 1, 
    name:'alice', 
    department: '10'
}

const steve: TEmployee = {
    id: 2, 
    name:'steve', 
    department: '12'
}

const bob: TManager = {
    id: 3, 
    name:'bob', 
    employees: [alice, steve]
}

printStaffDetails(alice)
printStaffDetails(bob)
