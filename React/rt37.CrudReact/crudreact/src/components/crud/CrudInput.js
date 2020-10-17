import React, { Component } from 'react'

class CrudInput extends React.Component {
    render() {
        return (
            <div>
                <h1>Creat Read Update Delete</h1>
                <div><label htmlFor="">Name : </label> <input type="text" /></div>
                <div><label htmlFor="">Power : </label> <input type="text" /></div> <button>Add</button>
                <hr />
            </div>
        );
    }
}

export default CrudInput;