const TaskStatusCard = ({ taskInProgress,handleCompleteTask }) => {
  return (
    <div>
      {taskInProgress.length > 0 ? (
        taskInProgress?.map((task, index) => (
          <div key={index} className="p-4 mb-4 bg-white rounded shadow-lg">
            <p className="pb-2 font-semibold">{task.title || task.name || `Task ${index + 1}`}</p>
            <button onClick={() => handleCompleteTask(task)} className="w-full px-2 py-1 text-white font-semibold rounded bg-green-600 cursor-pointer">Complete</button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Select a ticket to add to tak status</p>
      )}
    </div>
  );
};

export default TaskStatusCard;
