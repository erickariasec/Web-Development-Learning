

export const TiposBasicos = () => {

    const nombre: string = 'Oscar';
    const estatura: number = 173;
    const status: boolean = false;
    const hobbies: string[] = ['Musica', 'Leer', 'Fútbol', 'Natación'];
     
    return (
        <>
            <h3>Tipos Basicos</h3>
            <p>
                { nombre }, { estatura } cm, { (status) ? 'Activo' : 'Inactivo' }
                <br/>
                { hobbies.join(', ') }
            </p>
        </>
    )
}
