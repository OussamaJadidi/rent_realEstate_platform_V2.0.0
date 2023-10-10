"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUserPlus,
  faUser,
  faHeart,
  faBell,
  faRightFromBracket,
  faBars,
  faCircleDown,
  faHouseChimneyWindow,
  faHouseSignal,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import useHandlePopUp from "@/lib/useHandlePopUp";
import { Container } from "@/components";

export default function Header() {
  // const [open, setOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement | null>(null);
  const popupTriggerRef = useRef<HTMLSpanElement | null>(null);
  const [open, togglePopup] = useHandlePopUp(popupTriggerRef, popupRef);

  const hambergerNavbar = useRef<HTMLDivElement | null>(null);
  const mobileNavBar = useRef<HTMLDivElement | null>(null);
  const [openMenu, toggleMenuPopup] = useHandlePopUp(
    hambergerNavbar,
    mobileNavBar
  );

  return (
    <header className="Container bg-sky-50  ">
      <Container className="h-20 max-sm:h-22 font-medium |  flex justify-between items-center font-sans">
        <span className="text-4xl text-blue-800 font-sans ">EstateElite</span>
        <ul className="flex gap-4  max-sm:hidden font-rubik">
          <li className="cursor-pointer hover:text-blue-800 transition-all">
            Buy
          </li>
          <li className="cursor-pointer hover:text-blue-800 transition-all">
            Rent
          </li>
          <li className="cursor-pointer hover:text-blue-800 transition-all">
            Add Property
          </li>
          <li>
            <div className="">
              <span className="text-xl flex gap-2 relative">
                <span
                  onClick={togglePopup}
                  ref={popupTriggerRef}
                  className=" cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ width: "1.5rem" }}
                  />
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: ".75rem" }}
                  />
                </span>
                {open && (
                  <div
                    ref={popupRef}
                    className="z-20 absolute top-[2rem] right-0 left-[-9rem] | w-40 h-60"
                  >
                    <ul className="w-[12rem] bg-white rounded-xl font-sans font-sm cursor-pointer border border-gray-400 overflow-hidden py-2">
                      <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                        <FontAwesomeIcon
                          style={{ paddingInline: ".7rem" }}
                          icon={faBell}
                        />
                        Bookings
                      </li>
                      <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                        <FontAwesomeIcon
                          style={{ paddingInline: ".7rem" }}
                          icon={faHeart}
                        />
                        Favorites
                      </li>
                      <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                        <FontAwesomeIcon
                          style={{ paddingInline: ".7rem" }}
                          icon={faUserPlus}
                        />
                        Sign up
                      </li>
                      <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                        <FontAwesomeIcon
                          style={{ paddingInline: ".7rem" }}
                          icon={faRightFromBracket}
                        />
                        Sign out
                      </li>
                      <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                        <FontAwesomeIcon
                          style={{ paddingInline: ".7rem" }}
                          icon={faUser}
                        />
                        Sign in
                      </li>
                    </ul>
                  </div>
                )}
              </span>
            </div>
          </li>
        </ul>
        <div className="sm:hidden relative z-30">
          <span
            ref={hambergerNavbar}
            onClick={toggleMenuPopup}
            className=" cursor-pointer"
          >
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faBars} />
          </span>
          {openMenu && (
            <div
              className="absolute top-[2rem] right-0 cursor-pointer "
              ref={mobileNavBar}
            >
              <ul className="w-[12rem] bg-white rounded-xl  font-roboto font-sm cursor-pointer border border-gray-400 overflow-hidden py-2 shadow-2xl">
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faHouseChimneyWindow}
                  />
                  Buy
                </li>
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faHouseSignal}
                  />
                  Rent
                </li>
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faCircleDown}
                  />
                  Add Property
                </li>
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faBell}
                  />
                  Bookings
                </li>
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faHeart}
                  />
                  Favorites
                </li>
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faUserPlus}
                  />
                  Sign up
                </li>
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faRightFromBracket}
                  />
                  Sign out
                </li>
                <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                  <FontAwesomeIcon
                    style={{ paddingInline: ".7rem" }}
                    icon={faUser}
                  />
                  Sign in
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
