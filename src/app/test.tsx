import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen">
      <nav className="fixed w-full bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <button
          onClick={toggleSidebar}
          className="text-3xl focus:outline-none md:hidden"
        >
          &#9776; {/* Hamburger icon */}
        </button>
        <div className="hidden md:flex space-x-4">
          <a href="#section1" className="text-blue-500">
            Section 1
          </a>
          <a href="#section2" className="text-blue-500">
            Section 2
          </a>
          <a href="#section3" className="text-blue-500">
            Section 3
          </a>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-3xl p-4 focus:outline-none"
        >
          &times; {/* Close icon */}
        </button>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a
              href="#section1"
              className="text-blue-500"
              onClick={toggleSidebar}
            >
              Section 1
            </a>
          </li>
          <li>
            <a
              href="#section2"
              className="text-blue-500"
              onClick={toggleSidebar}
            >
              Section 2
            </a>
          </li>
          <li>
            <a
              href="#section3"
              className="text-blue-500"
              onClick={toggleSidebar}
            >
              Section 3
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-16">
        {" "}
        {/* This div adds padding to avoid overlap with fixed navbar */}
        <section
          id="section1"
          style={{ height: "100vh", backgroundColor: "#f3f4f6" }}
        >
          <h1>Section 1</h1>
        </section>
        <section
          id="section2"
          style={{ height: "100vh", backgroundColor: "#e5e7eb" }}
        >
          <h1>Section 2</h1>
        </section>
        <section
          id="section3"
          style={{ height: "100vh", backgroundColor: "#d1d5db" }}
        >
          <h1>Section 3</h1>
        </section>
      </div>
    </div>
  );
};

export default App;
