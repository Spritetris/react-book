import React from "react";
import { useLocation, Link } from "react-router-dom";


function Book() {
    const { state } = useLocation();
    return(
        <>
        <div className="m-5 ">
        <h3 className="mb-3 ">Name : {state.name}</h3>
        <p>Description : Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </>
    )

}
export default Book;