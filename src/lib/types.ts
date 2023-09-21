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
  logout?: () => void;
};

export type { NavigationMenuItem, VerticalMenuPropTypes };
