import Grealish from '../assets/img/jack.jpg'
export default function Section1() {
    return (
        <section className="flex items-center justify-center w-full  md:h-[400px] h-fit pt-5 md:pt-0">
            <div className="text-center font-redHatDisplay text-zinc-950 md:w-1/2 p-3 md:p-0 w-full flex flex-col justify-center items-center">
            <div className="w-[200px] h-[200px] mb-5">
                    <img src={Grealish} alt="jack" className="object-cover w-full h-full rounded-full" />
            </div>
            <h1 className="text-3xl capitalize font-bold">Collaboration Nike With Jack Grealish </h1>
                <p className="text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit corporis sunt facilis totam voluptate.</p>
                </div>
        </section>
    )
}