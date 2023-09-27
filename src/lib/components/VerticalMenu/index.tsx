import { VerticalMenuPropTypes } from "../../types";
import DesktopVerticalMenu from "./Desktop";
import MobileVerticalMenu from "./Mobile";
import "../../../index.css";

const VerticatMenu = ({
  menus,
  title,
  containerClassNames,
  menuType,
}: VerticalMenuPropTypes) => {
  return (
    <>
      {menuType === "mobile" ? (
        <MobileVerticalMenu
          containerClassNames={containerClassNames}
          title={title}
          menus={menus}
          menuType={menuType}
        />
      ) : menuType === "desktop" ? (
        <DesktopVerticalMenu
          containerClassNames={containerClassNames}
          title={title}
          menus={menus}
          menuType={menuType}
        />
      ) : (
        <>
          <DesktopVerticalMenu
            containerClassNames={containerClassNames}
            title={title}
            menus={menus}
            menuType={menuType}
          />
          <MobileVerticalMenu
            containerClassNames={containerClassNames}
            title={title}
            menus={menus}
            menuType={menuType}
          />
        </>
      )}
    </>
  );
};

export default VerticatMenu;
