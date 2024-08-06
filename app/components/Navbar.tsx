// This line indicates that the component is a client-side component in a framework like Next.js.
"use client";


const Navbar = () => {
  return (
    <div className="relative">
      <div className="h-16 bg-primaryBlack text-primaryCream border-b-[1px] border-primaryBorder">
        <div className="h-full flex items-center ml-4 mr-4 p-2 justify-between text-2xl font-medium">
          <div
            className="flex items-center gap-2 border border-primaryBorder rounded-3xl px-3 py-2">
            <div className="w-4 h-4 rounded-3xl bg-primaryCream"></div>
            <div className="animate-pulse">Aniket</div>{/*this div displays the text aniket with a pulsating effect */}
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
