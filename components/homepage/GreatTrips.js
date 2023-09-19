import ItemCardTour from './ItemCardTour'

const arr = new Array(2).fill(0)
export default function GreatTrips() {
    return (
        <section className='flex justify-center gap-x-[1.5vw]'>
            {arr?.map((e, index) => (
                <ItemCardTour key={index} />
            ))}
        </section>
    )
}
