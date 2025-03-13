"use strict";
var CustomerRole;
(function (CustomerRole) {
    CustomerRole["Admin"] = "ADMIN";
    CustomerRole["Attendee"] = "ATTENDEE";
    CustomerRole["Guest"] = "GUEST";
})(CustomerRole || (CustomerRole = {}));
var TicketType;
(function (TicketType) {
    TicketType["VIP"] = "VIP";
    TicketType["GeneralAdmission"] = "GENERAL_ADMISSION";
    TicketType["EarlyBird"] = "EARLY_BIRD";
})(TicketType || (TicketType = {}));
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["Available"] = "AVAILABLE";
    TicketStatus["Sold"] = "SOLD";
    TicketStatus["Cancelled"] = "CANCELLED";
})(TicketStatus || (TicketStatus = {}));
const customers = [
    { id: 1, name: "Alice", email: "alice@example.com", role: CustomerRole.Attendee },
    { id: 2, name: "Bob", email: "bob@example.com", role: CustomerRole.Admin },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: CustomerRole.Guest }
];
const tickets = [
    { id: 101, eventName: "Rock Concert", customerId: 1, type: TicketType.VIP, status: TicketStatus.Sold, price: 100 },
    { id: 102, eventName: "Rock Concert", customerId: 2, type: TicketType.GeneralAdmission, status: TicketStatus.Available, price: 50 },
    { id: 103, eventName: "Rock Concert", customerId: 3, type: TicketType.EarlyBird, status: TicketStatus.Sold, price: 75 }
];
const eventDetails = {
    eventId: 5001,
    eventName: "Rock Concert",
    date: "2025-05-01",
    location: "Stadium Arena",
    tickets: tickets,
    customers: customers
};
function displayTicketSales(event) {
    console.log(`Event: ${event.eventName} at ${event.location}`);
    console.log(`Date: ${event.date}`);
    event.tickets.forEach(ticket => {
        const customer = event.customers.find(c => c.id === ticket.customerId);
        console.log(`Ticket for ${customer === null || customer === void 0 ? void 0 : customer.name}: ${ticket.type} - ${ticket.status} - $${ticket.price}`);
    });
}
displayTicketSales(eventDetails);
