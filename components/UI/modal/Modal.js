export default function Modal({ setIsOpen }) {
  return (
    <>
      <div className="flex-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4 lg:px-0">
        <div className="relative my-6 mx-auto ">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col min-w-[80vw] min-h-[20vh] bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 rounded-t">
              <video width="1550" height="1300" autoPlay="autoplay" controls>
                <source src={"/assets/video/video.mp4"} type="video/mp4" />
              </video>
            </div>

            <button
              className="text-[color:var(--primary-clr)] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
