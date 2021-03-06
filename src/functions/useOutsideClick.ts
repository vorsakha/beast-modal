import { useEffect } from "react";

function useOutsideClick(ref: any, action: () => void) {
  ref === undefined &&
    console.error("ref is not reachable | useOutsideClick hook");

  useEffect(() => {
    function handleClickOutside(event: { target: object }) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
}

export default useOutsideClick;
