import { VerticalMenuPropTypes } from "../../types";
import DesktopVerticalMenu from "./Desktop";
import MobileVerticalMenu from "./Mobile";

const VerticatMenu = ({menus} : VerticalMenuPropTypes) => {
    return(
    <>
    <DesktopVerticalMenu menus={menus}/>
    <MobileVerticalMenu menus={menus}/>
    </>
    );
}

export default VerticatMenu;