
import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {

  const [show,setShow] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll",() => {

      if(window.scrollY > 400){
        setShow(true);
      }
      else{
        setShow(false);
      }

    });

  },[]);

  return (
    <>
      {show && (

        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top:0,
              behavior:"smooth"
            })
          }
        >
          ↑
        </button>

      )}
    </>
  );
}

export default BackToTop;