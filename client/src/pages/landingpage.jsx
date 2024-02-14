import React from 'react';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
      <div>

        <div className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden ">
          <div className="absolute inset-0">
            <img src="https://thumbs.dreamstime.com/b/team-teamwork-goals-strategy-vision-business-support-concept-50274164.jpg" alt="Background Image" className="object-cover object-center h-full w-full md:w-block lg:w-block" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <img className="main-logo" src="src/assets/teamsync.png" alt="TeamSync logo" />
            <p className="text-lg text-gray-300 mt-8 text-white">Sync with Team Sync, Project Mangement made simple.</p>
            <Link to='/signup'className="darkGray-bg text-white hover:bg-gray-500 py-3 px-6 rounded-full text-lg font-bold  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
               Get Started</Link>
          </div>
        </div>
      </div>
  );
}

export default LandingPage;
