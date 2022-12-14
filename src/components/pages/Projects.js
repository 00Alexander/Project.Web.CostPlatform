import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import styles from './Projects.module.css'
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message

    }

    useEffect(() => {
        setTimeout(() => {
            fetch("https://restapijasonserver.herokuapp.com/projects", {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 1000)
    }, [])

    function removeProject(id){
        fetch(`https://restapijasonserver.herokuapp.com/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then(data => {
                    setProjects(projects.filter((projects) => projects.id !== id))
                })
                .catch((err) => console.log(err))
    }


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((data) => (
                    <ProjectCard 
                    id ={data.id}
                    name={data.name} 
                    budget={data.budget} 
                    category={data.category.name}
                    key={data.id}
                    handleRemove={removeProject} 
                    />

                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>N??o h?? projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects