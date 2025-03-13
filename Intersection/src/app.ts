//? Example 1
type Address = {
    street: string;
    city: string;
};

type Contact = {
    phone: string;
    email: string;
};

type PersonWithContact = Address & Contact;

let contactInfo: PersonWithContact = {
    street: '123 Main St',
    city: 'Somewhere',
    phone: '123-456-7890',
    email: 'someone@example.com'
};
console.log(contactInfo);

//? Example 2

type Employee = {
    name: string;
    id: number;
};

type Manager = Employee & {
    department: string;
};

let manager: Manager = {
    name: 'John Doe',
    id: 1,
    department: 'Marketing'
};

console.log(manager);

//? Example 3
type Animal = {
    species: string;
};

type Dog = Animal & {
    breed: string;
};

const myDog: Dog = {
    species: 'Dog',
    breed: 'Labrador'
};

console.log(myDog.breed);
console.log(myDog.species);

//? Example 4

type User = {
    id: number;
    name: string;
    email: string;
};

type UserWithRole = User & {
    role: string;
    contactInfo: UserWithRole[];
};

const userWithRole: UserWithRole = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    contactInfo: [
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            role: 'user', // Added role
            contactInfo: [] // Added an empty array to satisfy the type
        }
    ]
};

console.log(userWithRole.contactInfo.map((contact) => contact.role.includes('admin'))); // Now it works fine
