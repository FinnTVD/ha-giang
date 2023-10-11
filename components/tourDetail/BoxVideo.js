export default function BoxVideo({ data }) {
  return (
    <section className='mx-auto md:w-[87.5rem] h-[47rem] mt-[6.25rem] max-md:px-0 max-md:mt-[5.3rem] max-md:h-[56rem] w-full'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/2uBkJJmvots?si=Eil5E2TremgKtxo88'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
        className='object-cover w-full h-full rounded-[1.25rem] max-md:rounded-none'
      ></iframe>
    </section>
  )
}
