import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';
import { useNavigate } from 'react-router-dom';

function NewProject() {

    const navigate = useNavigate()

    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("https://restapijasonserver.herokuapp.com/projects",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then(() =>{
            navigate('/projects',{message: 'Cadastrado com sucesso!'})
        })
        .catch((err) => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject