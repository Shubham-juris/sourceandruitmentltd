import { useState } from "react";

const faqs = [
  {
    question: "First Question",
    answer: "This is the answer to the first frequently asked question.",
  },
  {
    question: "Second Question",
    answer: "Here's the answer to the second FAQ. It provides more detail.",
  },
  {
    question: "Third Question",
    answer: "The third answer goes here, with any extra info if needed.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-20 py-20">
      <h2 className="text-5xl font-extrabold text-orange-500 text-center my-5">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-2xl text-gray-600 py-12">
        Please contact us if you cannot find an answer to your question.
      </p>

      <div className="space-y-4 py-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-2xl font-normal  text-gray-800">
                {faq.question}
              </span>
              <span
                className={`text-orange-500 text-xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
