import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
import Srishti from "../assets/Srishti.jpg";
import Nayana from "../assets/Nayana.jpg";
import Saanch from "../assets/Saanch.jpg";

const TeamSection = () => {
  return (
    <section className="bg-white mt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Our Team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            Meet the minds behind the mission – dedicated to building a smarter disaster response system.
          </p>
        </div>

        {/* Team Cards */}
        <div className="space-y-10">
          {/* Template */}
          {[{
            name: "Nayana Singh",
            role: "Frontend Developer",
            image: Nayana,
            email: "nayana@example.com",
            comment: "Always ensured the platform was both functional and visually engaging for all users.",
            description: "Developed a clean and responsive frontend experience with animated visualizations for disaster data."
          }, {
            name: "Srishti Sonam",
            role: "Backend & Machine Learning",
            image: Srishti,
            email: "srishti@example.com",
            comment: "Ensured the ML pipelines and data infrastructure were efficient and privacy-preserving.",
            description: "Architected REST APIs and integrated ML models for real-time disaster predictions using FastAPI and federated learning."
          }, {
            name: "Saanch Sapra",
            role: "Backend & Data Science",
            image: Saanch,
            email: "saanch@example.com",
            comment: "Played a key role in transforming raw data into actionable insights for predictive models.",
            description: "Handled data ingestion, cleaning, and visualization logic while assisting in optimizing backend performance."
          }].map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg h-auto md:h-[22rem] p-4">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-[18rem] h-[18rem] object-cover border-4 border-gray-200"
              />
              <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <span className="text-gray-500 block mb-2">{member.role}</span>
                <p className="text-gray-600 font-light">{member.description}</p>
                <p className="text-sm text-gray-500 italic mt-1">“{member.comment}”</p>
                <div className="flex justify-center md:justify-start gap-4 mt-3 text-gray-600 text-xl">
                  <a href="#"><FaGithub /></a>
                  <a href="#"><FaLinkedin /></a>
                  <a href={`mailto:${member.email}`}><FaEnvelope /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
