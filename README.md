# react-concise-scrollbar

> a React concise scrollbar component with macOS style
## Advantages
- Concise and simple style (hidden when not in use)  
- Automatically adapt to the resize of wrapper and content area
- Based on traditional design strategy  
    The usage of **react-concise-scrollbar** fits well with developers' original development pattern.  
    When we need a scroll area, we should first creat a wrapper with exact height and set overflow:scroll or auto.
    Then put the content into the wrapper.When the height of the content exceeds the height of the wrapper, it could be scrolled.  
    If you want to use **react-concise-scrollbar** to change the scrollbar's style in your scroll area, you can just insert the component between the wrapper area and the content area.
- No need to send height or width to component as props  
    Since **react-concise-scrollbar** is used based on original design pattern, all you need to do is setting the correct height and width of the wrapper area in original mode.
    **react-concise-scrollbar** can automatically get these size and render correctly.
## Basic Usage
### Installation
```
npm i react-concise-scrollbar
```
### Import
```jsx
import {ConciseScrollBar} from "react-concise-scrollbar";
```
### Usage
**react-concise-scrollbar** is used based on the default scroll area.
***Developers should make a default scroll area first and then insert the component between the wrapper and the content.***

js part
```jsx
function Example(){
    return(
        <div className="example-wrapper">
            <ConciseScrollBar>
                <div className="example-content">your content</div>
            </ConciseScrollBar>
        </div>
    )
}
```
css part (***set a scroll area***)
```scss
.example-wrapper{
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;   //set scroll attribute of the scroll area
  width: 400px;
  height: 400px;        //set height of the scroll area
  background: lightblue;
}
```
## API
