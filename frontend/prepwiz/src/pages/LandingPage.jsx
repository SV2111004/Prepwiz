import { useState } from "react";
import HERO_IMG from "../assets/hero-image.png";
import { APP_FEATURES } from "../utils/data";
import { LuSparkles } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";
import Login from "./Auth/Login";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    navigate("/dashboard");
  };

  return (
    <>
    <div className="w-full min-h-screen 
bg-linear-to-br from-[#FFF7E6] via-[#FFFDF7] to-[#FFFFFF]
relative overflow-hidden">



{/* RIGHT glow */}
<div className="w-[480px] h-[480px] bg-orange-400/20 blur-[100px] absolute top-40 right-[-200px]"></div>



      
      {/* blur background */}
      <div className="absolute -top-10 -left-10 w-[600px] h-[300px] 
        bg-[radial-gradient(circle,rgba(255,193,7,0.35)_0%,rgba(255,193,7,0.15)_40%,transparent_70%)] 
        blur-[120px]">
      </div>



      <div className="container mx-auto px-4 pt-6 pb-24 relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold text-black">PREPWIZ</div>

          <button
            className="px-4 py-2 rounded-lg bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-white font-semibold"
            onClick={() => setOpenAuthModal(true)}
          >
            Login / Sign Up
          </button>
        </header>

        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <div className="flex items-center justify-left mb-2">
              <div className="flex items-center gap-2 text-[13px] text-amber-700 font-semibold 
bg-amber-100 px-3 py-1 rounded-full border border-amber-500 shadow-sm">
                <LuSparkles/>AI Powered
              </div>
            </div>
            <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
            Ace Interviews with<br/>
           <span className="text-transparent bg-clip-text 
bg-gradient-to-r from-red-800 via-orange-500 to-amber-400
drop-shadow-[0_2px_6px_rgba(255,147,36,0.35)]
font-extrabold">
  AI-Powered
</span>{" "}


            Learning
          </h1>
          </div>
          
          <div className="w-full md:w-1/2">
          <p className="text-gray-900 mr-0 md:mr-20 mb-6 text-[17px]">
            Get role-specific questions, expand answers when you need them,
            dive deeper into concepts, and organize everything your way.
            From preparation to matery - your ultimate interview toolkit is here.
          </p>

          <button
            className="px-7 py-2.5 rounded-full bg-black text-white text-sm font-semibold rounded-full hover:bg-orange-300 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
            onClick={handleCTA}
          >
            Get Started
          </button>
        </div>
      </div>
      </div>
    </div>

    <div className="w-full min-h-full relative z-10 ">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img src={HERO_IMG} alt="Hero" className="w-[70vw] rounded-lg" />
          </section>
        </div>
      
        <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Features That Make You Shine
              </h2>

              <div className="flex flex-col items-center gap-8">
                {/* 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                      key={feature.id}
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
          SV
        </div>
      </div>

    <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}

          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>

    </>
  );
};

export default LandingPage;
