import React, {useRef} from "react";
import ConciseScrollBar from "../ConciseScrollbar/ConciseScrollbar";
import './example.scss';
function Example(){
    const scrollRef = useRef();
    return(
        <div>
            <button className="scroll-button" onClick={() => {scrollRef.current.scrollTo(0,0)}}>
                Scroll to Top
            </button>
        <div className="example-wrapper">
            <ConciseScrollBar ref={scrollRef} behavior="smooth">
            <div className="example-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum ex quis nibh cursus, eu
                sodales erat fringilla. Aenean a ultricies urna. In hac habitasse platea dictumst. Aliquam ullamcorper
                eros ac risus consectetur, quis cursus enim finibus. Nunc vehicula, elit non lobortis tempus, lacus sem
                consectetur diam, at maximus justo nulla at tellus. Quisque vel velit porta, condimentum nibh id,
                elementum arcu. In euismod, arcu quis elementum vestibulum, urna ante hendrerit justo, id tincidunt quam
                quam et diam. Praesent efficitur elit quis ipsum tempus, ac tincidunt leo dictum. In hac habitasse
                platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum ex quis nibh cursus, eu
                sodales erat fringilla. Aenean a ultricies urna. In hac habitasse platea dictumst. Aliquam ullamcorper
                eros ac risus consectetur, quis cursus enim finibus. Nunc vehicula, elit non lobortis tempus, lacus sem
                consectetur diam, at maximus justo nulla at tellus. Quisque vel velit porta, condimentum nibh id,
                elementum arcu. In euismod, arcu quis elementum vestibulum, urna ante hendrerit justo, id tincidunt quam
                quam et diam. Praesent efficitur elit quis ipsum tempus, ac tincidunt leo dictum. In hac habitasse
                platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum ex quis nibh cursus, eu
                sodales erat fringilla. Aenean a ultricies urna. In hac habitasse platea dictumst. Aliquam ullamcorper
                eros ac risus consectetur, quis cursus enim finibus. Nunc vehicula, elit non lobortis tempus, lacus sem
                consectetur diam, at maximus justo nulla at tellus. Quisque vel velit porta, condimentum nibh id,
                elementum arcu. In euismod, arcu quis elementum vestibulum, urna ante hendrerit justo, id tincidunt quam
                quam et diam. Praesent efficitur elit quis ipsum tempus, ac tincidunt leo dictum. In hac habitasse
                platea dictumst.
            </div>
            </ConciseScrollBar>
        </div>
        </div>
    )
}

export default Example;