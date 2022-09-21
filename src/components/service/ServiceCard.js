import styles from '../project/ProjectCard.module.css'
import { BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { NavLink } from  'react-router-dom'

function ServiceCard({id, name, cost, description, handleRemove}){
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    
    return (
    <div className={styles.project_cartd}>
        <h4>{name}</h4>
        <p>
            <span>Custo total:</span> R${cost}
        </p>
        <p>{description}</p>
        <div className={styles.project_cartd_actions}>
           <button onClick={remove}>
            <BsFillTrashFill /> Excluir
           </button>
        </div>
    </div>)
}

export default ServiceCard