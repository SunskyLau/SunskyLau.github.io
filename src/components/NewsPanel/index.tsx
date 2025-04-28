import "./index.css";

/**
 * 新闻面板组件
 * 显示动态新闻信息
 */
function NewsPanel() {
  // 新闻项数据
  const newsItems = [
    {
      date: "Jan, 2025",
      text: "Our paper RidgeBuilder has been accepted by CHI'25!"
    },
    {
      date: "July 20, 2023",
      text: "I joined ZJUIDG in Zhejiang University!"
    },
    {
      date: "June 16, 2023",
      text: "I graduated from Hunan University!"
    }
  ];

  return (
    <div id="news-panel">
      <span className="title">News🔥</span>
      <div className="news-list">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <div className="date"><i>{item.date}</i></div>
            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPanel;
