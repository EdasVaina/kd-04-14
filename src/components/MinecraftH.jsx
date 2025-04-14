import { useState, useRef } from "react";


function MinecraftH() {

    const inputRef = useRef();
    const inpRef = useRef();
    const inRef = useRef();

    const [z, setInputValue] = useState('');
    const [x, seInputValue] = useState('');
    const [y, sInputValue] = useState('');

    let sz = Number(z)
    let sy = Number(y)
    let sx = Number(x)

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        alert(sz)
    };

    const haInputChange = (event) => {
        seInputValue(event.target.value);
        alert(sx)
    };

    const hInputChange = (event) => {
        sInputValue(event.target.value);
        alert(sy)
    };

  return (
    <div>
       <input type="text" ref={inputRef} value={z} onChange={handleInputChange} placeholder="Plotis" ></input>
      <input type="text" ref={inpRef} value={x} onChange={haInputChange} placeholder="Ilgis" ></input>
      <input type="text" ref={inRef} value={y} onChange={hInputChange} placeholder="Aukstis" ></input>
    </div>
    
  )
}


export default MinecraftH;