import "./DogCard.css"

export const DogCard = ({dog}) => {
    return (
        <>
            <article key={dog.id} className="card">
                <section className="dog-image">
                    <img src={dog.image.url} alt="Dog" />
                </section>
                <section className="dog-content">
                    <div className="breed-title">
                        <p>{dog.name}</p>
                    </div>
                </section>
            </article> 
        </>
    );
}