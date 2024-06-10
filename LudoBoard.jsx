import { useState } from "react"
export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 })

    // This is for Array and state...
    let [arr, setArr] = useState([""]);

    let updateBlue = ()=>{
        setMoves({...moves, blue: moves.blue += 1});
        
    //Arrays and state...
    arr.push(" blue moves ");
    setArr([...arr, "blue moves"]);
    console.log(arr);
    };


    let updateYellow = ()=>{
        setMoves({...moves, yellow: moves.yellow += 1});
    };

    let updateRed = ()=>{
        setMoves({...moves, red: moves.red += 1});
    };

    let updateGreen = ()=>{
        setMoves({...moves, green: moves.green += 1});
    };

    return (
        <div>
            <h1>Let's Start Ludo!</h1>
            <div className="board">
                <p>{arr}</p>
                <p>Blue Moves ={moves.blue} </p>
                <button style={{ backgroundColor: 'blue' }} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow} </p>
                <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={updateYellow}>+1</button>
                <p>Red Moves = {moves.red} </p>
                <button style={{ backgroundColor: 'red' }} onClick={updateRed}>+1</button>
                <p>Green Moves = {moves.green} </p>
                <button style={{ backgroundColor: 'green' }} onClick={updateGreen}>+1</button>

            </div>
        </div>
    )
}