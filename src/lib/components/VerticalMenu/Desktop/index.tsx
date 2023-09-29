// import { v4 as uuidv4 } from "uuid";
import { ChevronDown, ChevronRight } from "react-feather";
import { VerticalMenuPropTypes } from "../../../types";

const DesktopVerticalMenu = ({
  menus,
  containerClassNames,
  menuType,
}: VerticalMenuPropTypes) => {
  return (
    <div
      className={`relative ${
        menuType === "desktop" ? "!block !lg:block" : "hidden lg:block"
      } hidden lg:block h-full w-60 bg-gray-100 overflow-y-auto no-scrollbar transition-all duration-1000 ${containerClassNames}`}
    >
      {/* <div className="h-16 px-6"></div> */}

      {/* <div className="text-xs py-4 px-6 uppercase font-light">Your Account</div> */}
      {menus?.map((menu, index) => {
        return (
          <div key={index}>
            {menu?.active && (
              <div
                onClick={() => menu?.onClickHandler()}
                className="bg-white flex space-x-4 cursor-pointer my-1 border-r"
              >
                <span className="h-12 w-2 bg-primary-600"></span>
                <div className="h-12 w-full flex items-center space-x-4 text-primary-600">
                  <div className="w-full flex items-center space-x-4">
                    {menu?.icon && (
                      <span className="h-5 w-5 opacity-75">{menu?.icon}</span>
                    )}
                    <span className="font-normal w-fit">{menu?.name}</span>
                  </div>

                  <div className="flex items-center justify-end px-4">
                    {(menu?.items?.length > 0) &&  <ChevronDown className="h-4 w-4 text-gray-400 font-thin" />}
                  </div>
                </div>
              </div>
            )}

            {!menu.active && (
              <div
                onClick={() => menu?.onClickHandler()}
                className="relative overflow-hidden bg-transparent flex space-x-2 group transition-all duration-1000 cursor-pointer my-1 "
              >
                <span className="h-12 scale-y-0 group-hover:scale-y-100 relative group-hover:opacity-100 opacity-0 w-2 group-hover:bg-primary-600 duration-700 transition-all ease-in-out"></span>
                <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>

                <div className="h-12 w-full relative flex items-center space-x-4 pl-2 group-hover:text-primary-600">
                  <div className="w-full flex items-center space-x-4">
                    {menu?.icon && (
                      <span className="h-5 w-5 opacity-75">{menu?.icon}</span>
                    )}
                    <span className="font-normal w-fit">{menu?.name}</span>
                  </div>
                  <div className="flex items-center justify-end px-4">
                    {(menu?.items?.length > 0) && <ChevronRight className="h-4 w-4 text-gray-400 font-thin" />}
                  </div>
                </div>
              </div>
            )}

            <div
              className={`relative top-0 transition-all duration-700 -translate-y-32 ${
                menu?.active ? "h-auto translate-y-0" : "overflow-hidden h-0"
              }`}
            >
              <ul className="w-full text-sm pl-16 py-2 bg-white border-r">
                {menu?.items?.map((item) => {
                  return (
                    <li
                      key={item?.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        item?.onClickHandler();
                      }}
                      className={`cursor-pointer py-2 ${
                        item?.active ? "text-active" : ""
                      }`}
                    >
                      {item?.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}

      {/* <div className="h-20 w-full"></div> */}
    </div>
  );
};

export default DesktopVerticalMenu;
