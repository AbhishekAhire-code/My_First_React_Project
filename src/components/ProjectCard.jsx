export default function ProjectCard({title, description, code, demo, icon}){
    
    const ButtonStyle={
        padding:"8px 10px",
        backgroundColor:"#4a90e2",
        color:"white",
        borderRadius:"8px",
        textDecoration:"none",
        fontWeight:"bold",
        transition:"0.3s",
        display:"inline-block"
    };
    
    
    const ProjectCard={
        background:"white",
        padding:"20px",
        borderRadius:"12px",
        width:"260px",
        textAlign:"center",
        boxShadow:"0 5px 20px rgba(0,0,0,0.9)",
        transition:"0.3s"
    };
    return(
        <div style={ProjectCard}
        onMouseEnter={(e)=>(e.currentTarget.style.transform="translateY(-5px)")}
        onMouseLeave={(e)=>(e.currentTarget.style.transform="translateY(0)")}>
            <h2 style={{fontSize:"40px"}}>{icon}</h2>
            <h3>{title}</h3>
            <p style={{color:"#555", fontSize:"14px"}}>{description}</p>
            <div style={{marginTop:"15px", display:"flex", justifyContent:"center", gap:"10px"}}>
                <a href={code} target="_blank" style={ButtonStyle}>Code</a>
                <a href={demo} target="_blank" style={ButtonStyle}>Demo</a>
            </div>
        </div>
    );
}