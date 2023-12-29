import image1 from '../assets/img/1.jpg'
import image2 from '../assets/img/2.jpg'
import image3 from '../assets/img/3.jpg'
import image4 from '../assets/img/4.jpg'

export default function Header() {
  return (
    <header className=' w-full h-fit bg-gray-300 p-4'>
      <div className='grid md:grid-cols-2 grid-cols-1  h-full'>
        <div className=''>
          <div className='grid grid-cols-3 gap-1'>
            <div className='w-full h-[300px] col-span-3'>
              <img
                src={image1}
                alt='shoes'
                className='w-full h-full object-cover bg-center'
              />
            </div>
            {/* <div className="flex"> */}
            <div className='w-full h-[150px] '>
              <img
                src={image2}
                alt='shoes'
                className='w-full object-cover h-full'
              />
            </div>
            <div className='w-full h-[150px] '>
              <img
                src={image3}
                alt='shoes'
                className='w-full object-cover h-full'
              />
            </div>
            <div className='w-full h-[150px] '>
              <img
                src={image4}
                alt='shoes'
                className='w-full object-cover h-full'
              />
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className=' w-full p-5'>
          <div className='font-redHatDisplay text-black md:text-start text-center space-y-2'>
            <h1 className='font-bold capitalize text-4xl '>
              Nike Air Force 1 Red
            </h1>
            <p className='font-medium'>Best Color Red Grealish</p>
            <div className='rating flex items-center md:justify-normal justify-center text-center md:text-start'>
              <span className='star text-2xl text-yellow-500'>&#9733;</span>
              <span className='star text-2xl text-yellow-500'>&#9733;</span>
              <span className='star text-2xl text-yellow-500'>&#9733;</span>
              <span className='star text-2xl text-yellow-500'>&#9733;</span>
              <span className='star text-2xl text-gray-500'>&#9733;</span>
              <span className='star text-1xl'>(123)</span>
            </div>
            <h1 className="font-bold text-3xl text-purple-800">$120</h1>
            <form action="" className="flex lg:flex-row flex-col items-center justify-between md:w-[400px] w-full">
            <div className="flex gap-5 items-center">
            <div className="mb-4">
                <label htmlFor="size" className="block text-sm font-medium text-gray-600">Size</label>
                <select id="size" name="size" className="mt-1 px-6 py-2 border border-gray-300 rounded-md">
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">Jumlah</label>
                <select id="quantity" name="quantity" className="mt-1 px-6 py-2 border border-gray-300 rounded-md">
                    {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                </select>
            </div>
            </div>
                        
            <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-blue-600">Add to Cart</button>
        </form>
          </div>
        </div>
      </div>
    </header>
  );
}
