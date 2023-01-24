import React from "react";

const Navbar = () => {
  return (
    <div
      className="bg-fixed min-w-lg mx-auto h-40 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg"
      style={{
        backgroundImage: `url(
          "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
        )`,
      }}
    >
      <div className="p-6 sm:px-16 sm:py-12 bg-black/40">
        <p className="font-serif italic text-base sm:text-2xl text-white text-center leading-6 sm:leading-8">
          Bar Scapers
        </p>
      </div>
    </div>
  );
};
export default Navbar;
