const Skill = ({ title, value }) => {
    return (
        <div className="bg-[#3f4255] p-4 max-w-fit rounded-sm ">
            <label className="text-white block">{title}</label>
            <progress className="progress progress-success w-60 bg-[#181920]" value={value} max="100"></progress>
        </div>
    );
};

export default Skill;