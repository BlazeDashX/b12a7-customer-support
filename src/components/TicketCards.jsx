import TicketCard from "./TicketCard";

const TicketCards = ({tasks, taskInProgress, setTaskInProgress, handleAddTask}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          tasks?.map((ticket) => 
          <TicketCard 
          key={ticket.id} 
          ticket={ticket}
          taskInProgress={taskInProgress}
          setTaskInProgress={setTaskInProgress}
          handleAddTask={handleAddTask}
          >
          </TicketCard>)
        }
      </div>
    </div>
  );
};

export default TicketCards;
