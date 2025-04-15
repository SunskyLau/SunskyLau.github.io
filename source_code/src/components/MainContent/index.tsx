import "./index.css";

function MainContent() {
  return (
    <div id="main-content" className="panel">
      <div id="profile-container">
        <div className="text">
          Hi! I'm Yangtian Liu (刘阳天). I'm now a 2nd Phd student. My research interests mainly focus on time series visual analysis and LLMs
        </div>
        <div id="avatar"></div>
      </div>
      <div id="publication-container">
        <div className="title">Publication</div>
        <div className="publication-list">

        </div>
      </div>
    </div>
  );
}

export default MainContent;
