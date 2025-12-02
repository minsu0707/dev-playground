export const HomePage = () => {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 p-6 pt-24">
      <section className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-6xl font-extrabold text-gray-900 md:text-7xl">
          Minsu's{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Dev
          </span>{" "}
          Playground
        </h1>
        <p className="mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
          A personal space for building toy projects and experimenting with new
          ideas.
          <br />
          Sharpening my skills, one project at a time.
        </p>
        <button className="group relative transform overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-2xl">
          <a href="/projects">
            <span className="relative z-10">Explore Projects</span>
          </a>
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
      </section>

      <section className="mb-20 grid w-full max-w-6xl gap-8 md:grid-cols-2">
        <div className="group transform rounded-2xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <svg
                className="h-10 w-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
            What I Learn
          </h2>
          <p className="text-center leading-relaxed text-gray-600">
            Exploring modern web technologies and design patterns through
            hands-on practice. Each project is a learning opportunity to master
            new tools and techniques.
          </p>
        </div>

        <div className="group transform rounded-2xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
            My Projects
          </h2>
          <p className="text-center leading-relaxed text-gray-600">
            A collection of experimental projects where I test ideas and build
            practical solutions. From simple utilities to complex applications,
            each one teaches something new.
          </p>
        </div>
      </section>

      <section className="mb-20 w-full max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Development Focus
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 text-4xl">⚡</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Performance
            </h3>
            <p className="text-gray-600">
              Building fast, optimized applications
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 text-4xl">🎨</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Design</h3>
            <p className="text-gray-600">Creating beautiful user interfaces</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Innovation</h3>
            <p className="text-gray-600">Experimenting with new technologies</p>
          </div>
        </div>
      </section>
    </main>
  );
};
