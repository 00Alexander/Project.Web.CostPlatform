import styles from './LinkButton.module.css';
import { NavLink} from 'react-router-dom';

function LinkButton({to, text}) {
    return (
        <NavLink className={styles.btn} to={to}>
            {text}
        </NavLink>
    )
}

export default LinkButton