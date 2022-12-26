import React from "react";
import ScrollBar from "./Scrollbar";

const ConciseScrollBar = React.forwardRef((props,ref) => {
    if(props.scrollY !== false){
        return <ScrollBar key={props.key} ref={ref} behavior={props.behavior}>{props.children}</ScrollBar>
    }else{
        return(
            <div>
                {props.children}
            </div>
        )
    }
})

export default ConciseScrollBar;