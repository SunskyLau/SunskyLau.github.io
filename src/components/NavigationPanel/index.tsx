import "./index.css";

/**
 * 导航面板组件
 * 提供站点主要部分的导航链接
 * 在桌面版布局中显示在顶部区域
 */
function NavigationPanel() {
  return (
    <div id="navigation-panel">
      {/* 导航项目 - 可扩展添加更多导航选项 */}
      <div className="nav-item">Publication</div>
      <div className="nav-item">CV</div>
    </div>
  );
}

export default NavigationPanel;
