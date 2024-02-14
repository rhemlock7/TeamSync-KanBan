import React from "react";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Dropdown, message, Space, Tooltip} from "antd";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS, QUERY_ONE_PROJECT} from "../utils/queries";
import {ADD_USER_PROJECT} from "../utils/mutations";

export default function DropDown({projectId}) {
  //   console.log(projectId);
  const [addUserProject] = useMutation(ADD_USER_PROJECT, {
    refetchQueries: [QUERY_ONE_PROJECT, "projectId"],
  });
  const {loading, data} = useQuery(GET_ALL_USERS);
  const items = [];
  if (loading) {
    <div>Loading...</div>;
  } else {
    data.users.forEach((element) =>
      items.push({
        label: element.username,
        key: element._id,
        icon: <UserOutlined />,
      })
    );

    const handleButtonClick = (e) => {
      const found = data.users.find((user) => user._id === e.key);
      message.info(`You added ${found.username} to your project`);
      addUserProject({variables: {projectId: projectId, userId: e.key}});
    };
    const prop = {
      items,
      onClick: handleButtonClick,
    };

    return (
      <Space wrap>
        <Dropdown menu={prop}>
          <Button>
            <Space>
              Add User to Project
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    );
  }
}
