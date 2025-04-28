import "./App.css";
import MainContent from "./components/MainContent";
import NewsPanel from "./components/NewsPanel";
import NavigationPanel from "./components/NavigationPanel";
import Profile from "./components/MainContent/Profile";
import Publication from "./components/MainContent/Publication";
import { useState, useEffect } from "react";

/**
 * 主应用组件 - 负责整体页面布局和响应式设计
 * 根据屏幕宽度自动切换桌面版和移动版布局，1000px为分界点
 */
export default function App() {
  // 跟踪当前是否为移动设备视图
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  // 监听窗口大小变化，更新移动设备状态
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 导航面板在任何视图中都位于顶部 */}
      <div className="nav-container">
        <NavigationPanel />
      </div>

      {/* 主应用容器 */}
      <div id="App">
        {isMobile ? (
          // 移动设备布局 - 垂直排列各部分
          <>
            <Profile />
            <NewsPanel />
            <Publication />
          </>
        ) : (
          // 桌面布局 - 水平排列各部分
          <>
            <MainContent />
            <NewsPanel />
          </>
        )}
      </div>
    </>
  );
}
