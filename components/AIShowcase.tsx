export default function AIShowcase() {
    return (
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
  
          {/* Left Side */}
          <div>
            <p className="text-cyan-400 font-bold uppercase tracking-[6px]">
              AI Powered
            </p>
  
            <h2 className="text-5xl font-black mt-6">
              Your Personal
              <br />
              AI Assistant
            </h2>
  
            <p className="text-gray-400 mt-8 leading-8 text-lg">
              Nova AI helps you discover communities, write posts,
              generate content ideas, translate languages,
              summarize discussions and much more.
            </p>
  
            <div className="mt-10 flex gap-5">
              <button className="bg-cyan-500 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
                Try AI
              </button>
  
              <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Right Side */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
  
            <div className="space-y-6">
  
              <div className="bg-[#0d1628] rounded-xl p-5">
                <p className="text-gray-300">
                  ✍️ Generate a viral post about Artificial Intelligence.
                </p>
              </div>
  
              <div className="bg-cyan-500 rounded-xl p-5 text-black font-semibold">
                Here's a viral post with engaging content and hashtags...
              </div>
  
              <div className="bg-[#0d1628] rounded-xl p-5">
                <p className="text-gray-300">
                  🌍 Translate this post into 20 languages.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }