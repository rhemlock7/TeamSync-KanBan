import {useQuery} from "@apollo/client";
import ProjectContainer from "../components/ProjectContainer";
import ProjectSideNav from "../components/ProjectSideNav";
import Auth from "../utils/auth";
import {GET_USER, QUERY_ONE_PROJECT} from "../utils/queries";

function Home() {
  //   if (!Auth.loggedIn()) {
  //     window.location.assign("/");
  //   }
  //   const {loading, data} = useQuery(GET_USER, {
  //     variables: {userId: Auth.getProfile().authenticatedPerson._id},
  //   });
  //   const datanew = user.data;
  //   const loadingnew = user.loading;
  //   if (loadingnew) {
  //     return <div>Loading...</div>;
  //   }

  //   const {loading, data} = useQuery(QUERY_ONE_PROJECT, {
  //     variables: {projectId: datanew.user.projects[0]._id},
  //   });

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  if (true) {
    return <div>No projects yet, Add new project</div>;
  }

  return (
    <div className="grid-container h-screen">
      <div className="project-nav darkGray-bg text-white">
        <ProjectSideNav />
      </div>
      <div className="grid-outlet">
        <div className="gradient-bg px-5 h-screen">
          {loading ? (
            "loading"
          ) : (
            <ProjectContainer
              data={data.user.projects[0]}
              projectId={data.user.projects[0]._id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
