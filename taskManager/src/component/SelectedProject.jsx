import Tasks from "./Tasks";

export default function SelectedProject({project, onDelete}){
    if (!project) {
        return <div className="w-[35rem] mt-16">No project selected</div>;
    }

    const formattedDate = project.dueDate
      ? new Date(project.dueDate).toLocaleDateString('en-US',{
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      : "No due date";

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-stone-700 mb-4">{project.title}</h2>
                <button className="text-stone-700 hover:text-red-500" onClick={onDelete}>Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks />
    </div>
}