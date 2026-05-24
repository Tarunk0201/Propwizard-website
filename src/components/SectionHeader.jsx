import solidicon from "../assets/solid_icon.png";

export default function SectionHeader({ title }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm text-black">• {title}</p>
        <img
          src={solidicon}
          alt="logo"
          className="h-10 w-auto object-contain"
        />
      </div>
      <div className="border-t-[0.5px] border-t-[rgba(102,102,102,1)] mb-14"></div>
    </>
  );
}
