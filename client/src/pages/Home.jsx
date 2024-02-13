import {useQuery} from "@apollo/client";
import ProjectContainer from "../components/ProjectContainer";
import ProjectSideNav from "../components/ProjectSideNav";

import {QUERY_ONE_PROJECT} from "../utils/queries";

function Home() {
  const {loading, data} = useQuery(QUERY_ONE_PROJECT, {
    variables: {projectId: "65cbb0a0631cc7da51003c33"},
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-container h-screen">
      <div className="project-nav darkGray-bg text-white">
        <ProjectSideNav />
      </div>
      <div className="grid-outlet">
        <div className="gradient-bg px-5 h-screen">
          <ProjectContainer data={data} projectId={data.projectId._id} />
        </div>
      </div>
    </div>
  );
}

export default Home;
