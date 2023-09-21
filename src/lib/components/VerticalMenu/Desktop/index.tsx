// import { v4 as uuidv4 } from "uuid";
import { VerticalMenuPropTypes } from "../../../types";

const DesktopVerticalMenu = ({ menus }: VerticalMenuPropTypes) => {
  return (
    <div className="relative hidden md:block h-full w-60 bg-gray-100 overflow-y-auto no-scrollbar transition-all duration-1000">
      <div className="h-16 px-6"></div>

      <div className="text-xs py-4 px-6 uppercase font-light">Your Account</div>
      {menus?.map((menu, index) => {
        return (
          <div key={index}>
            {menu?.active && (
              <div
                
                onClick={() => menu?.onClickHandler()}
                className="bg-white flex space-x-4 cursor-pointer my-1 border-r"
              >
                <span className="h-16 w-2 bg-primary-600"></span>
                <div className="h-16 flex items-center space-x-4 text-primary-600">
                  {menu?.icon && (
                    <span className="h-5 w-5 opacity-75">{menu?.icon}</span>
                  )}
                  <span className="font-normal">{menu?.name}</span>
                </div>
              </div>
            )}

            {!menu.active && (
              <div
                onClick={() => menu?.onClickHandler()}
                className="relative overflow-hidden bg-transparent flex space-x-2 group transition-all duration-1000 cursor-pointer my-1 border-b-2 border-gray-200"
              >
                <span className="h-16 scale-y-0 group-hover:scale-y-100 relative group-hover:opacity-100 opacity-0 w-2 group-hover:bg-primary-600 duration-700 transition-all ease-in-out"></span>
                <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>

                <div className="h-16 relative flex items-center space-x-4 pl-2 group-hover:text-primary-600">
                  {menu?.icon && (
                    <span className="h-5 w-5 opacity-75">{menu?.icon}</span>
                  )}
                  <span className="font-normal">{menu?.name}</span>
                </div>
              </div>
            )}

            <div
              className={`relative top-0 transition-all duration-700 -translate-y-32 ${
                menu?.active ? 'h-auto translate-y-0' : 'overflow-hidden h-0'
              }`}
            >
              <ul className="w-full text-sm pl-16 py-2 bg-white border-r">
                {menu?.items?.map((item) => {
                  return (
                    <li
                      key={item?.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        item?.onClickHandler()
                      }}
                      className={`cursor-pointer py-2 ${
                        item?.active ? "text-green-700" : ""
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

      <div className="h-20 w-full"></div>
    </div>
  );
};

export default DesktopVerticalMenu;
