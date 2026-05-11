import { use } from "react";
import TicketCard from "./TicketCard";

const TicketCards = ({ticketsPromise}) => {
  const ticketData = use(ticketsPromise);
  
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-6 gap-5">
        {
          ticketData.map((ticket) => 
          <TicketCard 
          key={ticket.id} 
          ticket={ticket}>

          </TicketCard>)
        }
      </div>
    </div>
  );
};

export default TicketCards;
