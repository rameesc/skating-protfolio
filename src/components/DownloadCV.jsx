import { useState } from "react";

export default function DownloadCV() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  const handleDownload = () => {
    if (code === "SKATE2026") {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "Ramees_C_CV.pdf";
      link.click();

      setOpen(false);
      setCode("");
       alert("DOWNLOADED SUCCESSFULLY");
    } else {
      alert("Invalid Security Code");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className =" fixed top-[20px] z-10 px-2 py-1 right-1 bg-red-600 text-white cursor-pointer  rounded-lg"
      >
        Download CV
      </button>

      {open && (
        <div className="fixed  z-50 inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-2xl font-bold mb-4">
              Enter Security Code
            </h2>

            <input
              type="text"
              placeholder="Enter Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleDownload}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Verify & Download
              </button>

              <button
                onClick={() => setOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}