import React, { useCallback, useRef, useState } from "react";
import Child from "./Child";
const CustomForm = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allData, setAllData] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = { email: email, password: password }
        setAllData([...allData, newEntry])
    }

    let inputRef=useRef(null)

    const handleInput =()=>{
        inputRef.current.value='vikas'
    }
    const [counter, setCounter]= useState(0)
    const [counterTwo, setcountTwo]= useState([])
        const handleIncreament=()=>{
             setCounter(counter +1)
        }
         const fun=useCallback(()=>{
            console.log("hello call again")
         },[counterTwo])

    return ( 
        <>
            <form>
                <div className="input-wrap">
                    <input type="text" name="email" autoComplete="off"
                     value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="input-wrap">
                    <input type="password" name="password" autoComplete="off" onChange={(e) => setpassword(e.target.value)} value={password} />
                </div>
                <button type="submit" onClick={submitForm}>submit</button>
            </form>
            {
                allData.map((item)=>{
                     return(
                        <>
                         <h2>{item.email}</h2>
                         <h2>{item.password}</h2>
                        </>
                    )
                })
            }
            <h2>useRef</h2>
                <input  type="text"     ref={inputRef}/>
                <button type="submit"  onClick={handleInput}>submit</button>
            <div className="input-wrap">
                <h2>Counter</h2>
                <Child counterTwo={counterTwo} fun={fun} />
                <h3>{counter}</h3>
                <button type="submit" onClick={handleIncreament}>Add more</button>
            </div>


        </>
    );
}
export default CustomForm;