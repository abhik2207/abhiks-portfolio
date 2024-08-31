import "../stylesheets/Content.css";

export default function Content({ drawerIsOpen, setDrawerIsOpen }) {
    return (
        <div id="content">
            <div id="content-main">
                <p>This is content</p>
                <button onClick={() => setDrawerIsOpen(true)}>Open</button>
            </div>
        </div>
    )
}
