import NewTask from "./NewTask";

export default function Tasks(){
    return (<section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <NewTask />
        <p className="tet-stone-800 my-4">
            There is no tasks assigned to this projects yet.
        </p>
        <ul></ul>
    </section>)
}