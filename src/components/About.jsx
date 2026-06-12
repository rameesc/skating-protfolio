import speed from '../../public/img/me.jpeg';
function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src={speed}
              alt="Skater"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-red-600 font-semibold uppercase tracking-wider">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Passion for Skating, Dedication to Excellence
            </h2>

            <p className="text-gray-600 leading-8 mb-4">
              My name is Muhammed Ramees , a professional roller skater and coach
              with over 10 years of experience in competitive skating and
              athlete development. What started as a childhood hobby quickly
              became a lifelong passion that shaped my career and personal
              growth.
            </p>

            <p className="text-gray-600 leading-8 mb-4">
              Throughout my journey, I have participated in numerous regional,
            competitions, earning multiple medals and
              recognition for my performance, discipline, and sportsmanship.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              Today, I focus not only on competing but also on mentoring the
              next generation of skaters. My coaching philosophy emphasizes
              technique, confidence, consistency, and mental strength, helping
              athletes achieve their full potential both on and off the track.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  10+
                </h3>
                <p className="text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  15+
                </h3>
                <p className="text-gray-600">
                  Championships
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  500+
                </h3>
                <p className="text-gray-600">
                  Students Trained
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  10+
                </h3>
                <p className="text-gray-600">
                  Awards Won
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
