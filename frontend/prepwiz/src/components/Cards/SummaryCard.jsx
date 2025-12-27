import { LuTrash2 } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
  className="
    bg-white 
    border border-gray-200
    rounded-xl 
    p-2
    min-h-[200px]
    w-full max-w-full

    overflow-hidden 
    cursor-pointer 
    shadow-md
    hover:shadow-2xl
    hover:-translate-y-0.5
    hover:ring-1 hover:ring-gray-300
    transition-all duration-300 ease-out
    relative group
  "
  onClick={onSelect}
>
      <div
  className="
    rounded-lg 
    p-8
    cursor-pointer 
    relative
    transition-all duration-300
    group-hover:brightness-[0.98]
  "
  style={{
    background: colors.bgcolor,
  }}
>

        <div className="flex items-start">
          <div className="shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4">
            <span className="text-2xl font-bold text-black">
              {getInitials(role)}
            </span>
          </div>

          <div className="grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[19px] font-medium">{role}</h2>
                <p className="text-xs font-medium text-gray-900">
                  {topicsToFocus}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
  className="
    hidden group-hover:flex 
    items-center gap-2 
    text-xs text-rose-500 font-medium 
    bg-rose-50 px-3 py-1 
    rounded-full 
    border border-rose-100 
    hover:border-rose-300 
    hover:bg-rose-100
    transition-all duration-200
    absolute top-2 right-2
  "
  onClick={(e) => {
    e.stopPropagation();
    onDelete();
  }}
>
  <LuTrash2 />
</button>

      </div>

      <div className="px-3 pb-3">
        <div className="flex items-center gap-3 mt-4">
          <div className="text-[10px] font-medium text-black px-3 py-1 border-[0.5px] border-gray-900  rounded-full">
            Experience {experience} {experience == 1 ? "Year" : "Years"}
          </div>

          <div className="text-[10px] font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full">
            {questions} Q&A
          </div>
          <div className="text-[10px] font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full">
            Last Updated: {lastUpdated}
          </div>
        </div>

        <p className="text-[12px] text-gray-500 font-medium line-clamp-2 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;