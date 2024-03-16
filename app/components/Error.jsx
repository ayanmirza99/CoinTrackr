import Image from "next/image";

export default function Error() {
  return (
    <div className="w-full h-[92vh] md:h-[88vh] flex justify-center items-center">
      <Image
        src="/Oops! 404 Error with a broken robot-pana (1).png"
        width={600}
        height={600}
        alt="error"
      />
    </div>
  );
}