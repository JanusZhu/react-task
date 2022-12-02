import Task from "./Task";
function Overview({ tasks, handleDelete, handleResubmit }) {
  return (
    <ol>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleResubmit={handleResubmit}
          />
        );
      })}
    </ol>
  );
}

export default Overview;
