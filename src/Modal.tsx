import { useEffect, useRef, useState } from "react";
import "./App.css";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);
  let modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <h2>Modal</h2>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
