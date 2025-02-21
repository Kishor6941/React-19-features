import React, { useTransition, useState, useEffect } from "react";

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);


  let getInputValue = (e) => {
    setInputValue(e.target.value)
    startTransition(() => {
          let l = [];
          for (let i = 0; i < 10000; i++) {
              l.push(inputValue);
            }
            setList(l);
      })
  }


  return (
    <div className="container mt-3 offset-md-4">
      <div className="col-md-6">
        <input type="text" 
        placeholder="enter value"
         className="form-control"
         value={inputValue}
         onChange={(e) => getInputValue(e)}
         />


         {isPending ? <h1>Loading</h1> : 
                <ul className="list-group mt-3">
                    {list.map((item,index) => (
                        <li key={index} className="list-group-item">{item}</li>
                    ))}
                {/* <li className="list-group-item">Cras justo odio</li> */}
              </ul>
         }
      </div>
    </div>
  );
};

export default UseTransition;
