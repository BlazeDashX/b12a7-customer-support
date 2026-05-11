import Navbar from "./components/Navbar";
import "./App.css";
import { Suspense } from "react";
import Hero from "./components/Hero";
import TicketCards from "./components/TicketCards";
import TaskCard from "./components/TaskCard";
import ResolveTask from "./components/ResolveTask";

const fetchTickets = async () => {
  const res = await fetch("./tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto ">
        <Hero></Hero>
        <div className="grid grid-cols-9 gap-8 mt-15">
          <div className="col-span-7">
            <h2 className="font-semibold text-2xl mb-5">Customer Tickets</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <TicketCards ticketsPromise={ticketsPromise}></TicketCards>
            </Suspense>
          </div>
          <div className="col-span-2 border border-blue-500">
            <TaskCard></TaskCard>
            <ResolveTask></ResolveTask>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
