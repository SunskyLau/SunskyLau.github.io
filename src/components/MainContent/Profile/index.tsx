import { useEffect, useState } from "react";

/**
 * 个人资料组件
 * 根据屏幕大小自动调整头像和文本的排列方式
 * - 桌面版：文本在左，头像在右
 * - 移动版：文本在上，头像在下
 */
function Profile() {
  // 跟踪当前是否为移动设备视图
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 个人简介文本内容
  const profileText = (
    <div className="text">
      👋Hi! I'm Yangtian Liu (刘阳天). I'm currently a 2nd-year Phd student in Interactive Data Group <a href="https://zjuidg.org/">(ZJUIDG)</a>, Zhejiang
      Univerisity <a href="https://www.zju.edu.cn/">(ZJU)</a>, under the joint supervision of Prof. <a href="http://www.ycwu.org/">Yingcai Wu</a> and Prof.{" "}
      <a href="https://dwe.ng/en/about/">Di Weng</a>. Before that, I received my bachelor's degree in Computer Science and Technology in 2023 from Hunan
      Univerisity <a href="https://www.hnu.edu.cn/">(HNU)</a>
      .
      <br />
      <br />
      My research interests mainly focus on interactive time series analytics.
    </div>
  );

  // 头像内容
  const avatarContent = (
    <img 
      src="/avatar.jpg" 
      alt="Profile" 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
    />
  );

  return (
    <div id="profile-container">
      {isMobile ? (
        // 移动设备布局 - 文本在上，头像在下
        <>
          {profileText}
          <div id="avatar" className="compact-avatar mobile-avatar">
            {avatarContent}
          </div>
        </>
      ) : (
        // 桌面版布局 - 文本在左，头像在右
        <>
          {profileText}
          <div id="avatar" className="compact-avatar">
            {avatarContent}
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
