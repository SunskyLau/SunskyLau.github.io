/**
 * Publication Component
 * Displays a list of academic publications with authors and details
 */
import person from "../../../staticInfo/person.json";
import academy from "../../../staticInfo/academy.json";

// Define TypeScript interfaces for data structures
interface PersonInfo {
  site: string;
  name: string;
}

interface PersonData {
  [key: string]: PersonInfo;
}

interface AcademyData {
  [key: string]: string;
}

interface AuthorProps {
  id: string;
}

interface AcademyProps {
  id: string;
  year?: number;
}

/**
 * Renders an author's name with optional link to their website
 */
function Author({ id }: AuthorProps) {
  // Special case for Yangtian Liu
  if (id === "ytliu") {
    return <strong>Yangtian Liu</strong>;
  }

  if (id in person) {
    const authorInfo = (person as PersonData)[id];
    return authorInfo.site ? 
      <a href={authorInfo.site}>{authorInfo.name}</a> : 
      <span>{authorInfo.name}</span>;
  }

  return <span>{id}</span>;
}

/**
 * Renders academic venue information with year
 */
function Academy({ id, year }: AcademyProps) {
  const venueName = id in academy ? (academy as AcademyData)[id] : id;
  
  return (
    <em>
      {venueName}, {year}
    </em>
  );
}

/**
 * Main Publication component that displays the publication list
 */
function Publication() {
  return (
    <div id="publication-container">
      <div className="title">Publication📄</div>
      <div className="publication-list">
        <div className="publication-item">
          <div className="teaser">
            <img 
              src="/publication_teasers/RidgeBuilder.png" 
              alt="RidgeBuilder Teaser" 
              style={{ width: "200px", height: "auto" }} 
            />
          </div>
          <div className="publication-info">
            <strong>RidgeBuilder: Interactive Authoring of Expressive Ridgeline Plots.</strong>{" "}
            <Author id="shliu" />, <Author id="ytliu" />,{" "}
            <Author id="jxli" />, <Author id="ywhuang" />, <Author id="yshangguan" />, <Author id="zkdeng"/>, <Author id="dweng" />, <Author id="ycwu" />.{" "}
            <Academy id="chi" year={2025} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
