"use strict";
let contactInfo = {
    street: '123 Main St',
    city: 'Somewhere',
    phone: '123-456-7890',
    email: 'someone@example.com'
};
console.log(contactInfo);
let manager = {
    name: 'John Doe',
    id: 1,
    department: 'Marketing'
};
console.log(manager);
const myDog = {
    species: 'Dog',
    breed: 'Labrador'
};
console.log(myDog.breed);
console.log(myDog.species);
const userWithRole = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    contactInfo: [
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            role: 'user',
            contactInfo: []
        }
    ]
};
console.log(userWithRole.contactInfo.map((contact) => contact.role.includes('admin')));
