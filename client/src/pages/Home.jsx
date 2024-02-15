import { useQuery } from "@apollo/client";
import { useState } from "react";
import ProjectContainer from "../components/ProjectContainer";
import ProjectSideNav from "../components/ProjectSideNav";
import { Drawer } from "antd";
import Auth from "../utils/auth";

import { GET_USER } from "../utils/queries";

function Home() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [activeProject, setActiveProject] = useState("");

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const { loading, data } = useQuery(GET_USER, {
        variables: { userId: Auth.getProfile().authenticatedPerson._id },
    });

    if (loading) {
        return <div>Loading...</div>;
    }
    function setProject(id) {
        setActiveProject(id);
    }

  if (data.user.projects.length < 1) {
    return (
      <div className="">
        <div className="darkGray-bg text-white">
          <Drawer
            title="Projects"
            placement="left"
            closeable="false"
            onClose={onClose}
            open={openDrawer}
          >
            <ProjectSideNav projects={data.user} setProject={setProject} />
          </Drawer>
        </div>
        <div className="">
          <div className="gradient-bg px-5 h-screen">
            <button
              onClick={showDrawer}
              className="button-cta border-none text-white drop-shadow-xl"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:px-10 gradient-bg h-screen">
      <div className="darkGray-bg text-white">
        <Drawer
          title="Projects"
          placement="left"
          closeable="false"
          onClose={onClose}
          open={openDrawer}
        >
          <ProjectSideNav projects={data.user} setProject={setProject} />
        </Drawer>
      </div>
      <div className="">
        <div className="px-5">
          <button
            onClick={showDrawer}
            className="button-cta border-none text-white drop-shadow-xl mt-5"
          >
            Projects
          </button>
          {activeProject ? (
            <ProjectContainer projectId={activeProject} />
          ) : (
            <ProjectContainer projectId={data.user.projects[0]._id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
