import { useEffect, useState } from "react";

function Profile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="profile-container">
      {/* 桌面版布局 - 文本左侧，头像右侧 */}
      {!isMobile && (
        <>
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
          <div id="avatar">
            <img src="/avatar.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </>
      )}

      {/* 移动设备布局 - 文本和头像垂直排列 */}
      {isMobile && (
        <>
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
          <div id="avatar" className="mobile-avatar">
            <img src="/avatar.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
