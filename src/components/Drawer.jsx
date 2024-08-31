import "../stylesheets/Drawer.css";

export default function Drawer({ drawerIsOpen, setDrawerIsOpen, openDrawerStyle, closedDrawerStyle }) {
    return (
        <div id="drawer" style={drawerIsOpen ? openDrawerStyle : closedDrawerStyle}>
            <div id="drawer-main">
                <p>This is drawer</p>
                <button onClick={() => setDrawerIsOpen(false)}>Close</button>
            </div>
        </div>
    )
}
