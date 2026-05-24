import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-img.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "3D Visualization", path: "/services/3d-visualization" },
    { name: "Virtual Reality", path: "/services/virtual-experience" },
    { name: "Architecture Drawings", path: "/services/architecture" },
    { name: "Interior Design", path: "/services/interior" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Visualization", path: "/services/3d-visualization" },
    { name: "Virtual Reality", path: "/services/virtual-experience" },
    { name: "Architecture Drawings", path: "/services/architecture" },
    { name: "Interior Design", path: "/services/interior" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between">
        {/* LEFT SIDE (Logo + Nav Links together) */}
        <div className="flex items-center gap-10 py-2">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-16 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-normal">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* <a
                href="#"
                className="text-secondaryText hover:text-black transition"
              >
                Services
              </a> */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-secondaryText hover:bg-gray-100 hover:text-black transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-secondaryText hover:text-black transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE (Button) */}
        <div className="hidden md:block">
          <button className="w-[169px] h-[51px] bg-[rgba(46,46,46,1)] text-white rounded-2xl text-sm font-normal flex items-center justify-center hover:bg-gray-800 transition">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <nav className="flex flex-col gap-4 text-gray-700">
            <a href="#">Services</a>
            {navLinks.map((link) => (
              <a key={link.name} href={link.path}>
                {link.name}
              </a>
            ))}
            <button className="bg-black text-white px-4 py-2 rounded-full w-fit">
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
