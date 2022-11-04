import { Component } from 'react';

class ContactList extends Component {
  getVisibleContacts = () => {
    const { contacts, filter } = this.props.option;
    const normalaisFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaisFilter)
    );
  };

  render() {
    const { deletContact } = this.props;

    const filterContacts = this.getVisibleContacts();

    return (
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li key={id}>
            <div>
              <p>{name}</p>
              <p>{number}</p>
            </div>
            <button type="button" onClick={() => deletContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
