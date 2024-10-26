import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'
import { fetchUserData } from './secondTask';

export default function FlattenArray() {
    const [str,setStr] = useState();

    const [showsuccess,setshowsuccess] = useState(false);
    const [showfail,setshowfail] = useState(false);
    const [array,setarray] = useState();


    const setstr=(e)=>{
        setStr(e.target.value);
    }
    const flattenfunction=()=>{
        
        try{
            var parsed = JSON.parse(str);
            if(Array.isArray(parsed)){
                setshowfail(false);
                
                var result = itterate(parsed);
                setarray(JSON.stringify(result));
                setshowsuccess(true);
            }
        }catch(ex){
            setshowfail(true);
            setshowsuccess(false);

        }
        
    }
    const itterate=(array)=>{
        var result = [];
        array.forEach(element => {
           if(Array.isArray(element)){
            var sub = itterate(element);
            sub.forEach(el=>{
                result.push(el);
            })
           }else{
            result.push(element);
           }       
        });
        return result;
    }
    
  return (
    <div>
      <h4>Flatten Nested Array</h4>
      <TextArea onChange={(e)=>{setstr(e)}} rows={4} placeholder="Put a Nested Array"/>
        <Button onClick={flattenfunction}>Flatten</Button>

        {showsuccess ?
        <>
            <div>
                <h4>{array}</h4>
            </div>
        </>:<></>
        }
        {showfail ? 
        <>
            <div>
                <h3>Input string is not Array</h3>
            </div>
        </>:<></>
        }
    </div>
  )
}
