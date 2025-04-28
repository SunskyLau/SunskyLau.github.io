import "./App.css";
import MainContent from "./components/MainContent";
import NewsPanel from "./components/NewsPanel";
import NavigationPanel from "./components/NavigationPanel";
import Profile from "./components/MainContent/Profile";
import Publication from "./components/MainContent/Publication";
import { useState, useEffect } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavigationPanel />
      <div id="App">
        {isMobile ? (
          <>
            <div id="mobile-profile" className="mobile-section left-aligned">
              <Profile />
            </div>
            
            <div id="mobile-news" className="mobile-section left-aligned">
              <NewsPanel />
            </div>
            
            <div id="mobile-publication" className="mobile-section left-aligned">
              <Publication />
            </div>
          </>
        ) : (
          <>
            <div className="desktop-main-content left-aligned">
              <MainContent />
            </div>
            <div className="desktop-news-panel left-aligned">
              <NewsPanel />
            </div>
          </>
        )}
      </div>
    </>
  );
}
