import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logomobile from "../assets/images/logomobile.png";

const Navbar = () => {
  return (
    <div>
      <div className="p-5  border-b border-[#C8CBD9]">
        <img className="w-[98px] h-[24px] hidden sm:block" src={logo} alt="logo" />
        <img className="w-[98px] h-[24px] block sm:hidden" src={logomobile} alt="logo" />
      </div>
      <div className="flex flex-col p-2 sm:p-5  py-10 gap-2">
        <div>
          <h4 className="text-[#082431] font-poppins text-[11px] font-normal leading-tight tracking-wide text-center  sm:px-5 sm:text-left ">Menu</h4>
        </div>
        <NavLink
          className="navmenu text-xxl flex items-center gap-2"
          to="/"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.591 8.42484H12.6669C12.9816 8.42484 13.2289 8.16461 13.2289 7.8508C13.2289 7.52934 12.9816 7.27677 12.6669 7.27677H10.591C10.2762 7.27677 10.0289 7.52934 10.0289 7.8508C10.0289 8.16461 10.2762 8.42484 10.591 8.42484ZM15.1324 4.44562C15.5896 4.44562 15.8893 4.60635 16.1891 4.95843C16.4889 5.3105 16.5413 5.81565 16.4739 6.27412L15.7619 11.295C15.627 12.2602 14.8177 12.9712 13.8659 12.9712H5.68979C4.69307 12.9712 3.86871 12.1913 3.78627 11.181L3.09681 2.83755L1.96519 2.63855C1.66543 2.58498 1.45559 2.28648 1.50805 1.98032C1.56051 1.66728 1.85278 1.45987 2.16004 1.50655L3.9474 1.78133C4.2022 1.82801 4.38955 2.04156 4.41204 2.30179L4.55443 4.01624C4.57691 4.26193 4.77176 4.44562 5.01157 4.44562H15.1324ZM5.56973 14.1809C4.94023 14.1809 4.43062 14.7014 4.43062 15.3443C4.43062 15.9795 4.94023 16.5 5.56973 16.5C6.19175 16.5 6.70135 15.9795 6.70135 15.3443C6.70135 14.7014 6.19175 14.1809 5.56973 14.1809ZM14.0007 14.1809C13.3712 14.1809 12.8616 14.7014 12.8616 15.3443C12.8616 15.9795 13.3712 16.5 14.0007 16.5C14.6227 16.5 15.1323 15.9795 15.1323 15.3443C15.1323 14.7014 14.6227 14.1809 14.0007 14.1809Z"
              fill="currentColor"
            />
          </svg>
          <span className="navmenuitem hidden sm:block">Create Food</span>
        </NavLink>
        <NavLink
          className="navmenu text-xxl flex items-center gap-2"
          to="/allfood"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.8575 1.5H12.1432C14.46 1.5 15.75 2.835 15.75 5.1225V12.87C15.75 15.195 14.46 16.5 12.1432 16.5H5.8575C3.5775 16.5 2.25 15.195 2.25 12.87V5.1225C2.25 2.835 3.5775 1.5 5.8575 1.5ZM6.06011 4.995V4.9875H8.30185C8.6251 4.9875 8.8876 5.25 8.8876 5.57175C8.8876 5.9025 8.6251 6.165 8.30185 6.165H6.06011C5.73686 6.165 5.47511 5.9025 5.47511 5.58C5.47511 5.2575 5.73686 4.995 6.06011 4.995ZM6.06011 9.555H11.9401C12.2626 9.555 12.5251 9.2925 12.5251 8.97C12.5251 8.6475 12.2626 8.38425 11.9401 8.38425H6.06011C5.73686 8.38425 5.47511 8.6475 5.47511 8.97C5.47511 9.2925 5.73686 9.555 6.06011 9.555ZM6.06002 12.9825H11.94C12.2393 12.9525 12.465 12.6968 12.465 12.3975C12.465 12.09 12.2393 11.835 11.94 11.805H6.06002C5.83502 11.7825 5.61752 11.8875 5.49752 12.0825C5.37752 12.27 5.37752 12.5175 5.49752 12.7125C5.61752 12.9 5.83502 13.0125 6.06002 12.9825Z"
              fill="currentColor"
            />
          </svg>
          <span className="navmenuitem hidden sm:block">All Food</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
