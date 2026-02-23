import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  Disc,
  Gamepad2,
  Trophy,
  Users,
  Heart,
  Flame,
  Award,
  Sword,
  Shield,
  Phone,
  User,
  Home,
  Newspaper,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Animated background with gaming aesthetic */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

        {/* Cyber grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Scanlines effect */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 1px, transparent 1px, transparent 2px)",
            backgroundSize: "100% 2px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* RGB strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500" />

        <div className="pt-24 pb-16">
          {/* Main footer grid*/}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
            {/* Brand Section - Epic Level */}
            <div className="lg:col-span-5 space-y-8">
              <Link href="/" className="inline-block group">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <Gamepad2 className="w-16 h-16 text-cyan-400 relative z-10 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  <div>
                    <span className="text-5xl font-black bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                      GAMING
                    </span>
                    <span className="text-5xl font-black bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block -mt-2">
                      NEWS
                    </span>
                  </div>
                </div>
              </Link>

              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Your ultimate gaming headquarters. Breaking news, in-depth
                reviews, and the latest from the gaming universe.
                <span className="text-cyan-400 font-bold">
                  {" "}
                  Stay ahead of the game.
                </span>
              </p>

              {/* Gaming Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {[
                  {
                    icon: Trophy,
                    value: "250+",
                    label: "Reviews",
                    color: "text-yellow-500",
                  },
                  {
                    icon: Users,
                    value: "10K+",
                    label: "Readers",
                    color: "text-green-500",
                  },
                  {
                    icon: Flame,
                    value: "100+",
                    label: "News",
                    color: "text-orange-500",
                  },
                  {
                    icon: Award,
                    value: "50+",
                    label: "Interviews",
                    color: "text-purple-500",
                  },
                ].map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={idx} className="text-center group cursor-default">
                      <div className={`${stat.color} mb-2 flex justify-center`}>
                        <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="font-bold text-white text-lg">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Main Pages */}
              <div className="space-y-8">
                <h4 className="text-white font-bold text-xl flex items-center gap-3 border-b border-gray-800 pb-3">
                  <Sword className="w-6 h-6 text-cyan-400" />
                  <span>Main Menu</span>
                </h4>
                <ul className="space-y-5">
                  {[
                    { name: "Home", icon: Home, href: "/" },
                    { name: "News", icon: Newspaper, href: "/news" },
                    { name: "About Me", icon: User, href: "/about" },
                    { name: "Call Me", icon: Phone, href: "/call" },
                  ].map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-4 group text-lg"
                        >
                          <span className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-cyan-500/10 border border-gray-700 group-hover:border-cyan-500/50 transition-all">
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact & Info */}
              <div className="space-y-8">
                <h4 className="text-white font-bold text-xl flex items-center gap-3 border-b border-gray-800 pb-3">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <span>Connect</span>
                </h4>

                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-400 group">
                      <div className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-purple-500/50 transition-all">
                        <Mail className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="font-medium">
                          contact@gamingnews.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 group">
                      <div className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-pink-500/50 transition-all">
                        <MapPin className="w-5 h-5 text-pink-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Based in</div>
                        <div className="font-medium">Game City, GC 12345</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-400">
                        24/7
                      </div>
                      <div className="text-xs text-gray-500">Coverage</div>
                    </div>
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        Live
                      </div>
                      <div className="text-xs text-gray-500">Updates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Gaming Style */}
          <div className="pt-10 border-t border-gray-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {[
                  {
                    icon: Twitter,
                    color: "cyan",
                    href: "https://twitter.com/gamingnews",
                    label: "Twitter",
                  },
                  {
                    icon: Instagram,
                    color: "pink",
                    href: "https://instagram.com/gamingnews",
                    label: "Instagram",
                  },
                  {
                    icon: Youtube,
                    color: "red",
                    href: "https://youtube.com/gamingnews",
                    label: "Youtube",
                  },
                  {
                    icon: Twitch,
                    color: "purple",
                    href: "https://twitch.tv/gamingnews",
                    label: "Twitch",
                  },
                  {
                    icon: Disc,
                    color: "indigo",
                    href: "https://discord.gg/gamingnews",
                    label: "Discord",
                  },
                ].map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        relative p-3 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                        border border-gray-700 text-gray-400
                        hover:border-${social.color}-500/50 
                        hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]
                        transition-all duration-300 hover:-translate-y-1
                        group overflow-hidden
                      `}
                      aria-label={social.label}
                    >
                      <div
                        className={`absolute inset-0 bg-${social.color}-500/0 group-hover:bg-${social.color}-500/10 transition-colors`}
                      />
                      <IconComponent className="w-5 h-5 relative z-10" />
                    </a>
                  );
                })}
              </div>

              {/* Copyright with Game Style */}
              <div className="flex items-center gap-4 text-gray-500">
                <span className="text-cyan-400/50 text-xl">[</span>
                <span>© {new Date().getFullYear()}</span>
                <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
                  GAMINGNEWS
                </span>
                <span className="w-1 h-1 bg-purple-500 rounded-full" />
                <span>All rights reserved</span>
                <span className="text-pink-400/50 text-xl">]</span>
              </div>

              {/* Made with Love - Gaming Edition */}
              <div className="flex items-center gap-2 text-gray-500 group cursor-default">
                <span className="text-sm">Powered by</span>
                <Heart className="w-4 h-4 text-red-500 group-hover:scale-125 transition-transform duration-300 fill-red-500/20 group-hover:fill-red-500" />
                <span className="font-mono text-cyan-400">&lt;Gamers/&gt;</span>
              </div>
            </div>

            {/* Gaming Tags Line */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                "#GamingNews",
                "#GameReviews",
                "#PCGaming",
                "#ConsoleNews",
                "#IndieGames",
                "#GameIndustry",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex justify-center gap-8 mt-8 text-sm">
              <Link
                href="/"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/news"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                News
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/call"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                Call Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 text-gray-800/20 font-mono text-xs hidden lg:block">
        {`{ pages: ['home', 'news', 'about', 'call'] }`}
      </div>
      <div className="absolute top-10 right-10 text-gray-800/20 font-mono text-xs hidden lg:block">
        {`[ status: 'online', version: '2.0.0' ]`}
      </div>
    </footer>
  );
}
