// app/news/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Share2, Bookmark, ThumbsUp, MessageCircle, ArrowLeft, Eye } from "lucide-react";
import { notFound } from "next/navigation";

const newsItems = [
  {
    id: 1,
    title: "Xbox Unveils Massive 2026 Roadmap: Forza, Halo, Fable & Gears All Launching This Year",
    content: "Microsoft confirms Forza Horizon 6 (May 19), Halo: Campaign Evolved (Summer), Fable and Gears of War: E-Day (Fall) as part of its biggest first-party lineup in years. The company also announced Game Pass subscriber numbers have reached 45 million, with cloud streaming hours up 40% year-over-year. 'This is the year Xbox delivers on every promise,' said new Xbox CEO Asha Sharma in her first major announcement.",
    image: "https://wallpaperaccess.com/full/211180.jpg",
    date: "Feb 7, 2026",
    readTime: "4 min read",
    category: "Xbox",
    author: "Marcus Williams",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
    likes: 234,
    comments: 45,
    views: "45.2k",
  },
  {
    id: 2,
    title: "Phil Spencer Retires: Asha Sharma Named New Xbox CEO",
    content: "Microsoft Gaming appoints AI executive Asha Sharma as new CEO after Phil Spencer's retirement. Sharma, who previously led AI integration at Microsoft, commits to focus on console exclusives and 'no AI slop' in game development. 'We're going back to our roots—great games, great hardware, and respecting the player's time,' Sharma said in her inaugural address. Spencer will remain as an advisor through the end of 2026.",
    image: "https://wallpaperaccess.com/full/278989.png",
    date: "Feb 22, 2026",
    readTime: "5 min read",
    category: "Xbox",
    author: "Sarah Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1494790108777-76679d73e84f?w=100",
    likes: 567,
    comments: 89,
    views: "89.3k",
  },
  {
    id: 3,
    title: "PS6 Delayed to 2028-2029 as Memory Shortage Hits Sony",
    content: "Sony reportedly pushes next-gen console to 2028 or even 2029 due to AI-driven RAM shortages, while PS5 remains 'in the middle of its life cycle' with 92M units sold. The global demand for high-bandwidth memory (HBM) from AI companies has created unprecedented supply constraints. 'We're prioritizing stability and supply chain reliability over rushing to market,' a Sony spokesperson explained. Meanwhile, PS5 Pro sales have reached 12 million units since its late 2025 launch.",
    image: "https://wallpaperaccess.com/full/2310010.jpg",
    date: "Feb 16, 2026",
    readTime: "3 min read",
    category: "PlayStation",
    author: "Lisa Wang",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    likes: 345,
    comments: 123,
    views: "67.8k",
  },
  {
    id: 4,
    title: "AMD Confirms Next-Gen Xbox SoC Ready for 2027 Launch",
    content: "AMD CEO Dr. Lisa Su confirms development of next-gen Xbox SoC is 'progressing well to support a 2027 launch,' featuring Zen 6 cores and RDNA 5 GPU with 70 compute units. The custom chip is expected to deliver 4K/120 FPS gaming with hardware-accelerated ray tracing and machine learning upscaling. 'This partnership with Microsoft pushes the boundaries of console performance,' Su said during AMD's financial analyst day. The SoC will also support full backward compatibility with all previous Xbox generations.",
    image: "https://wallpaperaccess.com/full/656442.jpg",
    date: "Feb 4, 2026",
    readTime: "4 min read",
    category: "Xbox",
    author: "Alex Chen",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    likes: 189,
    comments: 67,
    views: "34.2k",
  },
  {
    id: 5,
    title: "Steam Machine Launching Early 2026: 6x More Powerful Than Steam Deck",
    content: "Valve confirms Steam Machine with AMD Zen 4/RDNA 3 chip ships in early 2026, supporting 4K/60 FPS gaming with FSR, but memory shortages may impact pricing. The console runs a full version of SteamOS 3.0 and supports all Windows games through Proton compatibility. 'We're bringing the Steam Deck experience to the living room with console-level performance,' said Valve's Pierre-Loup Griffais. Early reviews praise the silent operation and instant resume feature, though the $699 price point has sparked debate.",
    image: "https://wallpaperaccess.com/full/967362.png",
    date: "Feb 3, 2026",
    readTime: "3 min read",
    category: "PC",
    author: "Michael Brown",
    authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
    likes: 278,
    comments: 156,
    views: "41.5k",
  },
  {
    id: 6,
    title: "Nintendo Rules Out Virtual Console Revival, Focuses on Switch Online",
    content: "Nintendo confirms it has 'no plans for Virtual Console types of offerings,' remaining focused on classic games through Switch Online + Expansion Pack despite Pokémon GBA eShop release. The company added 12 Game Boy Advance titles to the service this month, including Metroid Fusion and Mario & Luigi: Superstar Saga. 'Our subscription model provides the best value for players wanting to experience our classic library,' a Nintendo representative stated. The announcement disappointed fans hoping for individual game purchases.",
    image: "https://wallpaperaccess.com/full/704739.png",
    date: "Feb 20, 2026",
    readTime: "3 min read",
    category: "Nintendo",
    author: "Yuki Tanaka",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
    likes: 156,
    comments: 234,
    views: "22.7k",
  },
  {
    id: 7,
    title: "Microsoft Plans 'Next-Gen' Xbox Controller with Wi-Fi Direct for Cloud Gaming",
    content: "New Xbox controller in development features direct Wi-Fi connectivity to reduce streaming latency, bypassing consoles and smart TVs for improved cloud gaming experience. The controller will connect directly to Xbox cloud servers, reducing input lag by up to 60% compared to Bluetooth connections. 'This is the future of cloud gaming—a controller that feels wired even when you're streaming,' said Xbox hardware director. The controller also includes haptic feedback similar to PlayStation's DualSense and a dedicated screenshot button.",
    image: "https://wallpaperaccess.com/full/833268.png",
    date: "Feb 5, 2026",
    readTime: "2 min read",
    category: "Xbox",
    author: "Marcus Williams",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
    likes: 98,
    comments: 45,
    views: "18.3k",
  },
  {
    id: 8,
    title: "Nintendo Considers Switch 2 Price Increase Amid Memory Shortage",
    content: "Nintendo evaluating potential Switch 2 price hike in 2026 due to global memory supply pressures, may adjust bundles or remove pack-in titles like Mario Kart World. The company originally planned a $449 price point but manufacturing costs have risen 22% due to component shortages. 'We're committed to making the Switch 2 accessible while ensuring we can meet demand,' Nintendo president Shuntaro Furukawa said. Analysts suggest a final price between $449 and $499, with the console still targeting a holiday 2026 launch.",
    image: "https://wallpaperaccess.com/full/704743.jpg",
    date: "Feb 17, 2026",
    readTime: "2 min read",
    category: "Nintendo",
    author: "Yuki Tanaka",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
    likes: 203,
    comments: 189,
    views: "36.9k",
  },
  {
    id: 9,
    title: "GTA 6 Confirmed for November 19, 2026 as Marketing Campaign Kicks Off This Summer",
    content: "Take-Two Interactive reaffirms GTA 6 release date with 'high confidence', announces Rockstar's marketing campaign to begin Summer 2026. CEO Strauss Zelnick stated, 'I feel very good about it,' addressing investor concerns after previous delays. The game will launch first on PS5 and Xbox Series X|S, with a PC version following in 2027. Rockstar has also confirmed extensive post-launch content plans including story expansions and GTA Online 2.0, which will feature interconnected cities from across the series' history.",
    image: "https://wallpapercave.com/wp/wp13258370.png",
    date: "Feb 3, 2026",
    readTime: "4 min read",
    category: "Rockstar",
    author: "Michael Brown",
    authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
    likes: 1243,
    comments: 567,
    views: "234.5k",
  },
  {
    id: 10,
    title: "GTA 6 Price Leak Suggests Record-Breaking $99.99 / Dh370 Price Tag",
    content: "Digital store listings point to GTA 6 standard edition potentially costing £89.99 / $99.99, which would make it the most expensive AAA game in history. Rockstar has not officially confirmed pricing, but industry analysts suggest the unprecedented development budget—estimated over $2 billion including marketing—necessitates the higher price point. 'Games have been underpriced for decades relative to inflation and production costs,' said industry analyst Daniel Ahmad. The leak has sparked debate among gamers, with some canceling pre-orders while others argue the scope justifies the cost.",
    image: "https://wallpapercave.com/wp/wp13258374.jpg",
    date: "Feb 22, 2026",
    readTime: "3 min read",
    category: "Rockstar",
    author: "Marcus Williams",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
    likes: 2341,
    comments: 1892,
    views: "178.9k",
  },

];

