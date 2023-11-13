export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-9">
      <div className="pt-12">
        <section>
          <h1 className="text-3xl font-bold text-white">지혁님의 트리</h1>
          <h1 className="text-1xl font-bold text-white">
            🎁 11개의 편지가 도착해 있어요.
          </h1>
        </section>

        <div className="mt-12 grid grid-cols-2">
          <button className="bg-white hover:bg-gray-100 font-bold p-3 px-5 m-1 rounded-xl">
            ✍️ 글 쓰기
          </button>
          <button className="bg-white hover:bg-gray-100 font-bold p-3 px-5 m-1 rounded-xl">
            🌟 나도 만들기
          </button>
        </div>
      </div>
    </main>
  );
}
