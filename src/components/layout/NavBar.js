import {NavLink} from 'react-router-dom';

import Container from './Container';
import styles from './NavBar.module.css';
import logo from '../../img/costs_log.png'


function Navbar(props) {
    return (
        <nav className={styles.navbar}>
            <Container>
            <NavLink to="/"><img src={logo} alt="Costs"/></NavLink>
            <ul className={styles.list}>
                <li className={styles.item}>
                <NavLink to="/" >Home</NavLink>
                </li>
                <li className={styles.item}>
                <NavLink to="/projects" >Projetos</NavLink>
                </li>
                <li className={styles.item}>
                <NavLink to="/company" >Empresa</NavLink>
                </li>
                <li className={styles.item}>
                <NavLink to="/contact" >Contato</NavLink>
                </li>
            </ul>
            </Container>
        </nav>
    )
}

export default Navbar
