import React, { useState } from "react";
import {
  BellIcon,
  SunIcon,
  MoonIcon,
  LanguageIcon,
  UserCircleIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/components/Logo";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      {/* Sol Kısım: Logo, Başlık ve Arama Çubuğu */}
      <div className="flex items-center">
        <div className="flex md:hidden items-center space-x-2 mr-6">
          <Logo isOpen={true} />
        </div>

        <div className="hidden lg:flex flex-col">
          {" "}
          <h2 className="text-xl font-semibold text-gray-800">Products</h2>
          <p className="text-sm text-gray-500 mb-2">Manage your products</p>
        </div>
      </div>

      {/* Sağ Kısım: İkonlar ve Kullanıcı Bilgileri */}
      <div className="flex items-center space-x-4">
        {/* Desktop İkonları (LG ve üzeri ekranlarda görünür) */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            className="flex items-center p-1 bg-gray-200 rounded-full cursor-pointer relative w-16 h-8 focus:outline-none"
            onClick={toggleThemeMode}
            role="switch"
            aria-checked={isDarkMode}
          >
            <span
              className={`absolute flex items-center justify-center h-6 w-6 rounded-full transition-transform duration-300 ${
                isDarkMode
                  ? "translate-x-full bg-indigo-600"
                  : "translate-x-0 bg-white shadow"
              }`}
            >
              {isDarkMode ? (
                <SunIcon className="h-4 w-4 text-white" />
              ) : (
                <MoonIcon className="h-4 w-4 text-gray-600" />
              )}
            </span>
          </button>

          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <LanguageIcon className="h-6 w-6" />
          </button>

          <div className="relative">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <BellIcon className="h-6 w-6" />
            </button>
            <span className="absolute -top-1 -right-1 bg-[#CDFF65] text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
              12
            </span>
          </div>

          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          </button>

          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Kullanıcı Avatarı ve Bilgileri */}
        <div className="flex items-center space-x-2 ml-4 hidden md:flex">
          {" "}
          {/* Mobil'de gizli */}
          {/* Kullanıcı İkonu veya Avatar */}
          <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center">
            <UserCircleIcon className="h-7 w-7 text-gray-600" />{" "}
            {/* Placeholder */}
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm font-semibold text-gray-800">
              Patricia Peter
            </span>
            <span className="text-xs text-gray-500">Super Admin</span>
          </div>
        </div>

        {/* Sağdaki Burger Menü İkonu   */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
          onClick={onMenuToggle}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
