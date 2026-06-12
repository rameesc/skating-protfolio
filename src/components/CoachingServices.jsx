import { useRoutes,useNavigate, Link } from "react-router-dom";



const services = [
  {
    title: "Beginner Training",
    description:
      "Learn skating fundamentals including balance, posture, stopping techniques, and basic movement.",
  },
  {
    title: "Speed Skating Training",
    description:
      "Develop speed, endurance, racing techniques, cornering skills, and competitive strategies.",
  },
  {
    title: "Advanced Coaching",
    description:
      "Personalized training for athletes preparing for district, state, and national competitions.",
  },
  {
    title: "Private Sessions",
    description:
      "One-on-one coaching focused on individual goals and performance improvement.",
  },
  {
    title: "Group Classes",
    description:
      "Interactive training sessions for schools, skating clubs, and groups of all ages.",
  },
  {
    title: "Competition Preparation",
    description:
      "Race preparation, fitness training, mental conditioning, and performance analysis.",
  },
];
export default function CoachingServices() {

  
  

  
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold text-2xl uppercase">
            Coaching Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional Speed Skating Coaching
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Helping skaters of all levels improve their skills,
            confidence, and performance through structured training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Skating Journey?
          </h3>

          <p className="text-gray-600 mb-6">
            Join professional coaching sessions and take your
            skating skills to the next level.
          </p>

          <button className=" ">
          
                    <a
                       href="https://wa.me/918137911612"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                    >
                       Contact on WhatsApp
                    </a>
          </button>
        </div>
      </div>
    </section>
  );
}
