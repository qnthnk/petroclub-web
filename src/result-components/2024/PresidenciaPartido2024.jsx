import React, { useEffect, useState } from 'react'
import { TbLayoutSidebarLeftExpandFilled } from 'react-icons/tb'
import 'charts.css';




const PresidenciaPartido2024 = () => {
    const [dataToFill, setDataToFill] = useState({})
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch(`https://computos2024.ine.mx/assets/JSON/PRESIDENTE/NACIONAL/Presidente_NACIONAL.json`)
                let data = await response.json()
                console.log(data)
                setDataToFill(data)
            } catch (e) {
                console.error(e)
            }
            console.log("Obteniendo datos...");
        };
        getData();
    }, [])
    return (
        <div className='home-wrapper container-fluid'  >
           

                <table className=" table align-middle mb-1 m-1 table-stripped text-center  table-bordered border-1">
                    <thead className='border-dark border-1'>
                        <tr >
                            <th scope="col"></th>
                            <th className="table-dark" scope="col">Total de Votos</th>
                            <th className="table-dark" scope="col">%</th>
                            <th className="table-dark" scope="col">Ranking</th>
                            <th className="table-dark" scope="col-8">Grafico</th>
                        </tr>
                    </thead>


                    {
                        dataToFill &&
                        (
                            dataToFill.votacionPartidosConDistribucion ?
                                dataToFill.votacionPartidosConDistribucion.map((item, index) => {
                                    return (
                                        <tbody key={index}  >
                                            <tr className='border-dark border-1'>
                                                <th scope="row">
                                                    <img alt=""
                                                        style={{
                                                            height: "50px", // Tamaño ajustado 
                                                            width: "auto"   // Mantiene la proporción
                                                        }}
                                                        className="imagen-candidato-movil"
                                                        src={`https://computos2024.ine.mx/assets/img/partidos${item.emblemaPartido}`}
                                                    />
                                                    <h5>{item.nombrePartido === "CANDIDATURAS NO REGISTRADAS" || item.nombrePartido === "VOTOS NULOS" ? item.nombrePartido : ""}</h5>
                                                </th>
                                                <td>
                                                    <p className="f17">{(item.total).toLocaleString()}</p>
                                                </td>
                                                <td>
                                                    <p className="f17">{(item.porcentaje).toFixed(2)}</p>
                                                </td >
                                                {/* ranking */}
                                                <td></td>
                                                <td>
                                                <progress class="progress" value="83" max="100"></progress>
                                                </td>
                                            </tr>
                                        </tbody>

                                    )
                                })
                                :
                                (
                                    <div>
                                        <h5>Cargando</h5>
                                    </div>
                                )


                        )
                    }

                </table>
            </div>

      
    )
}


export default PresidenciaPartido2024