const stats = [
    {
      number: "12M+",
      title: "Active Users",
      icon: "👥",
    },
    {
      number: "180+",
      title: "Countries",
      icon: "🌍",
    },
    {
      number: "50M+",
      title: "AI Requests",
      icon: "🤖",
    },
    {
      number: "1B+",
      title: "Messages",
      icon: "💬",
    },
  ];
  
  export default function LiveStats() {
    return (
      <section className="py-24 px-8">
  
        <div className="max-w-7xl mx-auto">
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {stats.map((item, index) => (
  
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300 hover:-translate-y-2"
              >
  
                <div className="text-5xl">
                  {item.icon}
                </div>
  
                <h2 className="text-5xl font-black mt-6 text-cyan-400">
                  {item.number}
                </h2>
  
                <p className="text-gray-400 mt-3 text-lg">
                  {item.title}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }