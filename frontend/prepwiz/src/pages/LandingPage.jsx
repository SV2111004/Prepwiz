import { useContext, useRef, useState } from "react";
import HERO_IMG from "../assets/hero-image.png";
import { APP_FEATURES } from "../utils/data";
import { LuSparkles, LuArrowDown } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import { UserContext } from "../context/userContext";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const featuresRef = useRef(null);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) setOpenAuthModal(true);
    else navigate("/dashboard");
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-[#FFF7E6] via-[#FFFDF7] to-white overflow-hidden">
        
        {/* Background glows */}
        <div className="absolute top-32 right-[-200px] w-[420px] h-[420px] bg-orange-400/20 blur-[110px]" />
        <div className="absolute -top-10 -left-10 w-[520px] h-[260px] bg-[radial-gradient(circle,rgba(255,193,7,0.35)_0%,rgba(255,193,7,0.15)_40%,transparent_70%)] blur-[130px]" />

        <div className="container mx-auto px-4 pt-6 pb-28 relative z-10">

          {/* ================= NAVBAR ================= */}
          <header className="flex justify-between items-center mb-14 bg-white/40 backdrop-blur-md px-6 md:px-10 py-3 rounded-full shadow-sm border border-white/50">
            <div className="text-2xl md:text-3xl font-extrabold text-black">
              PREPWIZ
            </div>

            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                onClick={() => setOpenAuthModal(true)}
                className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-6 py-2.5 rounded-full hover:bg-black hover:text-white transition"
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* ================= HERO CARD ================= */}
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl border border-white/40 shadow-xl px-6 md:px-10 py-12">
            <div className="flex flex-col md:flex-row items-center gap-10">

              {/* LEFT */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-100 px-4 py-1 rounded-full border border-amber-400 shadow-sm">
                    <LuSparkles /> AI Powered
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Ace Interviews with <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-red-800 via-orange-500 to-amber-400 font-extrabold">
                    AI-Powered
                  </span>{" "}
                  Learning
                </h1>
              </div>

              {/* RIGHT */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-800 mb-6 text-base md:text-[17px]">
                  Get role-specific questions, expand answers when you need them,
                  dive deeper into concepts, and organize everything your way.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleCTA}
                    className="px-8 py-3 rounded-full bg-linear-to-r from-black to-gray-900 text-white text-sm font-semibold hover:from-orange-400 hover:to-amber-400 hover:text-black transition"
                  >
                    Get Started
                  </button>

                  <button
                    onClick={scrollToFeatures}
                    className="flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-black transition"
                  >
                    Explore <LuArrowDown />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <section className="flex justify-center -mt-36 relative z-10 px-4">
        <img
          src={HERO_IMG}
          alt="Hero"
          className="w-full max-w-5xl rounded-2xl shadow-2xl"
        />
      </section>

      {/* ================= FEATURES ================= */}
      <section
        ref={featuresRef}
        className="w-full mt-24 bg-linear-to-b from-[#FFFCEF] to-[#FFF9E6]"
      >
        <div className="container mx-auto px-4 pt-16 pb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
            Features That Make You Shine ✨
          </h2>

          <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl px-6 py-12">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {APP_FEATURES.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {APP_FEATURES.slice(3).map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-sm bg-gray-50 text-center p-5">
        Built by SV
      </footer>

      {/* ================= AUTH MODAL ================= */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
      </Modal>
    </>
  );
};

export default LandingPage;
