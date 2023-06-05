

export const Funciones = () => {

    const sumar = (x: number, y: number): number => {
        return x + y;
    }

    const restar = (x: number, y: number): number => {
        return x - y;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de la suma es: { sumar(10, 4) }</span>
            <br/>
            <span>El resultado de la resta es: { restar(18, 9) }</span>
        </>
    )
}
