
import "./Styles.css";

function CenterContainer({ content, heading="" }) {
  return (
    <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", width: "100vw"}}>
      <h1>{heading}</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "top", width: "60vw" }}>
       {content}
      </div>
    </div>
  );
}

export default CenterContainer;
