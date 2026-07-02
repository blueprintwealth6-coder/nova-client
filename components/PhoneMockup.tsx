export default function PhoneMockup() {
    return (
      <div className="relative w-[330px] h-[670px] rounded-[45px] bg-[#0d1324] border border-white/10 shadow-2xl overflow-hidden">
  
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl"></div>
  
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-52 flex items-center justify-center">
  
          <h2 className="text-4xl font-black">
            NOVA
          </h2>
  
        </div>
  
        <div className="p-6 space-y-5">
  
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            🤖 AI generated your next viral content.
          </div>
  
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            🔥 240K creators joined today.
          </div>
  
          <div className="bg-cyan-500 text-black rounded-2xl p-5 font-bold">
            🎥 Trending Video
            <br />
            2.4 Million Views
          </div>
  
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            🌍 Explore communities worldwide.
          </div>
  
        </div>
  
      </div>
    );
  }