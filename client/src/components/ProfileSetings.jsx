import {useState} from "react";
export default function ProfileSetting() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [change, setChange] = useState(false);

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
    // console.log(username);
  }
  function handleEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
    // console.log(email);
  }
  function handleGitHub(e) {
    e.preventDefault();
    setGitHub(e.target.value);
    // console.log(gitHub);
  }
  function handleLinkedIn(e) {
    e.preventDefault();
    setLinkedIn(e.target.value);
    // console.log(linkedIn);
  }
  function handleImgUrl(e) {
    e.preventDefault();
    setImgUrl(e.target.value);
    // console.log(linkedIn);
  }

  function handleChange() {
    setChange(!change);
    console.log(change);
  }

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Public Profile
            </h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Bordered avatar"
                />

                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    onClick={handleChange}
                  >
                    {change ? "Close form" : "Change picture"}
                  </button>
                  {change ? (
                    <form>
                      <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
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
                    </form>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                      Your username
                    </label>
                    <input
                      type="username"
                      id="username"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="Your username"
                      value={username}
                      onChange={handleUsername}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your email@mail.com"
                    required
                    value={email}
                    onChange={handleEmail}
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                    GitHub:
                  </label>
                  <input
                    type="text"
                    id="gutHub"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your GitHub link"
                    required
                    value={gitHub}
                    onChange={handleGitHub}
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    id="linkedIn"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your LinkedIn link"
                    required
                    value={linkedIn}
                    onChange={handleLinkedIn}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
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
