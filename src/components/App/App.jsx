import React from "react";
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import contacts from "components/contacts.json";
import { SearchForm } from "components/SearchForm/SearchForm";
import { Container } from "./App.styled";

export class App extends React.Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeSearchForm = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <SearchForm onChange={this.changeSearchForm} value={filter} />
        <ContactList contacts={this.getContacts()} onDelete={this.deleteContact} />
      </Container>
    );
  }
};
