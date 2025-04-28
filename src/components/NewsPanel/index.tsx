import "./index.css";
import { useEffect, useState } from "react";

function NewsPanel() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      id="news-panel" 
      className={
        isMobile 
          ? "news-panel-mobile" 
          : isTablet 
            ? "news-panel-tablet" 
            : ""
      }
    >
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
          <div className="text">I graduated from Hunan University!</div>
        </div>
      </div>
    </div>
  );
}

export default NewsPanel;
