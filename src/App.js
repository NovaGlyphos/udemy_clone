import { useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom/client"
import image from '../src/assets/img1.png';
import Header from "./componenets/Header";
import Body from "./componenets/Body"
import UpperSection from "./componenets/UpperSection";
import MiddleSection from "./componenets/MiddleSection";
import LowerSection1 from "./componenets/LowerSection1";
import LowerSection2 from "./componenets/LowerSection2";
import LowerSection3 from "./componenets/LowerSection3";


// const heading = React.createElement("h1",{id:"heading"},"hello react");


//react element
// const jsxHeading = <h1>hello from jsx</h1>

/* //react functional component
const HeadingComponent1 = () =>{
    return <h1>hello from react functional component</h1>;
} */

/* const number = 10000;

const elem  = (<span>this is an element </span>);
 
const hello = (<h1>
    {elem}
    inside hello
    </h1>);

const Title = () =>(
    
    <h1 className="head" tabIndex="5">
        namaste react using jsx
    </h1>
)
const HeadingComponent2 = () => (
    <div id="container">
        {hello}
        <h2>{number}</h2>
        <Title/>
        <h1>hello from react functional component</h1>;
    </div>  
)
 
//HeadingComponent1 and HeadingComponent2 both are same

 */

const AppLayout = () => (
    <div className="app">
        <Header />
        <UpperSection />
        <MiddleSection/>
        <LowerSection1/>
        <LowerSection2/>
        <LowerSection3/>
        <Body/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
