import ProjectCard from "./ProjectCard";

export default function Project(){
    return(
    <div id="projects" style={{padding:"60px 20px", textAlign:"center"}}>

        <h2>My Projects</h2>


        <div style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"25px"
        }}>
            <ProjectCard
            icon="🚀"
            title="Portfolio Website"
            description="A personal portfolio created using React."
            code="https://github.com/"
            demo="#"/>

            <ProjectCard
            icon="📝"
            title="To-Do App"
            description="Task Management app built with React"
            code="https://github.com/"
            demo="#"/>

            <ProjectCard
            icon="🧮"
            title="Calculator"
            description="A basic calculator created with HTML/CSS/JS."
            code="https://github.com/"
            demo="#"/>
        </div>

    </div>
    );
}