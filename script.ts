console.log('Detta är en Typescript app');

let x = 12; //datatype number

//x = 'Hello';<- inte okej! x får bara vara ett Number

let y: boolean;

// let dataFromApi = "nisse"  // hoppsan! en bug i koden

let dataFromApi = [
	{ name: 'Nisse', loves: 'sågspån' },
	{ name: 'Stina', loves: 'citron' }
];

// Dags att använda datan
dataFromApi.forEach(hamster => {
	console.log('Hamster: ', hamster.name);
});

// Om man använder "any" så har man ingen nytta av TypeScript
let z: any = 1;
z = true;
z = 'hej';
z = {}

let input:string = '123';   // explicit data type
let parsed: number = Number(input);  // explicit data type
let implicit = 15;   // implicit data type

