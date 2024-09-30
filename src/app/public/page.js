export default function Home() {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex flex-col">
        <h1 className="text-indigo-700 text-xl font-bold">Hi This My Portfolio</h1>
        <h1 className="text-left text-3xl font-bold w-full text-pink">Hilya Aulia</h1>
        <h2 className="text-xl text-pink-900">UI UX Designer & SOFTWARE ENGINEERING</h2>
        <p className="text-ellipsis">Saya adalah seorang UI UX Designer yang berdedikasi untuk menghasilkan karya UI UX dengan menarik secara visual dan ramah pengguna</p>
        <button className="mb-4 px-4 py-2 text-white bg-indigo-500 rounded-full hover:bg-indigo-800">  Hire me</button>      
        </div>
      <img 
        src="/images/hilyaaaa.jpeg" 
        alt="Hilya Aulia" 
        className="w-40 h-50 object-cover ml-4"
      />
    </div>
  );
}
