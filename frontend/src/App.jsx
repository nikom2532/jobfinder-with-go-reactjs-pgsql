function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          React.js + Tailwind CSS + Docker
        </h1>
        <p className="text-lg text-gray-700">
          นี่คือโปรเจกต์เริ่มต้นสำหรับการพัฒนาเว็บแอปพลิเคชัน
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
            เริ่มต้นใช้งาน
          </button>
        </div>
      </header>
      <main className="mt-10 p-6 bg-white rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">ตัวอย่างการ์ด</h2>
        <p className="text-gray-600">
          คุณสามารถเริ่มสร้างคอมโพเนนต์ของคุณที่นี่โดยใช้ utility classes ของ Tailwind CSS
          เช่น <code className="bg-gray-200 p-1 rounded text-sm">text-red-500</code> หรือ <code className="bg-gray-200 p-1 rounded text-sm">p-4</code>.
        </p>
      </main>
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} My Awesome App. สร้างด้วยความรัก ❤️</p>
      </footer>
    </div>
  )
}

export default App