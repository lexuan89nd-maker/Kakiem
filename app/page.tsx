export default function Home() {
  return (
    <main className="min-h-screen bg-[#020b14] text-white">
      {/* MENU */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="text-2xl font-bold">
          🐟 KAKIEM
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm">
          Đăng nhập
        </button>
      </header>

      {/* HERO */}
      <section
  className="relative overflow-hidden px-6 py-20 bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,11,20,0.72), rgba(2,11,20,0.92)), url('/e3381362-d827-4540-b92e-ed8503505655.png')",
  }}
  >

        <div className="relative z-10">
          <p className="mb-3 text-blue-400 font-semibold">
            KAKIEM PREMIUM
          </p>

          <h1 className="text-4xl font-bold leading-tight">
            Thế giới nội dung
            <br />
            không giới hạn
          </h1>

          <p className="mt-5 max-w-md text-gray-400">
            Khám phá truyện, clip và những nội dung đặc sắc.
            Xem thử miễn phí và mở khóa toàn bộ khi bạn muốn.
          </p>

          <div className="mt-7 flex gap-3">
            <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold">
              Khám phá ngay
            </button>

            <button className="rounded-lg border border-white/20 px-5 py-3">
              Xem miễn phí
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 pb-10">
        <h2 className="mb-4 text-2xl font-bold">
          🔥 Nội dung nổi bật
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Bóng Đêm Dịu Dàng",
            "Thành Phố Không Ngủ",
            "Bí Ẩn Đại Dương",
            "Hành Trình Vô Tận",
          ].map((title, index) => (
            <div
              key={title}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-blue-900 to-slate-950 text-5xl">
                {index % 2 === 0 ? "📖" : "🎬"}
              </div>

              <div className="p-3">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-xs text-gray-400">
                  Xem miễn phí
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM */}
      <section className="mx-5 mb-10 rounded-2xl border border-purple-500/20 bg-purple-950/30 p-5">
        <p className="text-purple-300 font-semibold">
          👑 KAKIEM PREMIUM
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Nội dung độc quyền
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          🔒 Xem thử miễn phí. Mở khóa để xem toàn bộ nội dung.
        </p>

        <button className="mt-5 rounded-lg bg-purple-600 px-5 py-3 font-semibold">
          Mở khóa
        </button>
      </section>
    </main>
  );
}