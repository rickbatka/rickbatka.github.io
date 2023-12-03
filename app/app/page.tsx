import Image from 'next/image'


export default function Home() {
  
  return (
    <main className="flex min-h-screen w-full bg-gray-600 place-content-center">
      {/* 8.5in page for printing to PDF */}
      <div className='flex w-[8.5in] bg-green-500 min-h-screen h-full justify-between' >
        <div>left</div>
        <div>right</div>
      </div>
    </main>
  )
}
