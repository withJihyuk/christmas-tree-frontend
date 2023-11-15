import Image from "next/image";
import santa from "../../../../images/santa.png";

export default function Home() {
  const images = Array(8).fill(santa); // Assuming you want 16 images
  const disimages = Array(8).fill(santa); // Assuming you want 16 images

  return (
    <main className="flex flex-col items-center space-y-9">
      <div className="pt-24">
        <section className="p-4">
          <h1 className="text-3xl font-bold text-white">지혁님의 산타</h1>
          <h1 className="text-1xl font-bold text-white">
            🎅 8명의 산타를 모았어요.
          </h1>
        </section>
        <div className="mt-12 grid grid-cols-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="santa"
              width="100"
              height="100"
            />
          ))}
          {disimages.map((image, index) => (
            <Image
              key={index}
              src={image}
              style={{ filter: "grayscale(100%)" }}
              alt="santa"
              width="100"
              height="100"
            />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2">
          {/* <button className="bg-white font-bold p-3 px-7 m-1 rounded-xl">
            ✍️ 글 쓰기
          </button> */}
          {/* <button className="bg-white font-bold p-3 px-5 m-1 rounded-xl">
            🌟 나도 만들기
          </button> */}
          <button className="bg-white font-bold p-3 px-5 m-1 rounded-xl">
            ⚙️ 설정 변경하기
          </button>
          <button className="bg-gray-900 text-white font-bold p-3 px-5 m-1 rounded-xl">
            🔗 링크 복사하기
          </button>
        </div>
      </div>
    </main>
  );
}
