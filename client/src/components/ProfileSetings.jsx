import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {GET_USER} from "../utils/queries";
import {useQuery, useMutation} from "@apollo/client";
import Auth from "../utils/auth";
import {UPDATE_USER} from "../utils/mutations";
export default function ProfileSetting() {
  if (!Auth.loggedIn()) {
    window.location.assign("/");
  }

  const {profileId} = useParams();
  const {loading, data} = useQuery(GET_USER, {
    variables: {userId: profileId},
  });

  const [updateUser, upUser] = useMutation(UPDATE_USER);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [change, setChange] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }
  function handleEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function handleGitHub(e) {
    e.preventDefault();
    setGitHub(e.target.value);
  }
  function handleLinkedIn(e) {
    e.preventDefault();
    setLinkedIn(e.target.value);
  }
  function handleImgUrl(e) {
    e.preventDefault();
    setImgUrl(e.target.value);
    console.log(imgUrl);
  }

  function handleChange() {
    setChange(!change);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const user1 = await updateUser({
        variables: {
          userId: profileId,
          username,
          email,
          gitHub,
          img: imgUrl,
          linkedIn,
        },
      });
      console.log(user1);
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (Auth.getProfile().authenticatedPerson._id !== profileId) {
    return <div>Wrong Profile</div>;
  }
  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">My Profile</h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-teal-800 dark:ring-blue-900"
                  src={data.user.img}
                  alt="Bordered avatar"
                />

                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none gradient-background rounded-lg border border-gray-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    onClick={handleChange}
                  >
                    {change ? "Close form" : "Change picture"}
                  </button>
                  {change ? (
                    <form>
                      <label className="block mb-2 text-sm font-medium text-indigo-900 ">
                        Your Image URL
                      </label>
                      <input
                        type="url"
                        id="image"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your Image URL"
                        value={imgUrl}
                        onChange={handleImgUrl}
                        required
                      />
                      <button
                        type="submit"
                        className="text-white gradient-background hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        onClick={handleFormSubmit}
                      >
                        Save
                      </button>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-indigo-900 ">
                      Your username
                    </label>
                    <input
                      type="username"
                      id="username"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="Your username"
                      value={username ? username : data.user.username}
                      onChange={handleUsername}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 ">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your email@mail.com"
                    required
                    value={email ? email : data.user.email}
                    onChange={handleEmail}
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 ">
                    GitHub:
                  </label>
                  <input
                    type="text"
                    id="gutHub"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your GitHub link"
                    required
                    value={
                      gitHub ? gitHub : data.user.gitHub ? data.user.gitHub : ""
                    }
                    onChange={handleGitHub}
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 ">
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    id="linkedIn"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your LinkedIn link"
                    required
                    value={
                      linkedIn
                        ? linkedIn
                        : data.user.linkedIn
                        ? data.user.linkedIn
                        : ""
                    }
                    onChange={handleLinkedIn}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white gradient-background  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    onClick={handleFormSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
