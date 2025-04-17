import person from "../../../staticInfo/person.json";
import academy from "../../../staticInfo/academy.json";

function Publication() {
  return (
    <div id="publication-container">
      <div className="title">Publication📄</div>
      <div className="publication-list">
        <div className="publication-item">
          <div className="teaser">
            <img src="/publication_teasers/RidgeBuilder.png" alt="RidgeBuilder Teaser" style={{ width: "200px", height: "auto" }} />
          </div>
          <div className="publication-info">
            <strong>RidgeBuilder: Interactive Authoring of Expressive Ridgeline Plots.</strong> <Author id="shliu" />, <Author id="ytliu" />,{" "}
            <Author id="jxli" />, <Author id="ywhuang" />, <Author id="yshangguan" />, <Author id="zkdeng"/>, <Author id="dweng" />, <Author id="ycwu" />.{" "}
            <Academy id="chi" year={2025} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PersonInfo {
  site: string;
  name: string;
}

interface PersonData {
  [key: string]: PersonInfo;
}

function Author(props: { id: string }) {
  const { id } = props;

  if (id === "ytliu") {
    return <strong>Yangtian Liu</strong>;
  }

  if (id in person) {
    const authorInfo = (person as PersonData)[id];
    return authorInfo.site ? <a href={authorInfo.site}>{authorInfo.name}</a> : <span>{authorInfo.name}</span>;
  }

  return <span>{id}</span>;
}

interface AcademyData {
  [key: string]: string;
}

function Academy(props: { id: string; year?: number }) {
  const { id, year } = props;
  if (id in academy)
    return (
      <em>
        {(academy as AcademyData)[id]}, {year}
      </em>
    );
  else
    return (
      <em>
        {id}, {year}
      </em>
    );
}

export default Publication;
