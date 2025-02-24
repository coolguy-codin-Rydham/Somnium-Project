// creatin a full home page for users to see when they first visit the site
// import hogwartsBackground from "../assets/hogwarts-Background.jpg";

const Homepage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-6 py-10 w-full"
      style={{ backgroundImage: `url("/hogwarts-background.jpg")`}}
    >
      <div className="bg-opacity-60 p-16 rounded-lg text-center w-full max-w-4xl">
        <h1 className="text-7xl font-bold text-yellow-500">Hogwarts</h1>
        <p className="text-xl mt-6">Learn and Grow in a Magical World</p>
      </div>

      <section className="h-screen flex flex-col justify-center w-full bg-gray-800 bg-opacity-75 text-center px-6">
        <h2 className="text-5xl font-bold mb-6">Explore Our Courses</h2>
        <p className="text-xl mb-10">
          Join us and experience a magical learning journey.
        </p>
        <a
          href="/courses" className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group text-black"
          >Explore Courses<svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
      </svg>
          
        </a>
      </section>
      <section className="h-screen flex flex-col justify-center w-full bg-gray-900 text-center px-6">
        <h2 className="text-5xl font-bold mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            "Top-notch Instructors",
            "Interactive Lessons",
            "Certifications",
          ].map((title, index) => (
            <div
            key={index}
            className="w-96 p-10 bg-gray-800 rounded-xl shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                {title}
              </h3>
              <p className="text-lg">
                Experience world-class magical education.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="h-screen flex flex-col justify-center w-full bg-gray-800 bg-opacity-75 text-center px-6">
        <h2 className="text-5xl font-bold mb-8">Our Services</h2>
        <p className="text-xl mb-10">Courses for every level of wizardry.</p>
        <div className="flex flex-wrap justify-center gap-12">
          {["Beginner Courses", "Intermediate Courses", "Advanced Courses"].map(
            (title, index) => (
              <div
              key={index}
              className="w-96 p-10 bg-gray-900 rounded-xl shadow-xl"
              >
                <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                  {title}
                </h3>
                <p className="text-lg">Unlock your magical potential.</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="h-screen flex flex-col justify-center w-full bg-gray-900 text-center px-6">
        <h2 className="text-5xl font-bold mb-8">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            "This platform transformed my learning!",
            "Engaging lessons and amazing instructors!",
            "I got certified and boosted my career!",
          ].map((quote, index) => (
            <div
            key={index}
            className="w-96 p-10 bg-gray-800 rounded-xl shadow-xl"
            >
              <p className="italic text-lg">"{quote}"</p>
              <p className="mt-4 font-bold text-yellow-400">
                - Satisfied Student
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="h-screen flex flex-col justify-center w-full bg-gray-800 bg-opacity-75 text-center px-6">
        <h2 className="text-5xl font-bold mb-8">Join Our Community</h2>
        <p className="text-xl mb-10">
          Subscribe for updates on magical courses.
        </p>
        <form className="flex justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm"
            />
          <button
            type="submit"
            className="bg-yellow-500 text-black px-10 py-4 rounded-r-xl font-semibold text-lg hover:bg-yellow-600 transition"
            >
            Subscribe
          </button>
        </form>
      </section>

      <footer className="py-16 w-full bg-gray-900 text-center px-6">
        <p className="text-lg">
          &copy; 2025 Hogwarts AuthApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
