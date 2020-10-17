import React, { Component } from 'react';

import CrudInput from './CrudInput.js';
import CrudList from './CrudList.js';

class CrudApp extends React.Component {
    state = {
        /* CrudInput 컴포넌트에서 사용 */
        user:{
            id:0,
            name:'',
            power:0,
        },
        /* CrudList 컴포넌트에서 사용 */
        list : [
            {id:1, name: "슈퍼맨", power: 100},
            {id:2, name: "아쿠아맨", power: 300},
            {id:3, name: "스파이더맨", power: 500},
            {id:4, name: "배트맨", power: 30},
        ],
    }
    constructor(props){
        super()
        // this 바인드 
        this.func.insert  = this.func.insert.bind(this)  
        this.func.doUp   = this.func.doUp.bind(this)
        this.func.doDown = this.func.doDown.bind(this)
        this.func.doDel  = this.func.doDel.bind(this)
        this.func.doEdit = this.func.doEdit.bind(this)                    
    }          
    func = {
        insert(man){
            // ...생략
        },
        doDel(id){
            let mans = this.state.list.filter( (man,index)=>{
                return man.id !== id
            });
            this.setState({
                list: mans 
            })
        },
        doUp(id){
            let mans = this.state.list.filter( (man,index)=>{
                if ( man.id === id ) {
                    man.power = Number(man.power) + 100;
                }
                return man;
            });
            this.setState({
                list: mans 
            })
        },
        doDown(id){
            let mans = this.state.list.filter( (man,index)=>{
                if ( man.id === id ) {
                    man.power = Number(man.power) - 50;
                }
                return man;
            });
            this.setState({
                list: mans 
            })
        },
        doEdit(paramMan){
            //debugger;
            let mans = this.state.list.map( (man,index)=>{
                if (man.id === paramMan.id) { 
                    return paramMan
                }
                else {
                    return man;
                }
            });
            this.setState({
                list: mans 
            })
        },
    }
    render() {
        return (
            <div>
                <CrudInput></CrudInput> 
                <CrudList {...this.state} {...this.func}>
                </CrudList>
            </div>
        );
    }
}

export default CrudApp;