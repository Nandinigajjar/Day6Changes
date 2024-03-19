// Customer class module
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Invoice class module
class Invoice {
    constructor(number, amount) {
        this.number = number;
        this.amount = amount;
    }
}

// Function to generate invoice
function generateInvoice() {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const invoiceAmount = document.getElementById('invoiceAmount').value;

    const customer = new Customer(customerName, customerEmail);
    const invoice = new Invoice(invoiceNumber, invoiceAmount);

    displayInvoice(customer, invoice);
}

// Function to display invoice details
function displayInvoice(customer, invoice) {
    const invoiceDetails = document.getElementById('invoiceDetails');
    invoiceDetails.innerHTML = `
        <h2>Invoice Details</h2>
        <p><strong>Customer Name:</strong> ${customer.name}</p>
        <p><strong>Customer Email:</strong> ${customer.email}</p>
        <p><strong>Invoice Number:</strong> ${invoice.number}</p>
        <p><strong>Invoice Amount:</strong> $${invoice.amount}</p>
    `;
}

// Event listener for generating invoice
document.getElementById('generateInvoice').addEventListener('click', generateInvoice);