export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = newsItems.find((item) => item.id === Number(id));
  if (!news) return notFound();

  const relatedNews = newsItems
    .filter((item) => item.id !== Number(id))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/news"
          className="flex items-center gap-1 px-3 py-1.5 bg-black mt-14 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:bg-white/10 transition-all duration-300 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-white/70" />
          <span className="text-sm font-medium text-white/80">Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-100 sm:h-100 md:h-100 lg:h-150 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={news.image}
            alt={news.title}
            fill
            priority
            className="object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-red-600/20 via-transparent to-transparent" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 pb-4 sm:pb-6 md:pb-8 px-4 md:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-2 sm:mb-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-linear-to-r from-red-600 to-orange-600 text-white font-semibold text-xs sm:text-sm tracking-wider shadow-lg shadow-red-600/30">
                {news.category}
              </span>
              <span className="text-white/60 text-xs sm:text-sm flex items-center gap-1 border border-white/10 px-2 py-1 rounded-full">
                <Clock size={12} />
                {news.readTime}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 leading-tight">
              {news.title}
            </h1>
            
            {/* Author & Meta */}
            <div className="flex mb-10 flex-wrap items-center gap-3 sm:gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-red-600/50">
                  <Image
                    src={news.authorAvatar}
                    alt={news.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-white text-xs sm:text-sm">{news.author}</p>
                  <p className="text-xs text-white/40 hidden sm:block">Senior Editor</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1 text-white/40">
                  <Calendar size={12} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{news.date}</span>
                </div>
                
                <div className="flex items-center gap-1 text-white/40">
                  <Eye size={12} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{news.views}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-white/60 hover:text-red-500 transition-colors">
                    <ThumbsUp size={12} className="sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{news.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-white/60 hover:text-red-500 transition-colors">
                    <MessageCircle size={12} className="sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{news.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
<div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6  sm:-mt-10 md:-mt-14 lg:-mt-16 relative z-20 pb-6 sm:pb-10 md:pb-14 lg:pb-16">
  {/* Content Card */}
  <div className="bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl">
    {/* Interaction Bar */}
    <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/20 text-red-500 rounded-full hover:bg-red-600/30 transition-colors border border-red-600/30 text-xs sm:text-sm">
          <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-xs sm:text-sm">
          <MessageCircle size={14} className="sm:w-4 sm:h-4" />
          <span>Comment</span>
        </button>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white border border-white/10">
          <Bookmark size={14} className="sm:w-4 sm:h-4" />
        </button>
        <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white border border-white/10">
          <Share2 size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>

    {/* Article Content */}
    <div className="prose prose-invert max-w-none">
      <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl lg:first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-2 sm:first-letter:mr-3 first-letter:float-left">
        {news.content}
      </p>
      
      <p className="text-white/60 mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg">
        The gaming industry continues to evolve at a rapid pace, with cloud technology 
        pushing the boundaries of whats possible. This development represents a significant 
        milestone in making high-quality gaming accessible to everyone, regardless of their 
        hardware capabilities.
      </p>
      
      <blockquote className="border-l-4 border-red-600 bg-red-600/10 p-3 sm:p-4 my-4 sm:my-5 md:my-6 italic text-white/80 text-sm sm:text-base md:text-lg rounded-r-lg md:rounded-r-xl">
        &ldquo;This is just the beginning of a new era in gaming. Were seeing technology 
        finally catch up to our vision of gaming anywhere, anytime.&rdquo; - Industry Expert
      </blockquote>
      
      <p className="text-white/60 text-sm sm:text-base md:text-lg">
        With these advancements, players can expect even more innovations in the coming 
        months. The focus remains on reducing latency, improving visual quality, and 
        expanding the library of available games to include more AAA titles.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 my-4 sm:my-5 md:my-6">
        {[
          { label: "Players Online", value: "2.5M" },
          { label: "Games Available", value: "450+" },
          { label: "Peak Hours", value: "20M" }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4 text-center border border-white/10">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">{stat.value}</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-white/40 mt-0.5 sm:mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Related News Section */}
  {relatedNews.length > 0 && (
    <div className="mt-7 sm:mt-8 md:mt-10 lg:mt-12">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center gap-2">
        <span className="w-1 h-5 sm:h-6 md:h-7 lg:h-8 bg-red-600 rounded-full" />
        Related Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {relatedNews.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="group relative bg-white/5 rounded-md sm:rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/20 transition-all duration-500 hover:-translate-y-1 border border-white/10"
          >
            <div className="relative h-24 sm:h-28 md:h-32 lg:h-36 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent" />
              <div className="absolute top-2 left-2">
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-linear-to-r from-red-600 to-orange-600 text-white text-[10px] sm:text-xs rounded-full shadow-lg">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <h3 className="font-bold text-white text-xs sm:text-sm md:text-base mb-1 sm:mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-white/40">
                <Calendar size={10} className="sm:w-3 sm:h-3" />
                <span>{item.date}</span>
                <span>•</span>
                <Clock size={10} className="sm:w-3 sm:h-3" />
                <span>{item.readTime}</span>
              </div>
            </div>
            
            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r from-red-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>
        ))}
      </div>
    </div>
  )}
</div>
    </div>
  );
}