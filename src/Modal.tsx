import { useEffect, useRef, useState } from "react";
import './App.css'

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);
  let modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        console.log(modalRef);
        console.log(event);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    }
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