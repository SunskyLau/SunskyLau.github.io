import { useState, useEffect } from "react";

import "./App.css";
import MainContent from "./components/MainContent";
import NewsPanel from "./components/NewsPanel";
import NavigationPanel from "./components/NavigationPanel";

export default function App() {
  return (
    <>
      <NavigationPanel />
      <div id="App">
        <MainContent />
        <NewsPanel />
      </div>
    </>
  );
}

// // 示例论文数据
// const publications = [
//   {
//     id: 1,
//     title: "RidgeBuilder: A Framework for Ridge Regression",
//     authors: "你的名字, 合著者1, 合著者2",
//     venue: "会议/期刊名称, 年份",
//     links: [
//       { name: "PDF", url: "#" },
//       { name: "代码", url: "#" },
//       { name: "演示", url: "#" },
//     ],
//   },
//   {
//     id: 2,
//     title: "论文标题示例 2",
//     authors: "你的名字, 合著者1, 合著者2",
//     venue: "会议/期刊名称, 年份",
//     links: [
//       { name: "PDF", url: "#" },
//       { name: "代码", url: "#" },
//     ],
//   },
// ];

// // 导航项
// const navItems = [
//   { name: "Home", url: "#" },
//   { name: "Publication", url: "#publications" },
//   { name: "News", url: "#news" },
//   { name: "CV", url: "#" },
// ];

// // 新闻项接口
// interface NewsItem {
//   time: string;
//   content: string;
// }

// function App() {
//   const [news, setNews] = useState<NewsItem[]>([]);

//   // 加载新闻数据
//   useEffect(() => {
//     // 使用静态数据，实际项目中可以从API获取
//     setNews([
//       { time: "2024-06", content: "我们的论文《示例论文标题1》已被XXX会议接收！" },
//       { time: "2024-05", content: "我受邀参加了在北京举办的XXX学术研讨会，并做了题为《XXX》的报告。" },
//       { time: "2024-04", content: "我们的团队获得了XXX比赛的一等奖，感谢所有成员的努力！" },
//       { time: "2024-03", content: "我们的实验室招收2025年秋季入学的研究生，欢迎有兴趣的同学联系我。" },
//     ]);
//   }, []);

//   return (
//     <>
//       <div id="App">
//         {/* 导航栏 */}
//         <nav className="navbar">
//           <div className="navbar-left">{personalInfo.name}'s Homepage</div>
//           <div className="navbar-right">
//             {navItems.map((item, index) => (
//               <a key={index} href={item.url}>
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </nav>

//         <div className="main-content-wrapper">
//           <div className="main-content">
//             {/* 个人信息区域 */}
//             <section className="profile-section">
//               <img src={personalInfo.image} alt={personalInfo.name} className="profile-image" />
//               <div className="profile-info">
//                 <h1 className="profile-name">{personalInfo.name}</h1>
//                 <p className="profile-title">{personalInfo.title}</p>
//                 <p className="profile-bio">{personalInfo.bio}</p>
//                 <div className="contact-info">
//                   {personalInfo.contacts.map((contact, index) => (
//                     <div key={index} className="contact-item">
//                       <a href={contact.link} target="_blank" rel="noopener noreferrer">
//                         {contact.type}: {contact.value}
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* 论文发表区域 */}
//             <section id="publications" className="publications-section">
//               <h2 className="section-title">Publication</h2>
//               {publications.map((pub) => (
//                 <div key={pub.id} className="publication-item">
//                   <h3 className="publication-title">{pub.title}</h3>
//                   <p className="publication-authors">{pub.authors}</p>
//                   <p className="publication-venue">{pub.venue}</p>
//                   <div className="publication-links">
//                     {pub.links.map((link, index) => (
//                       <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
//                         [{link.name}]
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </section>
//           </div>
//         </div>
//       </div>

//       {/* 新闻侧边栏 */}
//       <aside className="news-sidebar">
//         <h2 className="section-title">News</h2>
//         {news.map((item, index) => (
//           <div key={index} className="news-item">
//             <p className="news-date">{item.time}</p>
//             <p className="news-content">{item.content}</p>
//           </div>
//         ))}
//       </aside>
//     </>
//   );
// }

// export default App;
