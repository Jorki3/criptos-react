import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px;
        span{
            font-weight: 700;
        }
    `

const Precio = styled.p`
    font-size: 20px;
    span{
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({ resultado }) => {
    console.log(resultado);
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen cripto"
            />

            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio mas alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio mas bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Últimas 24 hrs: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Último cambio: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado