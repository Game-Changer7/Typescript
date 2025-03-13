//? Example 1
enum CustomerRole {
    Admin = "ADMIN",
    Attendee = "ATTENDEE",
    Guest = "GUEST"
}

enum TicketType {
    VIP = "VIP",
    GeneralAdmission = "GENERAL_ADMISSION",
    EarlyBird = "EARLY_BIRD"
}

enum TicketStatus {
    Available = "AVAILABLE",
    Sold = "SOLD",
    Cancelled = "CANCELLED"
}


interface Customer {
    id: number;
    name: string;
    email: string;
    role: CustomerRole;  // Using the CustomerRole enum
}

interface Ticket {
    id: number;
    eventName: string;
    customerId: number;  // Link to the customer who purchased it
    type: TicketType;  // Using the TicketType enum
    status: TicketStatus;  // Using the TicketStatus enum
    price: number;
}

type EventDetails = {
    eventId: number;
    eventName: string;
    date: string;
    location: string;
    tickets: Ticket[];  // List of tickets for the event
    customers: Customer[];  // List of customers who purchased tickets
}

// Example data for customers
const customers: Customer[] = [
    { id: 1, name: "Alice", email: "alice@example.com", role: CustomerRole.Attendee },
    { id: 2, name: "Bob", email: "bob@example.com", role: CustomerRole.Admin },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: CustomerRole.Guest }
];

// Example data for tickets
const tickets: Ticket[] = [
    { id: 101, eventName: "Rock Concert", customerId: 1, type: TicketType.VIP, status: TicketStatus.Sold, price: 100 },
    { id: 102, eventName: "Rock Concert", customerId: 2, type: TicketType.GeneralAdmission, status: TicketStatus.Available, price: 50 },
    { id: 103, eventName: "Rock Concert", customerId: 3, type: TicketType.EarlyBird, status: TicketStatus.Sold, price: 75 }
];

// Event details with customer and ticket data
const eventDetails: EventDetails = {
    eventId: 5001,
    eventName: "Rock Concert",
    date: "2025-05-01",
    location: "Stadium Arena",
    tickets: tickets,
    customers: customers
};

// Function to display ticket sales information
function displayTicketSales(event: EventDetails): void {
    console.log(`Event: ${event.eventName} at ${event.location}`);
    console.log(`Date: ${event.date}`);
    event.tickets.forEach(ticket => {
        const customer = event.customers.find(c => c.id === ticket.customerId);
        console.log(`Ticket for ${customer?.name}: ${ticket.type} - ${ticket.status} - $${ticket.price}`);
    });
}

displayTicketSales(eventDetails);
