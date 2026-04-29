import Image from "next/image";
import footerLogo from "@/assets/KeenKeeper.png";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded pt-20">
      <div className="text-center text-white w-7xl">
        <div>
          <Image
            src={footerLogo}
            alt="KeenKeeper"
            width={300}
            height={50}
          ></Image>
        </div>
        <p className="text-white">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="text-[18px] font-bold mt-6 mb-4">Social Links</h3>
        <ul className="flex gap-3">
          <li className="w-8 h-8 rounded-full bg-white text-black flex justify-center items-center text-[20px]">
            <Link href="instagram.com">
              <FaInstagramSquare />
            </Link>
          </li>
          <li className="w-8 h-8 rounded-full bg-white text-black flex justify-center items-center text-[20px]">
            <Link href="facebook.com">
              <FaFacebook />
            </Link>
          </li>
          <li className="w-8 h-8 rounded-full bg-white text-black flex justify-center items-center text-[20px]">
            <Link href="twitter.com">
              <FaXTwitter />
            </Link>
          </li>
        </ul>

        <aside className="flex justify-between w-full py-7 mt-7 border border-t-sky-100/10 border-l-0 border-r-0 border-b-0">
          <div>
            &copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.
            Industries Ltd
          </div>
          <div>
            <ul className="flex justify-end gap-4">
              <li>
                <link href="#"></link>Privacy Policy
              </li>
              <li>
                <link href="#"></link>Terms of Service
              </li>
              <li>
                <link href="#"></link>Cookies
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
