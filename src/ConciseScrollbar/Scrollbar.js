import React, {useEffect, useRef, useState} from "react";
import "./Scrollbar.scss";
import {useDebounce} from "../hooks/useDebounce";
import {useThrottle} from "../hooks/useThrottle";

const  ScrollBar = React.forwardRef((props,ref) => {
    const childrenRef = useRef();
    const thumbRef  = useRef();
    const trackRef = useRef();
    const wrapperRef = useRef();
    let contentRef = useRef();
    if(ref) {
        contentRef = ref;
    }
    let wrapperParentRef = useRef();
    const [thumbVisible,setThumbVisible] = useState(false);
    const delayHideScrollbar = useDebounce(() => {setThumbVisible(false)},1000);
    const throttleUpdateThumb = useThrottle(() => {setThumbVisible(true);thumbRef.current.style.top = (contentRef.current.scrollTop * trackRef.current.offsetHeight / childrenRef.current.offsetHeight) + 'px';},8);
    const updatePadding = () => {
        childrenRef.current.style.padding = getComputedStyle(wrapperParentRef,null).padding;
        wrapperRef.current.style.top = `-${getComputedStyle(wrapperParentRef,null).paddingTop}`;
        wrapperRef.current.style.left = `-${getComputedStyle(wrapperParentRef,null).paddingLeft}`;
        wrapperRef.current.style.height = `calc(100% + ${getComputedStyle(wrapperParentRef,null).paddingTop} + ${getComputedStyle(wrapperParentRef,null).paddingBottom})`;
        wrapperRef.current.style.width = `calc(100% + ${getComputedStyle(wrapperParentRef,null).paddingLeft} + ${getComputedStyle(wrapperParentRef,null).paddingRight})`;
    }
    const updateWrapper = useThrottle(() => {updatePadding()},20);
    const updateChildren = useThrottle(() => {
        if(childrenRef.current.offsetHeight > wrapperRef.current.offsetHeight){
            thumbRef.current.style.height = (wrapperRef.current.offsetHeight * trackRef.current.offsetHeight / (childrenRef.current.offsetHeight)) + 'px';
        }else{
            thumbRef.current.style.height = 0;
        }
    },20);
    const resizeObserver = new ResizeObserver((entries) => {
        if(wrapperRef && wrapperRef.current){
            for(let i = 0;i < entries.length;i++){
                updateChildren();
                if(entries[i].target === wrapperParentRef){
                    if(childrenRef.current.style.padding !== getComputedStyle(wrapperParentRef,null).padding){
                        updateWrapper();
                    }
                }
            }
        }
    })
    useEffect(() => {
        wrapperParentRef = wrapperRef.current.parentNode;
        wrapperParentRef.style.overflow = 'hidden';
        resizeObserver.observe(childrenRef.current);
        resizeObserver.observe(wrapperParentRef);
        updatePadding();
        return () => {
            resizeObserver.disconnect();
        }
    },[wrapperRef]);
    const updateThumb = () => {
        throttleUpdateThumb();
        delayHideScrollbar();
    }
    return(
        <div className="scrollbar-wrapper" ref={wrapperRef} key={props.key}>
            <div className="scrollbar-content" key={props.key} ref={contentRef} style={{scrollBehavior:props.behavior}} onScroll={() => {updateThumb()}}>
                <div className="scrollbar-children" ref={childrenRef} key={props.key}>
                    {props.children}
                </div>
            </div>
            <div ref={trackRef} className="scrollbar-track" key={props.key}>
                <div className={`scrollbar-thumb ${thumbVisible ? 'thumb-show' : ''}`} key={props.key} ref={thumbRef}></div>
            </div>
        </div>
    )
})
export default ScrollBar;