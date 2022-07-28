import { useState } from "react";
const styleObj={
    style1:{
        backgroundColor:'yellow',
        width:"400px",
        height:"50vh",
        display:"flex",
        alignItems:"center",
        border:"10px black dotted"
    },
    style2:{
        backgroundColor:'blue',
        width:"500px",
        height:"80vh",
        display:"flex",
        alignItems:"center",
        border:"10px yellow dotted"
    }
}
export default function useStyle(style="style1"){
        const [currentStyle, setCurrentStyle]= useState(style);

        function setStyle(){
        
            let stylenew = currentStyle==='style1'?"style2":"style1"
            console.log("entering style ",stylenew)
                setCurrentStyle(stylenew);
        }

        return [styleObj[currentStyle],setStyle];
        
}

