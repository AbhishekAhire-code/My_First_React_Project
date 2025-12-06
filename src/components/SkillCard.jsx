export default function SkillCard({icon, title, description}){

    const skillCard={
        background:"white",
        padding:"20px",
        borderRadius:"12px",
        boxShadow:"0 2px 10px rgba(0,0,0,0.9)",
        width:"150px",
        textAlign:"center",
        transition:"0.3s",
    };

    return(
        <div style={skillCard}
        onMouseEnter={(e)=>(e.currentTarget.style.transform="scale(1.05)")}
        onMouseLeave={(e)=>(e.currentTarget.style.transform="scale(1)")}>
            <h2>{icon}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}