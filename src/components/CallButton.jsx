import { TbPhoneCall } from "react-icons/tb";

const CallButton = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
      <div className="text-[36px] mb-2">
        <TbPhoneCall />
      </div>
      <p className="text-[18px]">Call</p>
    </div>
  );
};

export default CallButton;
