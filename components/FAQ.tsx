const faqs = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is an AI-powered social media platform where creators, developers, and communities connect together.",
    },
    {
      question: "Is NOVA free?",
      answer:
        "Yes. You can start with a free account and upgrade anytime.",
    },
    {
      question: "Can I create my own community?",
      answer:
        "Absolutely! Anyone can create and manage unlimited communities.",
    },
    {
      question: "Does NOVA use AI?",
      answer:
        "Yes. AI helps with recommendations, content creation, moderation, and search.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section className="py-28 px-6 bg-[#090d18]">
  
        <div className="max-w-5xl mx-auto">
  
          <h2 className="text-5xl font-black text-center">
            Frequently Asked Questions
          </h2>
  
          <p className="text-center text-gray-400 mt-6">
            Everything you need to know about NOVA.
          </p>
  
          <div className="mt-16 space-y-6">
  
            {faqs.map((faq, index) => (
  
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
  
                <h3 className="text-2xl font-bold text-cyan-400">
                  {faq.question}
                </h3>
  
                <p className="text-gray-300 mt-4 leading-8">
                  {faq.answer}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }