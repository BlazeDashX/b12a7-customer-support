const ResolvedTask = ({resolvedTask}) => {
  return (
    <div>
      {resolvedTask.length> 0 ? (
        resolvedTask?.map((task, index) => (
          <div key={index} className="p-4 mb-4 bg-[#e1e6ff] rounded shadow-lg">
            <p className="pb-2 font-semibold">{task.title || task.name || `Task ${index + 1}`}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No resolved tasks yet. </p>
      )}
    </div>
  );
};

export default ResolvedTask;
