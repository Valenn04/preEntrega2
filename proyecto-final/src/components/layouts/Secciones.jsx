import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
    <>
        <li className="nav-item">
            <Link className="nav-link active" to={"/"}>Happy Pet</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/Contacto">Contacto</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to={"/About"}>Sobre Nosotros</Link>
        </li>
 
    </>
    );
}

export default Secciones;