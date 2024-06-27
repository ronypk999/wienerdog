const Stats = () => {
  return (
    <>
      <div className="grid py-6 gap-3 place-items-center text-white grid-cols-2 bg-transparent md:grid-cols-4 shadow border-y-4 border-[#8968b9] ">
        <div className="">
          <div className="stat-title text-white">Downloads</div>
          <div className="stat-value">31K</div>
        </div>

        <div className="">
          <div className="stat-title text-white">New Users</div>
          <div className="stat-value">4,200</div>
        </div>

        <div className="">
          <div className="stat-title text-white">New Registers</div>
          <div className="stat-value">1,200</div>
        </div>
        <div className="">
          <div className="stat-title text-white">New Registers</div>
          <div className="stat-value">1,200</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
