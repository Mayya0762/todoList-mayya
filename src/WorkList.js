import { Component } from 'react';

export class WorkList extends Component {
constructor() {
    super();
    this.state ={
        userInput: "",
        workList: []
    }
}

onChangeEvent(e) {
    this.setState({userInput: e})
}

addItem(input) {
    if (input === '') {
        alert ('Please write something!')
    } 
    else {
    let listArray = this.state.workList;
    listArray.push(input);
    this.setState({workList: listArray, userInput: ''})
}
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed')
}

deleteItem() {
    let listArray = this.state.workList;
    listArray = [];
    this.setState({workList: listArray})
}

onFormSubmit(e) {
    e.preventDefault();
}


render() {
    return (
        <form onSubmit={this.onFormSubmit}>
        <div>
            <input type="text" 
            placeholder="" 
            onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
        
            <button className='btnAdd' onClick = {()=>this.addItem(this.state.userInput)}>ADD</button>
        </div>
        <div>
            <ul>
                {this.state.workList.map((item, index) => (<li onClick={this.crossedWord} key={index}>{item}</li>))}
                
            </ul>
        </div>

        <div>
            <button className='btnDelete' onClick={() =>this.deleteItem()} >Delete</button>

        </div>
        </form>
    )
}
}