type WelcomeDivProps = {
  heading: string;
  subhead: string;
  analytics: boolean;
  activeUsers:number | null;
  deletedUsers:number | null;
  totalUsers:number | null
};

const WelcomeDiv: React.FC<WelcomeDivProps> = ({
  heading,
  subhead,
  activeUsers,
  deletedUsers,
  totalUsers,
  analytics,
}) => {
  return (
    <div className="flex gap-9 items-center">
      <div className="rounded-2xl px-8 py-7 w-full xl:w-1/2 bg-gradient-to-br from-black to-[#686767] via-[#222121] shadow-lg">
        <p className="text-white font-semibold text-[30px]">{heading}</p>
        <div className="w-full bg-[#4d4c4c] p-4 rounded-lg mt-2">
          {analytics ? (
            <>
            <div className="flex items-center gap-1">
            <p className="text-[#cfcccc] text-[18px] ">Total Users: </p>
            <p className="text-white font-semibold text-[18px]">{totalUsers}</p>
            </div>
            <div className="flex items-center gap-1">
            <p className="text-[#cfcccc] text-[18px] ">Active Users: </p>
            <p className="text-white font-semibold text-[18px]">{activeUsers}</p>
            </div>
            <div className="flex items-center gap-1">
            <p className="text-[#cfcccc] text-[18px] ">Deleted Users: </p>
            <p className="text-white font-semibold text-[18px]">{deletedUsers}</p>
            </div>
            </>
          ) : (
            <>
              <p className="text-[#cfcccc] text-sm mb-2">{subhead}</p>
              <p className="text-white text-[30px] font-bold">{totalUsers}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeDiv;
