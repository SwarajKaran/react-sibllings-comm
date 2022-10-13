const S2 = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.textContent.slice(-1));
    props.handleClick(+event.target.textContent.slice(-1));
  };
  return (
    <div className="App">
      <h1>Buttons in Sibling 2</h1>
      <button type="button" onClick={onClickHandler}>
        Change Sibling1
      </button>
      <button type="button" onClick={onClickHandler}>
        Change Sibling3
      </button>
    </div>
  );
};

export default S2;
