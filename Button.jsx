
function handleClick() {
   alert("button was clicked!");
};

function handleMouseOver() {
    console.log("Mouse Over");
    // alert("Mouse Over!");
};

function handleDblClick() {
    alert("Double Click!");
};

export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Buy Now</button>
            <h2 onMouseOver={handleMouseOver}>Hover on Me!</h2>
            <button onDoubleClick={handleDblClick}>Double Click on Me</button>
        </div>
    )

};