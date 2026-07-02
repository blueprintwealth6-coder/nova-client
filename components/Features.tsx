const features = [
    {
      title: "AI Assistant",
      desc: "Create content, get ideas, and discover communities with AI.",
      icon: "🤖",
    },
    {
      title: "Communities",
      desc: "Build or join communities from around the world.",
      icon: "👥",
    },
    {
      title: "Short Videos",
      desc: "Upload high-quality videos and reach global audiences.",
      icon: "🎥",
    },
    {
      title: "Live Chat",
      desc: "Private messaging and real-time conversations.",
      icon: "💬",
    },
    {
      title: "Smart Search",
      desc: "Search people, posts, videos and communities instantly.",
      icon: "🔍",
    },
    {
      title: "Global Reach",
      desc: "Designed for creators and users across the world.",
      icon: "🌍",
    },
  ];
  
  export default function Features() {
    return (
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
  
          <h2 className="text-5xl font-black text-center">
            Everything You Need
          </h2>
  
          <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
            Nova combines AI, creators, communities and social networking into one modern platform.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
  
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl">{item.icon}</div>
  
                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>
  
                <p className="text-gray-400 mt-4 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }