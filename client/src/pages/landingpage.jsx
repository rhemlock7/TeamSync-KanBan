import React from "react";
import Testimonials from "../components/testimonial";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center gradient-background h-screen text-white overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <img
            className="main-logo"
            src="src/assets/teamsync.png"
            alt="TeamSync logo"
          />
          <p className="text-lg text-gray-300 mt-8 text-white">
            Sync with Team Sync, Project Mangement made simple.
          </p>
          <Link
            to="/signup"
            className="mt-8 btn text-gray-300 hover:bg-white hover:text-white py-3 px-6 rounded-full text-lg font-bold  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join <span className=" font-bold text-teal-600">Team Sync</span>{" "}
              Today!
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Explore the world and and make amazing memories with friends!
            </p>
          </div>
        </div>

        <div className="mt-10 pb-1">
        <div className="mt-10 pb-1">
  <div className="relative">
    <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
    <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
          <div className="flex flex-col border-b border-gray-100 text-center sm:border-0 sm:border-r px-8 py-6 shadow-xl">
            <dt className="mt-2 text-lg leading-6 font-medium text-gray-600">
              Happy Travelers
            </dt>
            <dd className="text-5xl font-extrabold text-gray-900">
              10K+
            </dd>
          </div>
          <div className="flex flex-col border-t border-b border-gray-100 text-center sm:border-0 sm:border-l sm:border-r px-8 py-6 shadow-xl">
            <dt className="mt-2 text-lg leading-6 font-medium text-gray-600">
              Adventurous Destinations
            </dt>
            <dd className="text-5xl font-extrabold text-gray-900">
              500+
            </dd>
          </div>
          <div className="flex flex-col border-t border-gray-100 text-center sm:border-0 sm:border-l px-8 py-6 shadow-xl">
            <dt className="mt-2 text-lg leading-6 font-medium text-gray-600">
              Memorable Moments
            </dt>
            <dd className="text-5xl font-extrabold text-gray-900">
              1M+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>

</div>

      </div>

      <section
        id="testimonials"
        aria-label="See What Our Adventurers Have to Say"
        className="bg-slate-50 py-20 sm:pt-32"
      >
        <Testimonials/>
      </section>
    </div>
  );
}

export default LandingPage;
