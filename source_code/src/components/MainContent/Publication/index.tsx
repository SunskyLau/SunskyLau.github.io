import person from "../../../staticInfo/person.json";

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
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <div className="publication-info">
            <strong>RidgeBuilder: Interactive Authoring of Expressive Ridgeline Plots.</strong> <Author id="shliu" /> <Author id="ytliu" />
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
  person: {
    [key: string]: PersonInfo;
  };
}

function Author(props: { id: string }) {
  const { id } = props;

  if (id === "ytliu") {
    return <strong>Yangtian Liu</strong>;
  }

  if (id in person.person) {
    const authorInfo = (person as PersonData).person[id];
    return authorInfo.site ? <a href={authorInfo.site}>{authorInfo.name}</a> : <span>{authorInfo.name}</span>;
  }

  return <span>{id}</span>;
}

export default Publication;
