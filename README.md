## Project Title: AD 311 Technical Interview Prep: Ticketing System Simulation
#### By: Amde Wubshet

### FAQ: 
- Time Complexity: 1(n) (Constant Time). 
- Space Complexity: 1(n) (Constant Space).

#### How does the script work? 
- This script simulates a customer service ticketing system using asynchronous JavaScript. It manages the flow of customers entering a shop, generating unique tickets, and processing them sequentially.
    - Each customer is represented by a Ticket object. 
        - ticketNumber: A unique ID for the customer.
        - timestamp: Automatically captures the exact date and time the ticket was issued. 
    - *customer(num)*is the entry point of the script. It simulates a period of time where customers may or may not enter the store.
        - It runs for a set number of cycles (num).
        - Random Logic: It uses Math.random() to determine if a customer enters (50% chance).
        - Throttling: It uses a delay function to wait 2 seconds between each check, making the console output feel "live."
    - *ticketPhase(num)* When a customer enters, this function instantiates a new Ticket and pushes the ticket number into the ticketQueue array.
    - *processAllTickets()* Once the entry period is over, this function clears the queue:
        - FIFO Logic: It uses .shift() to remove the first (oldest) element from the array. 
        - Asynchronous Processing: It "serves" each customer one by one with a 2-second delay between each.

### Flowchart
![alt text](https://github.com/amdemw206-coder/Ticketing-System-Simulation-AD311/blob/main/screenshots/unnamed.jpg)