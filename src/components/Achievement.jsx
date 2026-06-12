
const achievements = [
  {
    year: "National",
    title: "National Speed Skating Championship",
    description:
      "Participated in the National Speed Skating Championship, representing my region and competing with top skaters from across India.",
  },
  {
    year: "State",
    title: "Kerala Association Championship",
    description:
      "Won 1 medal in the Kerala Association Speed Skating Championship.",
  },
  {
    year: "District",
    title: "Malappuram Association Championship",
    description:
      "Won 15 medals across multiple Speed Skating events organized by the Malappuram Skating Association.",
  },
  {
    year: "School Games",
    title: "State School Games",
    description:
      "Won 1 medal at the State School Level Speed Skating Competition.",
  },
  {
    year: "School Games",
    title: "District School Games",
    description:
      "Won 6 medals in District School Level Speed Skating competitions.",
  },
  {
    year: "School Games",
    title: "Sub-District School Games",
    description:
      "Won 6 medals in Sub-District School Level Speed Skating competitions.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 ">
          <span className="text-red-600 text-2xl  font-bold uppercase tracking-wider">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My Speed Skating Journey
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Through dedication, discipline, and passion for speed skating,
            I have achieved success at Sub-District, District, State,
            Association, and National levels.
          </p>
        </div>

        {/* Stats */}
        {/* <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-red-600">
              29+
            </h3>
            <p className="text-gray-600 mt-2">
              Total Medals
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-red-600">
              6
            </h3>
            <p className="text-gray-600 mt-2">
              Sub-District Medals
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-red-600">
              6
            </h3>
            <p className="text-gray-600 mt-2">
              District Medals
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-4xl font-bold text-red-600">
              National
            </h3>
            <p className="text-gray-600 mt-2">
              Participation
            </p>
          </div>
        </div> */}

        {/* Timeline */}
        <div className="relative border-l-4 border-red-600 ml-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="mb-12 ml-10 relative"
            >
              <div className="absolute -left-[52px] top-1 h-6 w-6 rounded-full bg-red-600"></div>

              <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
                {achievement.year}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {achievement.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-bold mb-4">
            Event Specialization
          </h3>

          <p className="text-gray-600 leading-8">
            My primary event is <strong>Speed Skating</strong>.
            Over the years, I have competed in school games,
            association championships, district-level competitions,
            state-level events, and national championships,
            continuously striving to improve my performance and
            represent my team with pride.
          </p>
        </div>
      </div>
    </section>
  );
}