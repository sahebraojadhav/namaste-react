const heading=React.createElement("h1",{id:"heading"},"sahebrao jadhav from this side")
const heading2=React.createElement("h2",{id:"heading2"},"sahebrao jadhav from this side")

const mainDiv=React.createElement("div",{id:"cover"},[heading,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(mainDiv);