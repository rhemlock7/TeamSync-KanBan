import {useQuery} from "@apollo/client";
// import { useState } from 'react';
import {Link} from "react-router-dom";
import {QUERY_PROJECTS} from "../utils/queries";

function ProjectSideNav({projects, setProject}) {
  //   console.log(projects);
  return (
    <div className="px-5 pt-4 flex flex-col">
      {projects.projects.map((project) => (
        <Link key={project._id} onClick={() => setProject(project._id)}>
          {project.title}
        </Link>
      ))}
    </div>
  );
}

export default ProjectSideNav;
