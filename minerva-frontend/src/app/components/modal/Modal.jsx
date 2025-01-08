import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, children }) {
  const dialog = useRef(null);

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialog}
      className="bg-white rounded-lg shadow-lg w-[70%] max-w-lg"
      onClose={onClose}
    >
      <div className="flex flex-col items-center text-center">
        <button
          onClick={onClose}
          className="flex justify-end w-full bg-[#800080] px-4 py-2"
        >
          <span className="text-white">X</span>
        </button>
        {children}
      </div>
    </dialog>
  );
}
