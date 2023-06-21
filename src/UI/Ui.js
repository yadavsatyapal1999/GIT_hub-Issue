import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Ui.css' ;


export default function Ui() {
    // Store Data
    const [Data, setData] = useState("");
    // Maintain Page Number
    const [page, Setpage] = useState(0);

    useEffect(() => {
        const url = "https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5"
//  Get Data from the link
        axios.get(url)
            .then((res) => {
                // Set DATA to store it
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
            .finally(() => {

            })
    }, [])

    return <div id="main">
        {// to ensure that this line must executes if DATA is not empty
        }
        {Data !== "" ? Data.map((item, index) => {
            if (index === page) {
                return <div>
                    <ol id="ol_tag">
                        <li id="list" key={index}>{item.title}</li>
                    </ol>
                </div>
            }
        }) : <p id="Data_none">No Any Data To Show</p>}
        
        <button id="load_next" className="btn" onClick={() => { // to load  next page 
            if (page < 4) {
                Setpage(page + 1)
            }
        }}>Next</button>
        <button className="btn" id="load_prev" onClick={() => { // For go back to previous page
            if (page > 0) {
                Setpage(page - 1);
            }
        }}>Previous</button>
        <div  id="page_number"> {`Page No. ${page + 1}`}  </div>
    </div>

}