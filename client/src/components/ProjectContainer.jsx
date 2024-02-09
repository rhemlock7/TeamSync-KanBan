import CardPreview from './CardPreview'

function ProjectContainer() {
    return (
        <div className="grid grid-flow-col auto-cols-max gap-x-3">
            <div className="text-white black-bg px-3 w-72">
                <h3>List Name</h3>
                <CardPreview />
                <CardPreview />
                <CardPreview />
                <CardPreview />
                <CardPreview />
            </div>
            <div className="text-white black-bg px-3 w-72">
                <h3>List Name</h3>
            </div>
            <div className="text-white black-bg px-3 w-72">
                <h3>List Name</h3>
            </div>
        </div>
    )
}

export default ProjectContainer
