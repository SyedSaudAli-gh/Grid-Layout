import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-10 p-4 py-20 row-span-10 text-center gap-5 rou bg-[#fceecb]">
        <div className="bg-[#70d9d2] p-4 col-span-2 row-span-10 font-bold rounded-md">
          AG-1
        </div>

        <div className="bg-[#fbe7b2] p-4 col-span-6 h-14 font-bold rounded-md gap-0	">
          AG-2
        </div>
        <div className="bg-[#70d9d2] p-4 col-span-2 row-span-10  font-bold rounded-md">
          AG-3
        </div>
        <div className="bg-[#efa09c] p-4 col-span-3 h-14 rounded-md">AG-4</div>
        <div className="bg-[#efa09c] p-4 col-span-3 h-14 rounded-md">AG-5</div>
        <div className="bg-[#f39770] p-4 col-span-2  row-span-8 rounded-md	">
          AG-6
        </div>

        <div className="bg-[#f9d77e] p-4 col-span-4 h-14 rounded-md">AG-7</div>
        <div className="bg-[#efa19c] p-4 col-span-2  h-14 rounded-md">AG-8</div>
        <div className="bg-[#efa19c] p-4 col-span-2 h-14 rounded-md">AG-9</div>

        <div className="bg-[#eba1c4] p-4 col-span-4 row-span-6 rounded-md">
          AG-10
        </div>
      </div>
    </>
  );
}
