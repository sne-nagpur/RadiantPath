
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiOutlineHome, HiUserGroup, HiOutlineUserGroup, HiLightBulb, HiOutlineLightBulb, HiSearch, HiOutlineSearch, HiMenu, HiOutlineMenu } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "Home", icon: HiOutlineHome, iconActive: HiHome },
  { to: "/about", label: "About", icon: HiOutlineUserGroup, iconActive: HiUserGroup },
  { to: "/solutions", label: "Solutions", icon: HiOutlineLightBulb, iconActive: HiLightBulb },
  { to: "/features", label: "Features", icon: HiOutlineMenu, iconActive: HiMenu },
  { to: "/contact", label: "Contact", icon: HiOutlineSearch, iconActive: HiSearch },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <>
      {/* Desktop NavBar */}
      <nav className="hidden md:block w-full bg-white border-b border-slate-100 shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-blue-700 text-xl">
            <span>RadiantPath</span>
          </Link>
          <div className="flex gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold px-2 py-1 rounded transition-colors ${pathname === link.to ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Mobile Bottom NavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 shadow-t z-50">
        <div className="flex justify-around items-center h-16">
          {navLinks.map(link => {
            const Icon = pathname === link.to ? link.iconActive : link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center justify-center flex-1 py-2 ${pathname === link.to ? "text-orange-500" : "text-slate-400 hover:text-orange-400"}`}
              >
                <Icon className="w-7 h-7 mb-0.5" />
                <span className="text-xs font-semibold">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
