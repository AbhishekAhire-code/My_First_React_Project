export default function Navbar(){
    
    const navStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"50px",
        padding:"12px",
        background:"#f7f5fa",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        position:"fixed",
        left:0,
        top:0,
        width:"100%",
        fontFamily:"Arial, sans-serif"
    };

    const linkStyle={
        TextDecoderation:"none",
        color:"black",
        fontWeight:"bold",
        fontSize:"15px",
        cursor:"pointer",
        transition:"0.2s"
    };
    
    return(
        <nav style={navStyle}>
            <a href="#home" style={linkStyle}
            onMouseEnter={(e)=>(e.currentTarget.style.color="#4a90e2")}
            onMouseLeave={(e)=>(e.currentTarget.style.color="#333")}>
                Home</a>
            
            <a href="#skills" style={linkStyle}
            onMouseEnter={(e)=>(e.currentTarget.style.color="#4a90e2")}
            onMouseLeave={(e)=>(e.currentTarget.style.color="#333")}>
                Skills</a>
            
            <a href="#projects" style={linkStyle}
            onMouseEnter={(e)=>(e.currentTarget.style.color="#4a90e2")}
            onMouseLeave={(e)=>(e.currentTarget.style.color="#333")}>
                Projects</a>
            
            <a href="#contact" style={linkStyle}
            onMouseEnter={(e)=>(e.currentTarget.style.color="#4a90e2")}
            onMouseLeave={(e)=>(e.currentTarget.style.color="#333")}>
                Contact</a>
        </nav>
    );
}