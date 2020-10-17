import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import CrudListItem from './CrudListItem.js';

class CrudList extends React.Component {
    
    static defaultProps = {  /*  props의 디폴트 값 설정 */  } 
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ } 
    state = {

    }
    constructor(props) {
        super(props);
        // this 바인딩

    }
    componentDidMount() {
    // 마운트 완료 후에 : 한번만  
    }
    componentDidUpdate(prevProps, prevState) {
     // 업데이트 완료 후에 : 여러번, state가 변경될 때마다
    }
    componentWillUnmount() {
    // 언마운트 완료 후에 : 페이지 unload 될때 한번.
    }
    render() {
        const rows = this.props.list;   //   ==  CrudApp 
        //debugger;
        let trs = rows.map( (item, index)=> {
            return (
                <CrudListItem 
                    {...this.props} 
                    man={item} 
                    key={item.id}></CrudListItem>
            )
        })
        //debugger;
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }
}

export default CrudApp;