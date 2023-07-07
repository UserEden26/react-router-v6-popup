const PopUp = (props) => {
  return (
    <section>
      <p>hello from the pop up</p>
      <button onClick={props.close}>close / ok</button>
    </section>
  );
};

export default PopUp;
