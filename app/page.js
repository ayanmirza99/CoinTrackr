"use client";
import Moadal3d from "./components/Modal3d";

const page = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <div className="w-full h-[92vh] md:h-[88vh] relative overflow-hidden">
          <Moadal3d />
        </div>
      </section>
    </>
  );
};

export default page;
