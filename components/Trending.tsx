export default function Trending() {
    const posts = [
      {
        title: "AI is changing everything",
        author: "Nova AI",
        likes: "24K",
      },
      {
        title: "New Space Mission",
        author: "SpaceX Community",
        likes: "18K",
      },
      {
        title: "Programming Tips 2026",
        author: "Developers",
        likes: "31K",
      },
    ];
  
    return (
      <section className="py-24 bg-[#0d1222]">
        <div className="max-w-7xl mx-auto px-8">
  
          <h2 className="text-5xl font-bold text-center mb-16">
            🔥 Trending Today
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-[#141c31] rounded-3xl p-8 hover:scale-105 transition"
              >
                <div className="text-5xl mb-5">
                  🚀
                </div>
  
                <h3 className="text-2xl font-bold">
                  {post.title}
                </h3>
  
                <p className="text-gray-400 mt-3">
                  {post.author}
                </p>
  
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-cyan-400">
                    ❤️ {post.likes}
                  </span>
  
                  <button className="bg-cyan-500 px-5 py-2 rounded-xl">
                    Read
                  </button>
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }