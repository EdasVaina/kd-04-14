import { useState, useRef } from "react";


function MinecraftH() {

    const inputRef = useRef();
    const inpRef = useRef();
    const inRef = useRef();

    const [z, setInputValue] = useState('');
    const [x, seInputValue] = useState('');
    const [y, sInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const haInputChange = (event) => {
        seInputValue(event.target.value);
    };

    const hInputChange = (event) => {
        sInputValue(event.target.value);
    };


    let sz = Number(z)
    let sy = Number(y)
    let sx = Number(x)


    const Calculator = () => {
      let siena1 = sx * sy - (2 * sy)
      let siena2 = sz * sy - (2 * sy)
      let viskas = siena1 * 2 + siena2 * 2 + sy * 4 + sz * sx
      alert(viskas + " blocks")
    };


  return (
    <div>
       <input type="text" ref={inputRef} value={z} onChange={handleInputChange} placeholder="Plotis" ></input>
      <input type="text" ref={inpRef} value={x} onChange={haInputChange} placeholder="Ilgis" ></input>
      <input type="text" ref={inRef} value={y} onChange={hInputChange} placeholder="Aukstis" ></input>
      <button type="submit" onClick={Calculator}>caculate</button>
    </div>
    
  )
}


export default MinecraftH;