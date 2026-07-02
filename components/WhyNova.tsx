const features = [
    {
      icon: "🤖",
      title: "AI Powered",
      desc: "Smart AI helps you write posts, generate ideas and discover content."
    },
    {
      icon: "🌍",
      title: "Global Communities",
      desc: "Join millions of creators and developers from around the world."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Built with modern technology for maximum speed and performance."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      desc: "Your data is protected with enterprise-level security."
    },
    {
      icon: "🎥",
      title: "Short Videos",
      desc: "Upload and watch engaging vertical videos with smooth playback."
    },
    {
      icon: "💬",
      title: "Real-time Chat",
      desc: "Talk instantly with friends and communities."
    },
  ];
  
  export default function WhyNova() {
    return (
      <section className="py-32 px-8">
  
        <div className="max-w-7xl mx-auto">
  
          <h2 className="text-5xl font-black text-center">
            Why Choose
            <span className="text-cyan-400"> NOVA</span>
          </h2>
  
          <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
            Everything you need in one powerful platform.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
  
            {features.map((item, index) => (
  
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-2 transition duration-300"
              >
  
                <div className="text-5xl">
                  {item.icon}
                </div>
  
                <h3 className="text-3xl font-bold mt-6">
                  {item.title}
                </h3>
  
                <p className="text-gray-400 mt-5 leading-8">
                  {item.desc}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }