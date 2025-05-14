import { FaCarAlt, FaIdCard, FaGasPump, FaClock, FaMapMarkedAlt } from 'react-icons/fa';


const faqs = [
  {
    icon: <FaCarAlt className="text-3xl text-green-800" />,
    question: "What types of vehicles do you rent?",
    answer:
      "We offer a range of cars and bikes including SUVs, sedans, and scooters, ideal for city rides and long trips.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaIdCard className="text-3xl text-green-800" />,
    question: "What documents are needed?",
    answer:
      "You’ll need a valid driver’s license and government-issued ID to complete the booking process.",
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-green-800" />,
    question: "Do you provide doorstep delivery?",
    answer:
      "Yes, we deliver and pick up vehicles at your doorstep in selected service areas.",
    color: "from-green-500 to-lime-500",
  },
  {
    icon: <FaGasPump className="text-3xl text-green-800" />,
    question: "Is fuel included?",
    answer:
      "No, fuel charges are not included. Return the vehicle with the same fuel level as at the time of pickup.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <FaClock className="text-3xl text-green-800" />,
    question: "What if I return the vehicle late?",
    answer:
      "Late returns will incur hourly penalties as per our terms. Always try to return on time.",
    color: "from-lime-500 to-green-600",
  },
];


const FAQ = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mt-3">Answers to common queries about our rental services</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-3xl shadow-lg bg-white border-t-8 border-transparent hover:scale-[1.02] transition-transform duration-300`}
          >
            <div
              className={`p-6 rounded-t-3xl bg-gradient-to-br ${faq.color} flex items-center justify-center`}
            >
              {faq.icon}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
