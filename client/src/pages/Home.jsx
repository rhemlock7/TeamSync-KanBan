import { useQuery } from "@apollo/client";
import { useState } from 'react';
import ProjectContainer from "../components/ProjectContainer";
import ProjectSideNav from '../components/ProjectSideNav';
import { Drawer } from 'antd';


import { QUERY_ONE_PROJECT } from "../utils/queries";

function Home() {
    const [openDrawer, setOpenDrawer] = useState(false);
    // const [activeProject, setActiveProject] = useState('')

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const { loading, data } = useQuery(QUERY_ONE_PROJECT, {
        variables: { projectId: "65cce300c2d6f4d99e792d33" },
    });

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className=''>
            <div className='darkGray-bg text-white'>
                <Drawer
                    title='Projects'
                    placement="left"
                    closeable='false'
                    onClose={onClose}
                    open={openDrawer}
                >
                    <ProjectSideNav />
                </Drawer>
            </div>
            <div className=''>
                <div className="gradient-bg px-5 h-screen">
                    <ProjectContainer
                        data={data}
                        projectId={data.projectId._id}
                        showDrawer={showDrawer}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
