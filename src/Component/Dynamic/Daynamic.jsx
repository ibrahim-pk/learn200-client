import { useState } from "react";
import { useParams } from "react-router-dom";

const Dynamic=()=>{

    const {idx}=useParams()
    console.log(idx);
    const data=[
        {
            id:"1",
            title:'id1',
            rating:11,
            price:110
        },
        {
            id:"2",
            title:'id2',
            rating:11,
            price:110
        },
        {
            id:"3",
            title:'id3',
            rating:11,
            price:110
        },
        {
            id:"4",
            title:'id4',
            rating:11,
            price:110
        }
    ]
   
    const filterData=data.filter((pd)=>pd.id===idx)
    console.log(filterData);


    return (
        <div>
            <h1 style={{
                textAlign:'center'
            }}>{filterData[0].title}</h1>

            <p>{filterData[0].rating}</p>
        </div>
    )
}

export default Dynamic;