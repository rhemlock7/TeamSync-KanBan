import List from './List'


function ProjectContainer({setCardModal}) {

    // if (!projects.length) {
    //     return <h3>No projects yet...</h3>
    // }

    // const lists = projects.lists

    return (
        <div>
            <div>
                <h1>title</h1>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-x-3">
                {/* {lists && 
                    lists.map((list) => (
                        <List list={list} key={list._id} />
                    ))} */}
                    <List setCardModal={setCardModal}/>
                    <List />
                <div>
                    <button className='new-list-bttn'>Create a new list</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
