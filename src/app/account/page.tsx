export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-5">
      <div className="pt-32">
        <section>
          <h1 className="text-3xl font-bold text-white">지혁</h1>
          <h1 className="text-2xl font-bold text-white">
            구글로 로그인 중입니다.
          </h1>
        </section>
        <div className="mt-96 grid grid-cols-2">
          <button className="bg-white hover:bg-red-700 font-bold p-3 px-5 m-1 rounded-xl">
            🚪탈퇴하기
          </button>
          <button className="bg-white hover:bg-gray-100 font-bold p-3 px-5 m-1 rounded-xl">
            🖼️ 테마 변경하기
          </button>
          <button className="bg-white hover:bg-gray-100 font-bold p-3 px-5 m-1 rounded-xl">
            🔑 로그아웃
          </button>
          <button className="bg-white hover:bg-gray-100 font-bold p-3 px-5 m-1 rounded-xl">
            🧾 데이터 내보내기
          </button>
        </div>
      </div>
    </main>
  );
}
