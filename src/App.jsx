import { useState } from "react";
import VerticatMenu from "./lib/components/VerticalMenu";
import { v4 as uuidv4 } from "uuid";
import {
  Send as SendIcon,
  Activity as ActivityIcon,
  Settings as SettingsIcon,
  Users as UsersIcon,
  Home as HomeIcon,
} from "react-feather";

function App() {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const menus = [
    {
      id: uuidv4(),
      name: "Home",
      get active() {
        return activeMenu == this.name;
      },
      onClickHandler: () => {
        //
      },
      items: [],
      icon: <HomeIcon/>,
    },
    {
      id: uuidv4(),
      name: "Customers",
      get active() {
        return activeMenu == this.name;
      },
      onClickHandler: () => {
        //
      },
      items: [],
      icon: <UsersIcon/>,
    },
    {
      id: uuidv4(),
      name: "SMS",
      get active() {
        return activeMenu == this.name;
      },
      onClickHandler: () => {
        setActiveMenu("SMS");
      },
      items: [
        {
          id: uuidv4(),
          name: "Compose",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            setActiveSubMenu("Compose");
            // router.push("/console/sms/compose");
          },
        },
        {
          id: uuidv4(),
          name: "Phonebooks",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            setActiveSubMenu("Phonebooks");
            // router.push("/console/sms/phonebooks");
          },
        },
      ],
      icon: <SendIcon />,
    },
    {
      id: uuidv4(),
      name: "Transactions",
      get active() {
        return activeMenu == this.name;
      },
      onClickHandler: () => {
        setActiveMenu("Transactions");
      },
      items: [
        {
          id: uuidv4(),
          name: "Deposits",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "Payouts",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "Transfers",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "Statements",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
      ],
      icon: <ActivityIcon />,
    },

    {
      id: uuidv4(),
      name: "Settings",
      get active() {
        return activeMenu == this.name;
      },
      onClickHandler: () => {
        setActiveMenu("Settings")
      },
      items: [
        {
          id: uuidv4(),
          name: "Profile",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "Settlement Accounts",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "Developer",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "API Key Management",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "Callback Webhooks",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
        {
          id: uuidv4(),
          name: "Developer Docs",
          get active() {
            return activeSubMenu == this.name;
          },
          onClickHandler: () => {
            //
          },
        },
      ],
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div className="h-screen max-h-screen">
      <VerticatMenu menus={menus} />
    </div>
  );
}

export default App;
