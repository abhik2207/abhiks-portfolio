import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Drawer from "./components/Drawer";

const closedDrawerStyle = {
  left: "-100%",
}

const openDrawerStyle = {
  left: "0%",
}

export default function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <div id="main">
      <div id="hero">
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} openDrawerStyle={openDrawerStyle} closedDrawerStyle={closedDrawerStyle} />
        <Content drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
      </div>
    </div>
  )
}
