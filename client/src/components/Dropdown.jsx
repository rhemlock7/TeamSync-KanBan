import React from "react";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Dropdown, message, Space, Tooltip} from "antd";
import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../utils/queries";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function DropDown() {
  const {loading, data} = useQuery(GET_ALL_USERS);
  const usersArr = [];
  if (loading) {
    <div>Loading...</div>;
  } else {
    console.log(data);

    // data.users.forEach((element) =>
    //   usersArr.push({
    //     label: element.username,
    //     key: element._id,
    //     // icon: <UserOutlined />,
    //   })
    // );
    const useArr = [
      {
        label: data.users[0].username,
        key: data.users[0]._id,
        icon: <UserOutlined />,
      },
      {
        label: data.users[1].username,
        key: data.users[1]._id,
        icon: <UserOutlined />,
      },
      {
        label: data.users[2].username,
        key: data.users[2]._id,
        icon: <UserOutlined />,
      },
    ];

    const prop = {
      useArr,
      onClick: handleMenuClick,
    };

    console.log(prop);
    return (
      <>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown button{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
