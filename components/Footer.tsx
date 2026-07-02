export default function Footer() {
    return (
      <footer className="bg-[#040714] border-t border-white/10">
  
        <div className="max-w-7xl mx-auto px-8 py-20">
  
          <div className="grid md:grid-cols-4 gap-12">
  
            {/* Logo */}
  
            <div>
  
              <h2 className="text-4xl font-black text-cyan-400">
                NOVA
              </h2>
  
              <p className="text-gray-400 mt-6 leading-8">
                The future AI powered social media platform where creators,
                developers and communities grow together.
              </p>
  
              <div className="flex gap-4 mt-8">
  
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  🌐
                </div>
  
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  📷
                </div>
  
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  🐦
                </div>
  
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  ▶️
                </div>
  
              </div>
  
            </div>
  
            {/* Company */}
  
            <div>
  
              <h3 className="text-2xl font-bold mb-6">
                Company
              </h3>
  
              <ul className="space-y-4 text-gray-400">
  
                <li className="hover:text-cyan-400 cursor-pointer">About</li>
  
                <li className="hover:text-cyan-400 cursor-pointer">Careers</li>
  
                <li className="hover:text-cyan-400 cursor-pointer">Press</li>
  
                <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
  
              </ul>
  
            </div>
  
            {/* Resources */}
  
            <div>
  
              <h3 className="text-2xl font-bold mb-6">
                Resources
              </h3>
  
              <ul className="space-y-4 text-gray-400">
  
                <li className="hover:text-cyan-400 cursor-pointer">Documentation</li>
  
                <li className="hover:text-cyan-400 cursor-pointer">API</li>
  
                <li className="hover:text-cyan-400 cursor-pointer">Privacy</li>
  
                <li className="hover:text-cyan-400 cursor-pointer">Terms</li>
  
              </ul>
  
            </div>
  
            {/* Newsletter */}
  
            <div>
  
              <h3 className="text-2xl font-bold mb-6">
                Newsletter
              </h3>
  
              <p className="text-gray-400 mb-6">
                Get weekly updates from NOVA.
              </p>
  
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none"
              />
  
              <button className="mt-5 w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 font-bold transition">
                Subscribe
              </button>
  
            </div>
  
          </div>
  
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
  
            <p className="text-gray-500">
              © 2026 NOVA. All Rights Reserved.
            </p>
  
            <p className="text-gray-500 mt-4 md:mt-0">
              Made with ❤️ using Next.js & Tailwind CSS
            </p>
  
          </div>
  
        </div>
  
      </footer>
    );
  }