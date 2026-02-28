// Initializing the ticket queue: 
ticketQueue = []

class Ticket {
  constructor(number) {
    this.ticketNumber = number;
    this.timestamp = new Date(); // Automatically captures the exact time of creation
  }
  }

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function customer(num){ 
   let custEnter = Math.random();
   let ticketcount = 1;
 
   for (let i = 1; i <= num; i++){
    if(custEnter >= 0.5){
        console.log("Customer has entered. Generating Ticket...")
        ticketPhase(ticketcount)
        ticketcount += 1
        console.log(ticketQueue)
        await delay(2000);
    }else{
        console.log("Waiting...")
        await delay(2000);
    }  
    custEnter = Math.random();
   }
  processAllTickets()  
}; 

function ticketPhase(num){
   const myTicket = new Ticket(num)
   ticketQueue.push(myTicket.ticketNumber) 
   console.log(`Ticket #${myTicket.ticketNumber} issued at ${myTicket.timestamp}`); 
}

async function processAllTickets() {
  console.log(`Starting service for ${ticketQueue.length} customers...`);

  while (ticketQueue.length > 0) {
    ticketQueue.shift();
    console.log(ticketQueue)
    await delay(2000); 
  }
  console.log("All customers have been served.");
}

customer(10)
