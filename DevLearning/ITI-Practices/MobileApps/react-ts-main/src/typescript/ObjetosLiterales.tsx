
interface Persona {
    nombreCompleto: string;
    estatura: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    provincia: string;
    ciudad: string;
    noCasa: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Oscar Acero',
        estatura: 173,
        direccion: {
            pais: 'Ecuador',
            provincia: 'Pichincha',
            ciudad: 'Quito',
            noCasa: 593
        }
    }

    //persona.estatura = 'a';

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2) }
                </pre>
            </code>
        </>
    )
}
