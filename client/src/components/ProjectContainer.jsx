import List from './List'


function ProjectContainer({ setCardModal, data }) {

    const lists = data.projectId?.lists || []

    return (
        <div>
            <div>
                <h1>{data.projectId.title}</h1>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-x-3">
                {lists.map((list) => (
                    < List 
                        title={list.title} 
                        cards = { list } 
                        key = { list.projectId } 
                        setCardModal = { setCardModal } 
                    />
                    ))}
                <div>
                    <button className='new-list-bttn'>Create a new list</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
