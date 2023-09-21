// import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { NavigationMenuItem, VerticalMenuPropTypes } from "../../../types";
import ClickAwayListener from "react-click-away-listener";

const MobileVerticalMenu = ({ menus }: VerticalMenuPropTypes) => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (e: React.MouseEvent, menu: NavigationMenuItem) => {
    e.preventDefault();
    menu?.onClickHandler();
    setActiveMenu(menu?.name);
  };

  return (
    <div className="flex h-screen w-16 flex-col justify-between border-r bg-white md:hidden">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span className="flex justify-center items-center text-gray-500 h-10 w-10  rounded-lg bg-gray-200">
            F
          </span>
        </div>

        <div className="border-t border-gray-100">
          <nav className="flex flex-col p-2">
            <ul className="space-y-sm border-gray-100 pt-xs">
              {menus?.map((menu, index) => {
                return (
                  <li key={`${index}`} className="py-2">
                    <a
                      href="#"
                      onClick={(e) => {
                        handleMenuClick(e, menu);
                      }}
                      className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 active:bg-gray-50"
                    >
                      {menu?.icon && (
                        <span
                          className={`h-5 w-5 opacity-75 hover:text-active active:text-active ${
                            menu?.active ? "text-active" : ""
                          }`}
                        >
                          {menu?.icon}
                        </span>
                      )}

                      {menu?.items?.length && activeMenu == menu.name ? (
                        <ClickAwayListener
                          onClickAway={() => setActiveMenu("")}
                        >
                          <span
                            className={`absolute border left-full top-0 ml-2 px-2 py-1.5 font-medium opacity-100 z-[500] group-hover:opacity-100 group-active:opacity-100 group-hover:bg-gray-50 group-active:bg-gray-50 hover:bg-gray-50 active:bg-gray-50 w-40 group-active:block group-hover:block ${
                              activeMenu == menu.name ? "" : "hidden"
                            }`}
                          >
                            <nav
                              v-for="item in menu?.items"
                              className="flex flex-col space-y-4 border-l-[3px] border-green-500"
                            >
                              {menu?.items?.map((item, index) => {
                                return (
                                  <div
                                    onClick={() => item?.onClickHandler()}
                                    key={item?.id || index}
                                    className={`flex items-center  px-4 py-3 hover:text-green-700 hover:bg-green-50 active:bg-green-50 active:text-green-700 ${
                                      item?.active ? "text-active" : ""
                                    }`}
                                  >
                                    <span className="ml-3 text-sm font-medium">
                                      {item.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </nav>
                          </span>
                        </ClickAwayListener>
                      ) : (
                        <></>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileVerticalMenu;
