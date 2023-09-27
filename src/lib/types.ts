type NavigationMenuItem = {
  id: string;
  name: string;
  active: boolean;
  onClickHandler: () => void;
  items: Array<{
    id: string;
    name: string;
    active: boolean;
    onClickHandler: () => void;
  }>;
  icon: string | JSX.Element;
};

type VerticalMenuPropTypes = {
  menus: Array<NavigationMenuItem>;
  title?: string;
  containerClassNames?: string;
  logout?: () => void;
  menuType?: string;
};

export type { NavigationMenuItem, VerticalMenuPropTypes };
