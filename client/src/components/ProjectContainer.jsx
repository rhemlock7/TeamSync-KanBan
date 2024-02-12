import List from './List'


function ProjectContainer({setCardModal, data}) {

    // if (!data.length) {
    //     return <h3>No projects yet...</h3>
    // }

    const lists = data.projectId.lists

    return (
        <div>
            <div>
                <h1>{data.title}</h1>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-x-3">
                {lists && 
                    lists.map((list) => (
                        <List list={list} key={list._id} setCardModal={setCardModal}/>
                    ))}
                <div>
                    <button className='new-list-bttn'>Create a new list</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
