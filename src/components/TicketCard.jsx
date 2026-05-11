import calendarImg from "../assets/calendar.png";
const TicketCard = ({ ticket }) => {
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#1E293B]">
            {ticket.title}
          </h2>

          <p className="mt-2 max-w-xl text-sm text-gray-500">
            {ticket.description}
          </p>
        </div>

        <div
          className={`${ticket.status === "Open" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap`}
        >
          <span
            className={`${ticket.status === "Open" ? "bg-green-600" : "bg-yellow-600"} h-3 w-3 rounded-full`}
          ></span>
          {ticket.status}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-5">
          <span className="text-gray-500">{ticket.id}</span>

          <span
            className={`${ticket.priority === "High" ? "text-red-500" : ticket.priority === "Medium" ? "text-yellow-500" : "text-green-500"} font-medium uppercase tracking-wide`}
          >
            {ticket.priority}
          </span>
        </div>

        <div className="flex items-center gap-5 text-gray-500">
          <span>{ticket.customer}</span>

          <div className="flex items-center gap-2">
            <img className="w-6" src={calendarImg} alt="" />

            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
