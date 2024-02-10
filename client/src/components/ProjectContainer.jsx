import List from './List'

function ProjectContainer() {
    return (
        <div>
            <div>
                <h1>Project Title</h1>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-x-3">
                <List />
                <List />
                <div>
                    <button className='new-list-bttn'>Create a new list...</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
