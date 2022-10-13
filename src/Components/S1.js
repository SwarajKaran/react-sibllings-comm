const S1 = (props) => {
  let color = "yellow";
  if (props.clicked) color = "red";
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <strong>Sibling 1</strong>
    </div>
  );
};

export default S1;
