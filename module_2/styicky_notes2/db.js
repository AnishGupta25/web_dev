let myDB = window.localStorage;

let ticketsContainer = document.querySelector(".tickets-container");
let allFilterClasses = ["yellow" , "green" , "voilet"];

function loadTickets() {
    let allTickets = myDB.getItem("allTickets");
    if(allTickets) {
      allTickets = JSON.parse(allTickets);
      for (let i = 0; i < allTickets.length; i++) {
        let ticketInfoObject = allTickets[i];
        appendTicket(ticketInfoObject);
      }
    }
  }
  loadTickets();

  