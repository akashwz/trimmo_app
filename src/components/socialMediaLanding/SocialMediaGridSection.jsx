"use client";

const SocialMediaGridSection = () => {
  const socialItems = [
    { name: "Pintrest", metric: "1M Impressions", action: "Follow", actionCount: "350k+", bg: "bg-red-100" },
    { name: "Linkedin", metric: "350 Reach", action: "Follow", actionCount: "350k+", bg: "bg-blue-100" },
    { name: "Linkedin", metric: "150 Projects", action: "Follow", actionCount: "11k+", bg: "bg-blue-100" },
    { name: "Messenger", metric: "Chat", action: "Message", bg: "bg-purple-100" },
    { name: "Whatsapp", metric: "1M", action: "Follow", actionCount: "11k+", bg: "bg-green-100" },
    { name: "Tiktok", metric: "500k View", action: "Follow", actionCount: "11k+", bg: "bg-gray-100" },
    { name: "Discord", metric: "Channels", action: "Join", bg: "bg-indigo-100" },
    { name: "Github", metric: "@pulkitkaot", action: "Follow", actionCount: "11k+", bg: "bg-gray-100" },
    { name: "Telegram", metric: "@pulkitkaot", action: "Follow", actionCount: "11k+", bg: "bg-blue-100" },
    { name: "Instagram", metric: "@pulkitkaot", action: "Follow", actionCount: "11k+", bg: "bg-pink-100" },
    { name: "Reddit", metric: "1M Impressions", action: "Follow", bg: "bg-orange-100" },
    { name: "Signal", metric: "Channels", action: "Follow", bg: "bg-blue-100" },
    { name: "Snapchat", metric: "@pulkitkaot", action: "Follow", bg: "bg-yellow-100" },
  ];

  return (
    <div className="my-[100px] text-center">

      {/* Center Text */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">
        All Your Social Media Power in One <br />
        <span className="font-bold">to Manage, Schedule, Chat & Convert.</span>
      </h2>
      <button className="bg-[#cefc6c] hover:bg-[#cefc6c]/90 text-black px-6 py-2 rounded-full mb-12">
        Let's Start Connecting
      </button>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

        {socialItems.map((item, index) => (
          <div key={index} className={`flex flex-col justify-between p-4 rounded-lg h-[130px] ${item.bg}`}>
            <h3 className="font-semibold mb-1">{item.name}</h3>
            <p className="text-xs text-gray-600 mb-2">{item.metric}</p>
            <button className="text-white text-sm px-4 py-1 rounded-full bg-black hover:bg-gray-800">
              {item.action} {item.actionCount && <span className="ml-1">{item.actionCount}</span>}
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SocialMediaGridSection;
