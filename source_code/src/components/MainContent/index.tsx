import "./index.css";
import Publication from "./Publication";
import Profile from "./Profile";

function MainContent() {
  return (
    <div id="main-content" className="panel">
      <Profile />
      <Publication />
    </div>
  );
}

export default MainContent;
