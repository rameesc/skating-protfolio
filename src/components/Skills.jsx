const skills = [
  "Speed Skating",
  "Skateboarding",
  "Aggressive Skating",
  "free skating",
  "Competition Coaching",
  "Fitness Training",
];

function Skills() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-black text-white rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;