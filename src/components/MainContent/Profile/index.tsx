function Profile() {
  return (
    <div id="profile-container">
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
    </div>
  );
}

export default Profile;
