import enam from '../assets/img/6.png'
export default function Section2() {
    return (
        <section className="w-full md:h-[500px] h-full bg-zinc-900 flex md:flex-row flex-col items-center justify-center">
            <div className="md:w-[600px] md:h-[500px] w-full h-[300px] "> 
                <img src="/src/assets/img/6.png" alt="red-shoes" className="object-cover w-full h-full" />
            </div>
            <div className="md:w-1/2 w-full md:p-0 p-5 text-center font-redHatDisplay text-white">
                <h1 className="font-bold text-4xl capitalize pb-5">Jack Grealish x Nike</h1>
                <p className="font-normal text-lg pb-5">Nike x Jack Grealish is an extraordinary collaboration that brings a unique touch and spirit to the world of sports and style. This partnership introduces innovative products that not only meet athletic needs but also celebrate creativity and the spirit of determination.</p>
                <button className="uppercase px-5 py-2 border-2 border-purple-800">watch the video</button>
            </div>
        </section>
    )
}