import "./App.css";
import Content from "./components/Content";
import Drawer from "./components/Drawer";

export default function App() {
  return (
    <div id="main">
      <div id="hero">
        <Drawer />
        <Content />
      </div>
    </div>
  )
}
