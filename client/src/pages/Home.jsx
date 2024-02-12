// import { useState } from "react";
import {useQuery} from "@apollo/client";
import ProjectContainer from "../components/ProjectContainer";
// import CardModal from "../components/CardModal";

import {QUERY_ONE_PROJECT} from "../utils/queries";

// const projects = data?.projects || [];
// const {data} = useQuery(QUERY_SINGLE_PROJECT);

// console.log(projects)

function Home() {
  // const [modalOpen, setModalOpen] = useState(false)
  const {loading, data} = useQuery(QUERY_ONE_PROJECT, {
    variables: {projectId: "65ca3d0fe0a69bbcb868de5c"},
  });
  console.log(data);
  return (
    <div className="gradient-bg px-5 h-screen">
      {/* {loading ? (
                <div>Loading...</div>
            ) : (
                <ProjectContainer />
            )} */}
      <ProjectContainer />

      {/* {modalOpen && (
                <CardModal />
            )} */}
      {/* <CardModal /> */}
    </div>
  );
}

export default Home;
