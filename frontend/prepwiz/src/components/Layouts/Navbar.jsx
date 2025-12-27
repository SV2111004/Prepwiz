import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-16
      sticky top-0 z-50
      backdrop-blur-md
      bg-linear-to-r from-yellow-100 via-white to-yellow-100
      border-b border-orange-200/40
      shadow-sm">

      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
        <Link to={"/dashboard"}>
          <h2 className="text-lg md:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-orange-700 to-amber-500 group-hover:scale-105 transition-transform duration-300">
  PREPWIZ
</h2>

        </Link>

        <div className="flex items-center gap-3">
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
};
export default Navbar;