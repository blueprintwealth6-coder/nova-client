export default function VideoFeed() {
    const videos = [
      {
        title: "AI Robot",
        views: "1.2M",
        color: "from-cyan-500 to-blue-600",
      },
      {
        title: "Travel Vlog",
        views: "985K",
        color: "from-pink-500 to-purple-600",
      },
      {
        title: "Gaming Live",
        views: "2.5M",
        color: "from-green-500 to-emerald-600",
      },
      {
        title: "Coding Tips",
        views: "780K",
        color: "from-orange-500 to-red-500",
      },
    ];
  
    return (
      <section className="py-24 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-8">
  
          <h2 className="text-5xl font-bold text-center mb-16">
            🎥 Trending Videos
          </h2>
  
          <div className="grid md:grid-cols-4 gap-8">
  
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden bg-[#111827] hover:scale-105 transition duration-300"
              >
  
                <div
                  className={`h-72 bg-gradient-to-b ${video.color} flex items-center justify-center text-6xl`}
                >
                  ▶️
                </div>
  
                <div className="p-6">
  
                  <h3 className="text-2xl font-bold">
                    {video.title}
                  </h3>
  
                  <p className="text-gray-400 mt-3">
                    👀 {video.views} Views
                  </p>
  
                  <button className="mt-6 w-full bg-cyan-500 py-3 rounded-xl hover:bg-cyan-400">
                    Watch Now
                  </button>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }