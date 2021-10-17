import React, {Component} from 'react';
import PhonebookInput from './PhoneBookInput/PhonebookInput';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';



class Phonebook extends Component {

    state = {
        name: '',
        number: ''
      }
    onChangeInpuntName = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    
    onSubmitContacts = (e) => {
        e.preventDefault();
        const {name, number} = this.state;
        this.props.onSubmitContacts(name, number)
        this.resetForm()

        
    }
    
    resetForm = () => {
        this.setState({name: "", number: ""})
    }

render() {
    const {name, number} = this.state
    return (
        <>
        <PhonebookInput 
            name={name} 
            number={number} 
            onChangeInpuntName={this.onChangeInpuntName} 
            onSubmitContacts={this.onSubmitContacts}/>
        </>
    );
}
}




export default Phonebook;

// const propTypes = {};