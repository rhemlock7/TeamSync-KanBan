import {useQuery} from "@apollo/client";
import {useState} from "react";
import ProjectContainer from "../components/ProjectContainer";
import ProjectSideNav from "../components/ProjectSideNav";
import {Drawer} from "antd";
import Auth from "../utils/auth";

import {GET_USER, QUERY_ONE_PROJECT} from "../utils/queries";

function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  // const [activeProject, setActiveProject] = useState('')

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  // const {loading, data} = useQuery(GET_USER, {
  //   variables: {userId: Auth.getProfile().authenticatedPerson._id},
  // });

  const {loading, data} = useQuery(QUERY_ONE_PROJECT, {
    variables: {projectId: "65cbc6dc8d1a3f185aa77c99"},
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  if (data.user.projects.length < 1) {
    return <div>Add new project</div>;
  }
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
          <ProjectSideNav />
        </Drawer>
      </div>
      <div className="">
        <div className="gradient-bg px-5 h-screen">
          <ProjectContainer
            data={
              data.user.projects[0]
              //   data.projectId
            }
            projectId={
              data.user.projects[0]._id
              //   data.projectId._id
            }
            showDrawer={showDrawer}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
