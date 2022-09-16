import { useState } from "react"

const Folder = ({explorer}) => {
    const [expand, setExpand] = useState(false);

    if(explorer.isFolder) {
        return <div style={{marginLeft:'25px'}}>
            <span onClick={()=>setExpand(!expand)} style={{background:'lightgrey', borderRadius:'4px'}} >
                {explorer.name}
                <br/>
            </span>
            <div style={{display:expand?'block':'none'}}>
                {explorer.items.map((exp)=> {
                    return <Folder key={exp.name} explorer ={exp}/>
                })}
            </div>
            
        </div>
    } else {
        return <span style={{marginLeft:'25px'}}>
            |---{explorer.name}
            <br/>
        </span>
    }
}

export default Folder;