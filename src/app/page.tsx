import Image from "next/image";
import treeimg from "../../images/tree.png";
import bgimg from "../../images/background.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-9">
      <div className="pt-12">
        <h1 className="text-1xl font-bold text-center text-white">2023</h1>
        <h1 className="text-2xl font-bold text-center text-white">
          내 크리스마스 트리를 꾸며줘!
        </h1>

        <h1 className="text-1xl font-bold text-center text-white">
          12월 1일부터 함께 쓰는 롤링페이퍼
        </h1>
      </div>
      <div>
        <Image
          src={treeimg}
          alt="Cartoon graduates jump with happiness"
          quality="100"
        />
      </div>
      <button className="mt-10 bg-white hover:bg-gray-100 font-bold p-3 px-10 rounded-xl">
        바로 시작하기
      </button>
    </main>
  );
}
