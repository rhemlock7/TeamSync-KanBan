import {Avatar} from "antd";
import {useMutation, useQuery} from "@apollo/client";
import {useState} from "react";
import {ADD_LIST} from "../utils/mutations";
import List from "./List";
import Profile from "./Profile";
import {QUERY_ONE_PROJECT} from "../utils/queries";
function ProjectContainer({projectId}) {
  const [title, setTitle] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [avata, setAvata] = useState();
  // console.log(projectId);
  const [AddList] = useMutation(ADD_LIST, {
    variables: {title: title, projectId: projectId},
  });
  const {loading, data} = useQuery(QUERY_ONE_PROJECT, {
    variables: {projectId: projectId},
  });
  if (loading) {
    return <div>loading</div>;
  }
  console.log(data);
  const users = data.projectId.users;
  // console.log('Users', users)
  const lists = data.projectId?.lists || [];

  function handleShowInput() {
    setShowInput(!showInput);
  }

  function handleSetTitle(e) {
    setTitle(e.target.value);
  }

  function avatarHandller(e) {
    e.preventDefault();
    setAvata(<Profile />);
  }

  function deleteAvatar() {
    setAvata();
  }
  return (
    <div>
      <div className="flex flex-col">
        <h1>{data.title}</h1>
        <div className="flex justify-start items-center mb-5">
          <button className="ml-2">Invite Users</button>
          <div className="ml-2 mt-1">
            <Avatar.Group
              maxCount={2}
              maxStyle={{color: "#f56a00", backgroundColor: "#fde3cf"}}
            >
              {users.map((user) => (
                <Avatar
                  key={user._id}
                  src={user.img}
                  onClick={!avata ? avatarHandller : deleteAvatar}
                ></Avatar>
              ))}
              {avata}
            </Avatar.Group>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col auto-cols-max gap-x-3">
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
            <form onSubmit={AddList} className="flex flex-col mt-2">
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
  );
}

export default ProjectContainer;
