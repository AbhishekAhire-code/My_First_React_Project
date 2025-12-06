import AbhiImage from "../assets/Abhishek_Ahire.jpg"
export default function Hero(){
    const imgStyle={
        width:"100px",
        height:"120px",
        borderRadius:"50%",
        objectFit:"cover",
        marginBottom:"20px",
        border:"4px solid #ddd",
        transition:"transform 0.3s ease, opacity 0.5s"
    };


    const cardStyle={
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       gap:"20px",
       padding:"20px",
       borderRadius:"20px",
       boxShadow:"0 4px 12px rgba(0,0,0,0.9)",
       background:"#f5f7fa",
       maxWidth:"600px"
    };
    return(
        <div style={cardStyle}>
            
            <img src={AbhiImage} alt="Abhi" style={imgStyle}
            onMouseEnter={(e)=>(e.currentTarget.style.transform="scale(1.05)")}
            onMouseLeave={(e)=>(e.currentTarget.style.transform="scale(1)")}></img>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1 style={{margin:"0 0 10px"}}>Abhishek Ahire</h1>
                <p style={{margin:"4px 0"}}>
                    The normal guy, who dreams of conquering the world!<br/>
                    And also it seems that I can code!
                </p>
            </div>
        </div>
    );
}