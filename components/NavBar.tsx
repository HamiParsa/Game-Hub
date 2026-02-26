"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Home, Newspaper, Phone, User, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Call Me", href: "/call", icon: Phone },
  { label: "About", href: "/about", icon: User },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-100 transition-all duration-700
        ${isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
        }
        ${isOpen ? 'pointer-events-auto' : ''}
      `}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative group">
            <span className="text-2xl font-black tracking-tighter">
              <span className="text-white">GAME</span>
              <span className="text-cyan-400">HUB</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = isActivePath(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm font-medium transition-colors relative group
                    ${isActive ? 'text-cyan-400' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {item.label}
                  <span className={`
                    absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white z-200"
            aria-label="Toggle menu"
          >
            <div className="relative">
              <Menu 
                size={20} 
                className={`transition-all duration-500 ${isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} 
              />
            </div>
          </button>
        </div>
      </header>

      <div className={`
        fixed inset-0 z-1000 md:hidden
        transition-all duration-700 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900 z-1001">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center z-1003 hover:bg-white/10 transition-all duration-300 group"
          aria-label="Close menu"
        >
          <X size={20} className="text-white/70 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
        </button>
        
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-1002">
          <div className={`
            absolute top-12 left-1/2 -translate-x-1/2
            transition-all duration-700 delay-300
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}>
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                <span className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  GH
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-sm space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = isActivePath(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group block w-full
                    transform transition-all duration-700
                    ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                  `}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className={`
                    relative flex items-center gap-6 p-4 rounded-2xl
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-linear-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30' 
                      : 'hover:bg-white/5 border border-transparent'
                    }
                  `}>
                    {isActive && (
                      <div className="absolute left-0 w-1 h-8 bg-linear-to-b from-cyan-400 to-purple-400 rounded-full" />
                    )}
                    
                    <div className={`
                      relative w-12 h-12 rounded-xl flex items-center justify-center
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-linear-to-br from-cyan-500 to-purple-600' 
                        : 'bg-white/5 group-hover:bg-white/10'
                      }
                    `}>
                      <Icon 
                        size={22} 
                        className={`
                          transition-all duration-300
                          ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}
                        `} 
                      />
                      
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-cyan-400 blur-md opacity-50 animate-pulse" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <span className={`
                        block text-lg font-medium transition-all duration-300
                        ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}
                      `}>
                        {item.label}
                      </span>
                      
                      <span className="text-xs text-white/30">
                        {isActive ? 'Current page' : 'Tap to navigate'}
                      </span>
                    </div>
                    
                    <ChevronRight 
                      size={18} 
                      className={`
                        transition-all duration-300
                        ${isActive 
                          ? 'text-cyan-400 translate-x-0 opacity-100' 
                          : 'text-white/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                        }
                      `} 
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className={`
            absolute bottom-12 left-1/2 -translate-x-1/2 text-center
            transition-all duration-700 delay-700
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <p className="text-sm text-white/30">© 2024 GAMEHUB</p>
            <p className="text-xs text-white/20 mt-1">Where gaming meets style</p>
          </div>
        </div>
      </div>

      <div 
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-999 transition-all duration-500 md:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
        aria-label="Close menu backdrop"
      />
    </>
  );
}