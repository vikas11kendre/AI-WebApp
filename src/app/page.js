"use client"
import TextInputForm from '@/components/TextInputForm'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
       <h1 className="text-2xl text-black text-[20px] text-justify font-semibold mb-10 w-[60%]">
This demo website uses an custome AI model to offer the best HyperMesh software API recommendations. Search using keywords for optimal results.</h1>
      <div className="flex justify-center items-center bg-white p-6 rounded shadow-lg  ">
       
        <TextInputForm />
      </div>

<footer className='mt-[40px]'>
        <p className='text-black'>Developed by: <span className='text-[##0000FF]underline'><a  href="https://github.com/AjayBendale99">Ajay Bendale</a>,</span> <a href="https://www.example.com/developer2">Vikas Kendre</a></p>
    </footer>
    </div>
  )
}
