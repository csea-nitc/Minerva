"use client";

import { useState } from "react";
import YearCard from "../components/cards/YearCard";
import ImageHero from "../components/imagehero/Imagehero";
import Modal from "../components/modal/Modal";

export default function Alumnus() {
  const [showModal, setShowModal] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleOpenModal = (year) => {
    setSelectedYear(year);
    setShowModal(true);
  };

  return (
    <>
      <div>
        <ImageHero
          title="Alumnus"
          font={"65px"}
          mobileFont={"55px"}
          contentdiv={".content-div"}
        />
        <div className="px-[10%] md:px-[15%] py-10 mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white flex flex-wrap gap-6 justify-center">
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2025)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2027)} />
          <YearCard year={2023} onClick={() => handleOpenModal(202123)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
          <YearCard year={2023} onClick={() => handleOpenModal(2023)} />
        </div>
        {showModal && (
          <>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
              <p>jdghfuihew {selectedYear}</p>
            </Modal>
          </>
        )}
      </div>
    </>
  );
}
