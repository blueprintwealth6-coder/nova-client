export default function CreatorCards() {
    const creators = [
      {
        name: "Alex Morgan",
        username: "@alex",
        followers: "2.5M",
        avatar: "🧑‍💻",
      },
      {
        name: "Sophia Lee",
        username: "@sophia",
        followers: "1.8M",
        avatar: "👩‍🚀",
      },
      {
        name: "David Kim",
        username: "@david",
        followers: "3.1M",
        avatar: "🎮",
      },
      {
        name: "Emma Wilson",
        username: "@emma",
        followers: "2.2M",
        avatar: "🎨",
      },
    ];
  
    return (
      <section className="py-24 bg-[#0B1020]">
        <div className="max-w-7xl mx-auto px-8">
  
          <h2 className="text-5xl font-bold text-center mb-16">
            ⭐ Top Creators
          </h2>
  
          <div className="grid md:grid-cols-4 gap-8">
  
            {creators.map((creator, index) => (
  
              <div
                key={index}
                className="bg-[#151D33] rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
              >
  
                <div className="text-7xl">
                  {creator.avatar}
                </div>
  
                <h3 className="text-2xl font-bold mt-5">
                  {creator.name}
                </h3>
  
                <p className="text-cyan-400 mt-2">
                  {creator.username}
                </p>
  
                <p className="text-gray-400 mt-3">
                  👥 {creator.followers} Followers
                </p>
  
                <button className="mt-8 w-full bg-cyan-500 py-3 rounded-xl hover:bg-cyan-400 transition">
                  Follow
                </button>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }