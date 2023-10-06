
export default function Video(){
    return(
        <section className="px-[8.875vw] mt-[6.25vw] max-md:hidden">
            <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/2uBkJJmvots?si=Eil5E2TvwgKtxo88'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
                className='object-cover w-full h-[46.1875vw] rounded-[1.25vw]'
            ></iframe>
        </section>
    )
}