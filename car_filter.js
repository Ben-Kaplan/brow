// Using filter and map, return an array of famous people that 
// own a car that was built in 1997 with a top speed between 160-170

// Example output format
// ​​​​​[ 'C.J. Wilson',​​​​​
// ​​​​​  'Bill Gates',​​​​​
// ​​​​​  'Jay Leno',​​​​​
// ​​​​​  'Deadmau5',​​​​​
// ​​​​​  'Paul Bailey' ]​​​​​


let carArray = [
    {
        make: 'Ford',
        model: 'GT',
        year: 1997,
        price: '$220,000',
        horsePower: 475,
        topSpeed: 170,
        famousOwners: ['Deadmau5', 'C.J. Wilson']
    },
    {
        make: 'Acura',
        model: 'NSX',
        year: 1997,
        price: '$121,000',
        horsePower: 523,
        topSpeed: 165,
        famousOwners: ['John Delorean', 'Bill Gates', 'Elton John']
    },
    {
        make: 'Nissan',
        model: 'GT-R',
        year: 2007,
        price: '$95,000',
        horsePower: 515,
        topSpeed: 165,
        famousOwners: ['James May', 'Jay Leno']
    },
    {
        make: 'Aston Martin',
        model: 'Vulcan',
        year: 2018,
        price: '$2,300,000',
        horsePower: 820,
        topSpeed: 220,
        famousOwners: ['John Mayer']
    },
    {
        make: 'Porsche',
        model: '918 Spyder',
        year: 1997,
        price: '$845,000',
        horsePower: 600,
        topSpeed: 200,
        famousOwners: ['Paul Bailey', 'Jerry Seinfeld']
    },
    {
        make: 'Lamborghini',
        model: 'Aventador',
        year: 2014,
        price: '$517,000',
        horsePower: 695,
        topSpeed: 192,
        famousOwners: ['Kanye West', 'Kim Kardashian']
    }
]

let filteredArray = carArray.filter(val => {
    if (val.year === 1997) {
        return val
    }
})

let secondFilteredArray = filteredArray.filter(val => {
    if (val.topSpeed >= 160 && val.topSpeed <= 170) {
        return val;
    }
})

let specificFamousOwners = secondFilteredArray.map((val,i,arr) => {
    return val.famousOwners;
})

console.log(specificFamousOwners);


