import "./index.css";
import NewsData from "../../staticInfo/News.json";

function NewsPanel() {
  return (
    <div id="news-panel">
      <span className="title">News</span>
      <div className="news-list">
        {NewsData.map((news, index) => (
          <div key={index} className="news-item">
            <div className="date">{news.date}</div>
            <div className="text">{news.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPanel;
