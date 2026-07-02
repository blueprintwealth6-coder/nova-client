const plans = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Basic Profile",
        "Join Communities",
        "Limited AI",
        "Standard Support",
      ],
      color: "border-gray-700",
    },
    {
      title: "Pro",
      price: "$19",
      features: [
        "Unlimited AI",
        "Verified Badge",
        "Priority Support",
        "Advanced Analytics",
      ],
      color: "border-cyan-500",
    },
    {
      title: "Enterprise",
      price: "$99",
      features: [
        "Everything in Pro",
        "Team Dashboard",
        "Custom AI",
        "24/7 Support",
      ],
      color: "border-purple-500",
    },
  ];
  
  export default function Pricing() {
    return (
      <section className="py-28 px-6 bg-[#090d18]">
  
        <div className="max-w-7xl mx-auto">
  
          <h2 className="text-5xl font-black text-center">
            Pricing Plans
          </h2>
  
          <p className="text-center text-gray-400 mt-6">
            Choose the perfect plan for your journey.
          </p>
  
          <div className="grid md:grid-cols-3 gap-8 mt-20">
  
            {plans.map((plan, index) => (
  
              <div
                key={index}
                className={`rounded-3xl border ${plan.color} bg-white/5 backdrop-blur-xl p-10 hover:scale-105 transition`}
              >
  
                <h3 className="text-3xl font-bold">
                  {plan.title}
                </h3>
  
                <div className="text-5xl font-black text-cyan-400 mt-6">
                  {plan.price}
                  <span className="text-lg text-gray-400">/month</span>
                </div>
  
                <ul className="mt-10 space-y-4">
  
                  {plan.features.map((feature, i) => (
  
                    <li key={i}>
                      ✅ {feature}
                    </li>
  
                  ))}
  
                </ul>
  
                <button className="w-full mt-10 bg-cyan-500 py-4 rounded-xl font-bold hover:bg-cyan-400 transition">
                  Get Started
                </button>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }