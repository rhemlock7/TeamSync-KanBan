import React from "react";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Dropdown, message, Space, Tooltip} from "antd";
import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../utils/queries";

export default function DropDown() {
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
    const handleMenuClick = (e) => {
      message.info("Click on menu item.");
      console.log("click", e);
    };
    const prop = {
      items,
      onClick: handleMenuClick,
    };

    return (
      <Space wrap>
        <Dropdown menu={prop}>
          <Button>
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    );
  }
}
