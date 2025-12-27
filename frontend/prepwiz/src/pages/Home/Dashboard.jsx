import { LuPlus } from "react-icons/lu";
import { CARD_BG } from "../../utils/data";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosinstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/ApiPaths";
import SummaryCard from "../../components/Cards/SummaryCard";
import moment from "moment";
import Modal from "../../components/Modal";
import CreateSessionForm from "./CreateSessionForm";
import DeleteAlertContent from "../../components/DeleteAlertContent";

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);

  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosinstance.get(API_PATHS.SESSION.GET_ALL);
      setSessions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSession = async (sessionData) => {
    try {
      await axiosinstance.delete(
        API_PATHS.SESSION.DELETE(sessionData?._id)
      );
      toast.success("Session deleted successfully");
      setOpenDeleteAlert({ open: false, data: null });
      fetchAllSessions();
    } catch (error) {
      console.error("error deleting session data:", error);
    }
  };

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <DashboardLayout>
      {/* ===== Background Wrapper (Option 1) ===== */}
      <div
        className="
          min-h-[calc(100vh-64px)]
          bg-linear-to-br from-orange-100 via-white to-amber-100
          relative
        "
      >
        {/* Subtle dotted pattern */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(#e5e5e5_1px,transparent_1px)]
            [background-size:24px_24px]
            opacity-40
          "
        />

        <div className="container mx-auto pt-6 pb-10 relative z-10">
          {/* ===== Glass Section Wrapper  ===== */}
        <div
  className="
    bg-white/40
    backdrop-blur-md
    rounded-3xl
    border border-white/30
    shadow-[0_20px_40px_rgba(0,0,0,0.08)]
    px-4 md:px-6 py-6
  "
>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                gap-6
              "
            >
              {sessions.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                  <h3 className="text-xl font-semibold text-gray-700">
                    No sessions yet
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Create your first interview preparation session 🚀
                  </p>
                </div>
              )}

              {sessions?.map((data, index) => (
                <SummaryCard
                  key={data._id}
                  colors={CARD_BG[index % CARD_BG.length]}
                  role={data.role || ""}
                  topicsToFocus={data?.topicsToFocus || ""}
                  experience={data?.experience || "-"}
                  questions={data?.questions?.length || "-"}
                  description={data?.description || ""}
                  lastUpdated={
                    data?.updatedAt
                      ? moment(data.updatedAt).format("Do MMM YYYY")
                      : ""
                  }
                  onSelect={() =>
                    navigate(`/interview-prep/${data._id}`)
                  }
                  onDelete={() =>
                    setOpenDeleteAlert({ open: true, data })
                  }
                />
              ))}
            </div>
          </div>

          {/* ===== Floating Add Button (UNCHANGED) ===== */}
          <button
            className="
              h-12 md:h-12 flex items-center justify-center gap-4
              bg-linear-to-r from-[#FF9324] to-[#E99A4B]
              text-sm font-semibold text-white
              px-7 py-2.5 rounded-full
              hover:bg-black hover:text-white
              transition-colors cursor-pointer
              hover:shadow-2xl hover:shadow-orange-300
              fixed bottom-10 md:bottom-20 right-10 md:right-20
              hover:scale-105 duration-300
            "
            onClick={() => setOpenCreateModal(true)}
          >
            <LuPlus className="text-2xl text-white" />
            Add Session
          </button>
        </div>

        {/* ===== Create Modal ===== */}
        <Modal
          isOpen={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          hideHeader
        >
          <CreateSessionForm />
        </Modal>

        {/* ===== Delete Modal ===== */}
        <Modal
          isOpen={openDeleteAlert?.open}
          onClose={() =>
            setOpenDeleteAlert({ open: false, data: null })
          }
          title="Delete Alert"
        >
          <div className="w-[30vw]">
            <DeleteAlertContent
              content="Are you sure you want to delete this session detail?"
              onDelete={() =>
                deleteSession(openDeleteAlert.data)
              }
            />
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
