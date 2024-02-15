import {Avatar} from "antd";
import {useMutation, useQuery} from "@apollo/client";
import {useState} from "react";
import {ADD_LIST} from "../utils/mutations";
import List from "./List";
import DropDown from "./Dropdown";

import {QUERY_ONE_PROJECT} from "../utils/queries";
function ProjectContainer({projectId}) {
  const [title, setTitle] = useState("");
  const [showInput, setShowInput] = useState(false);

  const [AddList] = useMutation(ADD_LIST, {
    variables: {title: title, projectId: projectId},
    refetchQueries: [QUERY_ONE_PROJECT, "projectId"],
  });
  const {loading, data} = useQuery(QUERY_ONE_PROJECT, {
    variables: {projectId: projectId},
  });
  if (loading) {
    return <div>loading</div>;
  }
  const users = data.projectId.users;
  const lists = data.projectId?.lists || [];

  function handleShowInput() {
    setShowInput(!showInput);
  }

  function handleSetTitle(e) {
    setTitle(e.target.value);
  }

  function handleAddList(e) {
    e.preventDefault();
    AddList();
    setTitle("");
    setShowInput(!showInput);
  }

  return (
    <div className="pb-6 md:pb-0 mb-0">
      <div className="flex flex-col">
        <h1 className="my-5">{data.projectId.title}</h1>
        <div className="flex justify-start items-center mb-5">
          {/* <button onClick={showDrawer} className='button-cta border-none text-white drop-shadow-xl'>Projects</button> */}
          <DropDown projectId={projectId} />
          <div className="ml-2 mt-1">
            <Avatar.Group
              maxCount={2}
              maxStyle={{color: "#f56a00", backgroundColor: "#fde3cf"}}
            >
              {users.map((user) => (
                <Avatar key={user._id} style={{backgroundColor: "#f56a00"}}>
                  {user.username.charAt(0).toUpperCase()}
                </Avatar>
              ))}
            </Avatar.Group>
          </div>
        </div>
      </div>
      <div className="md:overflow-x-auto">
        <div className="grid grid-flow-row lg:grid-flow-col auto-cols-max gap-x-3">
          {lists.map((list) => (
            <List
              title={list.title}
              cards={list}
              key={list._id}
              listId={list._id}
              projectId={projectId}
            />
          ))}
          <div className="flex flex-col">
            <button onClick={handleShowInput} className="new-list-bttn">
              Create a new list
            </button>
            {showInput ? (
              <form onSubmit={handleAddList} className="flex flex-col mt-2">
                <label>What is your List name?</label>
                <input
                  type="text"
                  placeholder="list name"
                  id="list-input"
                  className="p-1"
                  value={title}
                  onChange={handleSetTitle}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
