import React from "react";
import logo from "../../assets/Logo-img.png";
import instaIcon from "../../assets/insta-icon.png";
import linkedinIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/youtube-icon.png";
import email from '../../assets/Email.png';
import phone from '../../assets/Phone.png';
import location from '../../assets/Mark.png';
export default function Footer() {
  return (
  <footer
  className="bg-white text-gray-700"
  style={{
    boxShadow: "0px -5px 41px 0px rgba(150, 150, 150, 0.25)",
  }}
>
<div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between">

  {/* LEFT SIDE */}
  <div className="max-w-sm  items-start">
    <img 
      src={logo} 
      alt="logo" 
      className="h-[160px] w-[204px] object-contain right-auto left-0"
    />

    <p className="text-lg text-[rgba(98,98,98,1)] leading-relaxed">
      End-to-end 3D visualization, architecture drawings & virtual experiences for architects, builders & developers.
    </p>

    <div className="flex gap-4 mt-5">
      <img src={instaIcon} className="h-5 w-5 cursor-pointer hover:scale-110 transition" />
      <img src={linkedinIcon} className="h-5 w-5 cursor-pointer hover:scale-110 transition" />
      <img src={youtubeIcon} className="h-5 w-5 cursor-pointer hover:scale-110 transition" />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-12 md:mt-16">

    {/* PRODUCT */}
    <div>
      <h3 className="font-bold text-[20px] mb-5 text-[rgba(23,15,73,1)]">
        Product
      </h3>
      <ul className="space-y-3 text-lg text-[rgba(111,108,144,1)]">
        <li>3D Website</li>
        <li>Sells Tool</li>
        <li>Virtual Tour</li>
      </ul>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="font-bold text-[20px] mb-5 text-[rgba(23,15,73,1)]">
        Services
      </h3>
      <ul className="space-y-3 text-lg text-[rgba(111,108,144,1)]">
        <li>3D Visualization</li>
        <li>Virtual Experience</li>
        <li>Architecture Drawings</li>
        <li>Interior Design</li>
        <li>Blog</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="font-bold text-[20px] mb-5 text-[rgba(23,15,73,1)]">
        Contacts us
      </h3>
      <ul className="space-y-5 text-lg text-[rgba(111,108,144,1)]">
        <li className="flex "><img src={email} alt="email"className="pr-2 h-5 mt-2"/> info@propwizardstudio.com</li>
        <li className="flex"> <img src={phone} alt="email" className="pr-2 h-5 mt-1" />+91 84351 65361<br /> +91 6264064437</li>
        <li className="flex"><img src={location} alt="email" className="pr-2 h-5 mt-1" /> 73, Deepkunj, Sch.140, Pipliyahana, Indore </li>
      </ul>
    </div>

  </div>
</div>

{/* BOTTOM BAR */}
<div className="border-t border-gray-300 mt-10">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center  text-lg text-[rgba(111,108,144,1)]">

    <p>Copyright © 2026 PropWizard Studio</p>

   <div className="flex gap-2 mt-2 md:mt-0">

  <span className="text-[rgba(111,108,144,1)]">
    All Rights Reserved
  </span>

  <span className="text-[rgba(111,108,144,1)]">|</span>

  <a href="/terms" className="text-[rgba(74,58,255,1)] underline cursor-pointer">
    Terms and Conditions
  </a>

  <span className="text-[rgba(111,108,144,1)]">|</span>

  <a href="/privacy" className="text-[rgba(74,58,255,1)] underline cursor-pointer">
    Privacy Policy
  </a>

</div>

  </div>
</div>
    </footer>
  );
}