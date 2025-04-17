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
