export default function Contact(){

    const ButtonStyle={
        padding:"20px 10px",
        backgroundColor:"#4a90e2",
        color:"white",
        borderRadius:"100px",
        textDecoration:"none",
        fontWeight:"bold",
        transition:"0.3s",
        display:"inline-block"

    };

    const contactCard={
        backgroundColor:"white",
        padding:"10px",
        borderRadius:"12px",
        width:"400px",
        textAlign:"center",
        justifyContent:"center",
        boxShadow:"0 4px 12px rgba(0,0,0,0.9)"
    };



    return(
        
    <div id="contact" style={{padding:"60px 20px", textAlign:"center", display:"flex", justifyContent:"center"}}>
        
        <div style={contactCard}>
            <h2>Contact Me!!</h2>
            <p>Feel free to reach out through any of the platforms</p>
            <div style={{
                marginTop:"25px",
                display:"flex",
                justifyContent:"center",
                gap:"20px",
                flexWrap:"wrap"
                }}>
                <a href="mailto:abhiahire30@gmail.com" 
                style={ButtonStyle}
                target="_blank"
                onMouseEnter={(e)=>(e.currentTarget.style.transform="scale(1.1)")}
                onMouseLeave={(e)=>(e.currentTarget.style.transform="scale(1)")}>
                    Email</a>
                <a href="https://www.linkedin.com"
                style={ButtonStyle}
                target="_blank"
                onMouseEnter={(e)=>(e.currentTarget.style.transform="scale(1.1)")}
                onMouseLeave={(e)=>(e.currentTarget.style.transform="scale(1)")}>
                    Linkedin</a>
                <a href="https://github.com/"
                style={ButtonStyle}
                target="_blank"
                onMouseEnter={(e)=>(e.currentTarget.style.transform="scale(1.1)")}
                onMouseLeave={(e)=>(e.currentTarget.style.transform="scale(1)")}>
                    GitHub</a>
            </div>
        </div>
    </div>
    );
}