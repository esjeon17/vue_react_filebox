import React, { Component } from 'react'

class CrudListItem extends React.Component {
    state = {
        isEditMode : false
    }
    constructor(props) {
        super(props);
        // this 바인딩
        this.refUserName = React.createRef()
        this.refUserPower = React.createRef()

    }
    doDel = (event) => { 
        console.log(event.target);
        const {id} = this.props.man;    // const id = this.props.man.id   같은 내용. 
        this.props.doDel(id);
    } 
    doUp = (event) => { 
        console.log(event.target);
        const {id} = this.props.man;
        this.props.doUp(id);
    } 
    doDown = (event) => { 
        console.log(event.target);
        const {id} = this.props.man;
        this.props.doDown(id);
    } 
    doEdit = (event) => { 
        console.log(event.target);
        // const item = this.props.man;
        // this.props.doEdit(item);
        this.setState({
            isEditMode: !this.state.isEditMode
        })
    } 
    doSave = (event) => { 
        //debugger;
        console.log(event.target);
        this.setState({
            isEditMode: !this.state.isEditMode
        })
        let item = this.props.man;
        let man = {
            id : item.id,
            name : this.refUserName.current.value,
            power : Number(this.refUserPower.current.value)
        }
        this.props.doEdit(man);
    }
    render() {
        let item = this.props.man;
        const formView = (
            <tr className="">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.power}</td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        )

        const formEdit = (
            <tr key={item.id} className={"strong"}>
                <td>{item.id}</td>
                <td>
                    <input 
                        type="text" 
                        name="name" 
                        ref={this.refUserName }
                        defaultValue={item.name}   //  for  htmlFor   value    defaultValue
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        name="power" 
                        ref={this.refUserPower }
                        defaultValue={item.power}
                    />
                </td>
                <td>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                </td>
            </tr> 
        )
        if(this.state.isEditMode) {
            return formEdit;
        } 
        else {
            return formView;
        }
        
    }
}

export default CrudListItem;