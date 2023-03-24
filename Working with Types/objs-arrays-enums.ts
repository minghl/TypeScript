// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string];
// } = {
//     name: 'Maximilian',
//     age:30,
//     hobbies:['Sports','Cooking'],
//     role:[2,'author']
// };

enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person = {
    name: 'Maximilian',
    age:30,
    hobbies:['Sports','Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;



let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());   
    // console.log(hobby.map()); Error
}

if (person.role === Role.AUTHOR){
    console.log('is author');
    
}