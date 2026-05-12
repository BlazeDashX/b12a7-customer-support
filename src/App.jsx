import Navbar from "./components/Navbar";
import { Suspense, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Hero from "./components/Hero";
import TicketCards from "./components/TicketCards";
import TaskStatusCard from "./components/TaskStatus";
import ResolvedTask from "./components/ResolvedTask";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInProgress, setTaskInProgress] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./tickets.json");
      const data = await res.json();

      setTasks(data);

      setTaskInProgress(data.filter((t) => t.status === "In Progress"));
    };

    loadData();
  }, []);

  const handleCompleteTask = (t) => {
    const updatedInProgress = taskInProgress.filter((task) => task.id !== t.id);

    setTaskInProgress(updatedInProgress);
    setResolvedTask([...resolvedTask, t]);

    const updatedTasks = tasks.filter((task) => task.id !== t.id);

    setTasks(updatedTasks);

    toast.success("Task completed successfully!");
  };

  const handleAddTask = (newTask) => {
    const alreadyExists = taskInProgress.find((task) => task.id === newTask.id);

    if (alreadyExists) {
      toast.warning("Task already in progress!");
      return;
    }

    const updatedTask = {
      ...newTask,
      status: "In Progress",
    };

    setTaskInProgress([...taskInProgress, updatedTask]);

    const updatedTasks = tasks.map((task) =>
      task.id === newTask.id ? { ...task, status: "In Progress" } : task,
    );

    setTasks(updatedTasks);
    toast.info("Task added successfully!");
  };

  return (
    <>
      <Navbar></Navbar>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <Hero taskInProgress={taskInProgress} resolveTask={resolvedTask}></Hero>
<div className="grid grid-cols-1  lg:grid-cols-9 gap-8 mt-15">         
   <div className="lg:col-span-7">
            <h2 className="font-semibold text-xl md:text-2xl mb-5">Customer Tickets</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <TicketCards
                tasks={tasks}
                taskInProgress={taskInProgress}
                setTaskInProgress={setTaskInProgress}
                handleAddTask={handleAddTask}
              ></TicketCards>
            </Suspense>
          </div>
          <div className="lg:col-span-2">
            <div>
              <h2 className="font-semibold text-2xl mb-2">Tasks Status</h2>
              <TaskStatusCard
                taskInProgress={taskInProgress}
                handleCompleteTask={handleCompleteTask}
              ></TaskStatusCard>
            </div>
            <div>
              <h2 className="font-semibold text-2xl mb-2">Resolved Tasks</h2>
              <ResolvedTask resolvedTask={resolvedTask}></ResolvedTask>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
