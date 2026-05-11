import Navbar from "./components/Navbar";
import { Suspense, useState,useEffect } from "react";
import Hero from "./components/Hero";
import TicketCards from "./components/TicketCards";
import TaskStatusCard from "./components/TaskStatus";
import ResolvedTask from "./components/ResolvedTask";
import "./App.css";

const fetchTickets = async () => {
  const res = await fetch("./tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInProgress, setTaskInProgress] = useState([]);
  // const [resolveTask,setResolveTask] = useState([]);
  // const [resolvedTaskCount,setResolvedTaskCount] = useState(0);

useEffect(() => {
  const loadData = async () => {
    const res = await fetch("./tickets.json");
    const data = await res.json();

    setTasks(data);

    setTaskInProgress(
      data.filter(t => t.status === "In Progress")
    );
  };

  loadData();
}, []);


  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto ">
        <Hero taskInProgress={taskInProgress} ></Hero>
        <div className="grid grid-cols-9 gap-8 mt-15">
          <div className="col-span-7">
            <h2 className="font-semibold text-2xl mb-5">Customer Tickets</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <TicketCards 
              ticketsPromise={ticketsPromise}
               taskInProgress={taskInProgress}
              setTaskInProgress={setTaskInProgress}
              ></TicketCards>
            </Suspense>
          </div>
          <div className="col-span-2 ">
            <div>
              <h2 className="font-semibold text-2xl mb-2"
              >Tasks Status</h2>
              <TaskStatusCard
              taskInProgress={taskInProgress}
              >
              </TaskStatusCard>
            </div>
            <div>
              <h2 className="font-semibold text-2xl mb-5">Resolved Tasks</h2>
            <ResolvedTask
            >
            </ResolvedTask>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
