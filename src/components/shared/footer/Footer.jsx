import Image from "next/image";
import footerLogo from "@/assets/KeenKeeper.png";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded pt-20">
      <div className="text-center text-white">
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

        <h3 className="text-[16px] font-bold mt-6">Social Links</h3>
        <ul className="flex gap-3">
          <Link href="instagram.com">
            <FaInstagramSquare />
          </Link>
          <Link href="facebook.com">
            <FaFacebook />
          </Link>
          <Link href="twitter.com">
            <FaXTwitter />
          </Link>
        </ul>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
