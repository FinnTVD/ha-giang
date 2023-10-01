export default function BoxVideo({ data }) {
    return (
        <section className='w-full px-[6.25vw] h-[47vw] mt-[6.25vw]'>
            <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/2uBkJJmvots?si=Eil5E2TvwgKtxo88'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
                className='object-cover w-full h-full rounded-[1.25vw]'
            ></iframe>
        </section>
    )
}
