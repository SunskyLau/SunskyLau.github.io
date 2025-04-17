import "./index.css";

function NewsPanel() {
  return (
    <div id="news-panel">
      <span className="title">News🔥</span>
      <div className="news-list">
        <div className="news-item">
          <div className="date">Jan, 2025</div>
          <div className="text">Our paper RidgeBuilder has been accepted by CHI'25!</div>
        </div>
        <div className="news-item">
          <div className="date">July 20, 2023</div>
          <div className="text">I joined ZJUIDG in Zhejiang University!</div>
        </div>
        <div className="news-item">
          <div className="date">June 16, 2023</div>
          <div className="text">I graduated from Hunan University</div>
        </div>
      </div>
    </div>
  );
}

export default NewsPanel;
