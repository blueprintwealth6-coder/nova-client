const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      text: "Nova completely changed the way I connect with my audience. The AI features are incredible.",
    },
    {
      name: "Ahmed Khan",
      role: "Developer",
      text: "The clean UI and smart community system make Nova feel like the future of social media.",
    },
    {
      name: "Emily Chen",
      role: "Designer",
      text: "Beautiful interface, fast performance, and amazing user experience. Love it!",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
  
          <h2 className="text-5xl font-black text-center">
            What People Say
          </h2>
  
          <p className="text-center text-gray-400 mt-6">
            Thousands of creators are already using NOVA.
          </p>
  
          <div className="grid md:grid-cols-3 gap-8 mt-20">
  
            {testimonials.map((item, index) => (
  
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition"
              >
  
                <div className="text-5xl mb-6">
                  ⭐⭐⭐⭐⭐
                </div>
  
                <p className="text-gray-300 leading-8">
                  "{item.text}"
                </p>
  
                <div className="mt-8">
  
                  <h3 className="font-bold text-xl">
                    {item.name}
                  </h3>
  
                  <p className="text-cyan-400">
                    {item.role}
                  </p>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }