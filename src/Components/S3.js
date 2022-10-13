const S3 = (props) => {
  let color = "lime";
  if (props.clicked) color = "red";
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <strong>Sibling 3</strong>
    </div>
  );
};

export default S3;
