// Given an array of car objects (carArray), use map to return 
// the single highest top speed of all the cars as a number

let carArray = [
    {
        make: 'Ford',
        model: 'GT',
        horsePower: 550,
        price: '$550,000',
        topSpeeds: [
            {
                year: 1995,
                topSpeed: 204
            },
            {
                year: 2005,
                topSpeed: 206
            }
        ]
    },
    {
        make: 'Acura',
        model: 'NSX',
        horsePower: 575,
        price: '$157,000',
        topSpeeds: [
            {
                year: 1997,
                topSpeed: 165
            },
            {
                year: 2019,
                topSpeed: 196
            }
        ]
    },
    {
        make: 'Nissan',
        model: 'GT-R',
        horsePower: 600,
        price: '$99,000',
        topSpeeds: [
            {
                year: 2007,
                topSpeed: 165
            },
            {
                year: 2010,
                topSpeed: 172
            }
        ]
    },
    {
        make: 'Aston Martin',
        model: 'Vulcan',
        horsePower: 820,
        price: '$2,300,000',
        topSpeeds: [
            {
                year: 2018,
                topSpeed: 220
            }
        ]
    },
    {
        make: 'Porsche',
        model: '918 Spyder',
        horsePower: 600,
        price: '$845,000',
        topSpeeds: [
            {
                year: 1995,
                topSpeed: 200
            }
        ]
    },
    {
        make: 'Lamborghini',
        model: 'Aventador',
        horsePower: 700,
        price: '$550,000',
        topSpeeds: [
            {
                year: 2014,
                topSpeed: 192
            },
            {
                year: 2016,
                topSpeed: 195
            }
        ]
    }
]




let topSpeedOfAll = carArray.map((car)=>{
    return car.topSpeeds.reduce((speed1, speed2)=>{
        return speed1 > speed2 ? speed1: speed2
    }).topSpeed
}).reduce((speed1, speed2)=>{
    return speed1 > speed2 ? speed1 : speed2
})

console.log(topSpeedOfAll);


