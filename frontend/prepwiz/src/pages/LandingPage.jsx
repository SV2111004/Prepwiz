import { useContext, useState } from "react";
import HERO_IMG from "../assets/hero-image.png";
import { APP_FEATURES } from "../utils/data";
import { LuSparkles } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import { UserContext } from "../context/userContext";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* ===== HERO BACKGROUND ===== */}
      <div
        className="
          w-full min-h-screen
          bg-gradient-to-br from-[#FFF7E6] via-[#FFFDF7] to-white
          relative overflow-hidden
        "
      >
        {/* Right glow */}
        <div className="absolute top-40 right-[-200px] w-[480px] h-[480px] bg-orange-400/20 blur-[100px]" />

        {/* Left glow */}
        <div
          className="
            absolute -top-10 -left-10 w-[600px] h-[300px]
            bg-[radial-gradient(circle,rgba(255,193,7,0.35)_0%,rgba(255,193,7,0.15)_40%,transparent_70%)]
            blur-[120px]
          "
        />

        <div className="container mx-auto px-4 pt-6 pb-24 relative z-10">
          {/* ===== HEADER ===== */}
          <header
            className="
              flex justify-between items-center mb-20
              bg-white/30 backdrop-blur
              px-10 py-3 rounded-full
              shadow-sm border border-white/50
            "
          >
            <div className="text-2xl font-bold text-black">PREPWIZ</div>

            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="
                  bg-linear-to-r from-[#FF9324] to-[#e99a4b]
                  text-sm font-semibold text-white
                  px-7 py-2.5 rounded-full
                  hover:bg-black hover:text-white
                  border border-white
                  transition-all cursor-pointer
                "
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* ===== HERO GLASS PANEL ===== */}
          <div
            className="
              bg-white/30 backdrop-blur-md
              rounded-3xl
              border border-white/40
              shadow-xl
              px-10 py-14
            "
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* LEFT */}
              <div className="w-full md:w-1/2 pr-6 mb-10 md:mb-0">
                <div className="flex items-center mb-3">
                  <div
                    className="
                      flex items-center gap-2 text-[13px]
                      text-amber-700 font-bold
                      bg-amber-100 px-4 py-1
                      rounded-full border border-amber-400
                      shadow-sm
                    "
                  >
                    <LuSparkles /> AI Powered
                  </div>
                </div>

                <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
                  Ace Interviews with <br />
                  <span
                    className="
                      text-transparent bg-clip-text
                      bg-linear-to-r from-red-800 via-orange-500 to-amber-400
                      drop-shadow-[0_2px_6px_rgba(255,147,36,0.35)]
                      font-extrabold
                    "
                  >
                    AI-Powered
                  </span>{" "}
                  Learning
                </h1>
              </div>

              {/* RIGHT */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-900 mb-6 text-[17px]">
                  Get role-specific questions, expand answers when you need them,
                  dive deeper into concepts, and organize everything your way.
                  From preparation to mastery — your ultimate interview toolkit
                  is here.
                </p>

                <button
                  className="
                    px-8 py-3 rounded-full
                    bg-gradient-to-r from-black to-gray-900
                    text-white text-sm font-semibold
                    shadow-lg shadow-black/30
                    hover:from-orange-400 hover:to-amber-400
                    hover:text-black
                    transition-all duration-300
                  "
                  onClick={handleCTA}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="relative z-10">
        <section className="flex items-center justify-center -mt-36">
          <img
            src={HERO_IMG}
            alt="Hero"
            className="w-[70vw] rounded-2xl shadow-2xl"
          />
        </section>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      <div
        className="
          w-full mt-24
          bg-linear-to-b from-[#FFFCEF] to-[#FFF9E6]
        "
      >
        <div className="container mx-auto px-4 pt-16 pb-24">
          <h2 className="text-2xl font-medium text-center mb-14">
            Features That Make You Shine
          </h2>

          <div
            className="
              bg-white/60 backdrop-blur-md
              rounded-3xl
              border border-white/40
              shadow-xl
              px-6 py-12
            "
          >
            <div className="flex flex-col items-center gap-10">
              {/* 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="
                      bg-[#FFFEF8]
                      p-6 rounded-xl
                      border border-amber-100
                      shadow-sm
                      hover:shadow-xl hover:-translate-y-1
                      transition-all duration-300
                    "
                  >
                    <h3 className="text-base font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="
                      bg-[#FFFEF8]
                      p-6 rounded-xl
                      border border-amber-100
                      shadow-sm
                      hover:shadow-xl hover:-translate-y-1
                      transition-all duration-300
                    "
                  >
                    <h3 className="text-base font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="text-sm bg-gray-50 text-secondary text-center p-5">
        Built by SV
      </div>

      {/* ===== AUTH MODAL ===== */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        {currentPage === "login" && (
          <Login setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "signup" && (
          <SignUp setCurrentPage={setCurrentPage} />
        )}
      </Modal>
    </>
  );
};

export default LandingPage;
