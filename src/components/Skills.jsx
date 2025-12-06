import SkillCard from "./SkillCard";

export default function Skills(){
    return(
        <div id="skills" style={{ padding:"60px 0",textAlign:"center"}}>
            <h2>My Skills</h2>
            <div style={{
                marginTop:"30px",
                display:"flex",
                justifyContent:"center",
                gap:"20px",
                flexWrap:"wrap"
            }}>
                <SkillCard
                icon="💻"
                title="HTML"
                description="Strong HTML"/>

                <SkillCard
                icon="🎨"
                title="CSS"
                description="Good styling ability"/>

                <SkillCard
                icon="⚛️"
                title="React"
                description="Learning Fast"/>

                <SkillCard
                icon="⚡"
                title="JavaScript"
                description="Intermediate level"/>

                <SkillCard
                icon="💼"
                title="Git"
                description="Version Control Basics"/>

                <SkillCard
                icon="🧠"
                title="Problem Solving"
                description="Improving Daily"/>
            </div>
        </div>
    )
}