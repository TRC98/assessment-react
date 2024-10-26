import { Input, Tooltip } from 'antd'
import React, { useState } from 'react'

export default function Palindrome() {
    const [showsuccess,setshowsuccess] = useState(false);
    const [showfail,setshowfail] = useState(false);
    const isPPalindrome=(e)=>{
        var str = e.target.value;
        var lovercase = str.toLowerCase();
        var removeSpace = lovercase.replace(/\s/g, '');

        var length = removeSpace.length-1;
        var hflen = length/2;

        var result = true;

        for(let i= 0;i<hflen;i++ ){
            if(removeSpace[i] != removeSpace[length]){
                result=false;
                break;
            }
            length--;
        }
        
        if(removeSpace.length>0 && result){
            setshowsuccess(true);
            setshowfail(false);
        }
        else if(removeSpace.length>0 && !result){
            setshowsuccess(false);
            setshowfail(true);
        }
        else{
            setshowsuccess(false);
            setshowfail(false);
        }

    }
  return (
    <div>
      <h4>Palindrome Check</h4>
      <div>
        <Input onChange={(e)=>{isPPalindrome(e)}} placeholder="Put a String"></Input>
      </div>
      {showsuccess ?
      <>
        <div>
            <h3>Input string is in Palindrome</h3>
        </div>
      </>:<></>
      }
      {showfail ? 
      <>
        <div>
            <h3>Input string is not in Palindrome</h3>
        </div>
      </>:<></>
      }
    </div>
  )
}
