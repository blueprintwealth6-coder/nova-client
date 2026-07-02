export default function BackgroundGlow() {
    return (
      <>
        {/* Top Left Glow */}
        <div className="fixed top-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[120px] -z-10" />
  
        {/* Top Right Glow */}
        <div className="fixed top-[100px] right-[-120px] w-[350px] h-[350px] rounded-full bg-purple-500/20 blur-[120px] -z-10" />
  
        {/* Bottom Left */}
        <div className="fixed bottom-[-180px] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px] -z-10" />
  
        {/* Bottom Right */}
        <div className="fixed bottom-[-150px] right-[-100px] w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-[120px] -z-10" />
      </>
    );
  }