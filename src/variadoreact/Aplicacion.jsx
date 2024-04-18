import './estilos.css'
import img from './assets/img/bee.png';

const Aplicacion = () => {
    return (
        <div>
            <div className="box"></div>


            <div style={{ width: 100, height: 100, backgroundColor: 'green' }}></div>
            <img src={img} alt="" />
        </div >
    )
}

export default Aplicacion