import Image from "next/image";
import treeimg from "../../images/tree.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-9">
      <div className="pt-24">
        <h1 className="text-1xl font-bold text-center text-white ">2023</h1>
        <h1 className="text-2xl font-bold text-center text-white">
          나만의 산타를 모아봐요 🎅
        </h1>

        <h1 className="text-1xl font-bold text-center text-white">
          12월 1일부터 함께 모아보는 산타
        </h1>
      </div>
      <div>
        <Image
          className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          src={treeimg}
          alt="tree"
          quality="100"
          priority={true}
        />
      </div>
      <button className="bg-white hover:bg-gray-100 font-bold p-3 px-10 rounded-xl">
        바로 시작하기
      </button>
    </main>
  );
}
