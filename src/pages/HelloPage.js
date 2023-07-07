import { useState, useEffect } from "react";
import PopUp from "../components/PopUp";
const HelloPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setShowPopUp(true);
  }, []);

  const PopUpCloseHandler = () => {
    setShowPopUp(false);
  };
  return (
    <>
      <h2>hello page</h2>
      {showPopUp && <PopUp close={PopUpCloseHandler} />}
    </>
  );
};

export default HelloPage;
