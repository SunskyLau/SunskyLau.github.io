import "./index.css";
import Publication from "./Publication";
import Profile from "./Profile";

/**
 * 主内容区域组件
 * 组合显示个人资料和出版物信息
 * 在桌面版布局中显示在左侧区域
 */
function MainContent() {
  return (
    <div id="main-content" className="panel">
      {/* 个人资料部分 */}
      <Profile />
      
      {/* 出版物部分 */}
      <Publication />
    </div>
  );
}

export default MainContent;
