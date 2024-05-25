// eslint-disable-next-line react/prop-types
const Skill = ({ title, value }) => {
  return (
    <div className=" w-full ">
      <label className="text-white  flex justify-between">
        <span>{title}</span> <span>{value}%</span>
      </label>
      <div className="w-full h-2 rounded-full bg-black ">
        <div
          className={`h-2 rounded-full bg-[#27AE60] `}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
