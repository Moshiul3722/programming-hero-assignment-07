import { AiOutlineHome } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import MyLinks from "./MyLinks";
import Link from "next/link";
const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <AiOutlineHome />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <RiTimeLine />,
    },
    {
      path: "/status",
      text: "Status",
      icon: <FaChartLine />,
    },
  ];
  return (
    <div className="shadow-sm">
      <div className="container mx-auto navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <span className="font-extrabold text-2xl text-black">
              Keen<span className="font-normal text-[#244D3F]">Keeper</span>
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
              <MyLinks key={index} href={item.path}>
                <span className="flex items-center gap-2 text-[16px]">
                  {item.icon} {item.text}
                </span>
              </MyLinks>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
