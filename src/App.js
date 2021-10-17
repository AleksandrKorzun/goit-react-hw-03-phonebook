import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };
  componentDidMount(){
    this.setState({contacts: JSON.parse(localStorage.getItem("contacts")) || []})
  }
  addContacts = (name, number) => {
    const {contacts} = this.state
    const checkContacts = contacts.some((contact)=>{
      return contact.name.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase()
    }) 
    if (!checkContacts){
      this.setState({contacts: [...contacts, {name, number, id: uuidv4()}]});
      this.onWriteLocalStorage()
    } else {
      alert(`${name} is already in contacts`)
    }
  }
  onChangeFilter = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  onDeleteContact = (e) => {
    const{id} = e.target
    const {contacts} = this.state
    this.setState({contacts: contacts.filter((contact)=>contact.id !== id)})
    this.onWriteLocalStorage()
}
  onWriteLocalStorage = () => {
    setTimeout(() => {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }, 500);
  }
  render() {
    const {filter, contacts} = this.state
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Phonebook</h1>
        <Phonebook onSubmitContacts={this.addContacts}/>

        <h2 style={{textAlign: "center"}}>Contacts</h2>
        <Filter 
            filter={filter}
            onChangeFilter={this.onChangeFilter}
        />
        <Contacts
            filter={filter} 
            contacts={contacts}
            onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;

