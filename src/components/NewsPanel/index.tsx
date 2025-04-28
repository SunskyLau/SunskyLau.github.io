import "./index.css";
import { useEffect, useState } from "react";

/**
 * 新闻面板组件
 * 显示动态新闻信息，并根据屏幕大小调整样式
 */
function NewsPanel() {
  // 设备类型状态
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 设置合适的类名
  const getPanelClassName = () => {
    return isMobile ? "news-panel-mobile" : "";
  };

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
    <div id="news-panel" className={getPanelClassName()}>
      <span className="title">News🔥</span>
      <div className="news-list">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <div className="date">{item.date}</div>
            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPanel;
