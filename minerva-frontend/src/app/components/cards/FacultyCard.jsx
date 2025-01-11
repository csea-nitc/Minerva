import Modal from "../modal/Modal";

export default function FacultyCard({ faculty }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="mx-auto relative overflow-hidden w-fit rounded-xl group"
        onClick={() => setShowModal(true)}
      >
        <div>
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-[350px] h-[400px] object-cover group-hover:scale-[1.04] duration-300"
          />
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="px-4 py-2 m-2 bg-white/90 rounded-md flex flex-col items-center">
            <p className="font-semibold font-jakarta text-lg">{faculty.name}</p>
            <p className="font-jakarta text-lg text-gray-500">
              {faculty.designation}
            </p>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)}></Modal>
      )}
    </>
  );
}
