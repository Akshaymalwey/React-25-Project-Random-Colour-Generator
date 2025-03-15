import { useEffect, useState } from "react"
export default function RandomColor(){

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color , setColor] = useState('#000000');

  function randomColorUtility(length){
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor(){
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor);
  }


  function handleCreateRandomRgbColor(){
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if(typeOfColor === 'rgb') handleCreateRandomRgbColor()
    else handleCreateRandomHexColor()
  }, [typeOfColor])



  return (<><div className="bodyy">
                <div className="Container" style={{backgroundColor: color}}>
                    <h1 className="title">{typeOfColor === 'rgb' ? 'RGB:' : 'HEX:'}</h1>
                    <h1 className="color-name">{color}</h1>
                </div>
            </div>
            <div className="buttons">
                <button className="HEX" onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
                <button className="RGB" onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
                <button className="generate-random-color" onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
            </div></>)

}