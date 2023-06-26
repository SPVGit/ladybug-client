import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {

  const handleOutsideClick = e => {
  
    if (Object.values(e.target)[0].elementType === 'div') {
     
      callback();
    }
   
  
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
};

export default useOutsideClick;