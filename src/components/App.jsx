import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contact = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contact);

    if (parsContacts) {
      setContacts(parsContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const notification = notificatinName => {
    const normalaisNotificatinName = notificatinName.toLowerCase();

    contacts.map(({ name }) => {
      if (name.toLowerCase() === normalaisNotificatinName) {
        alert(`${name} is already in contacts.`);

        // this.setState({ contacts: contacts });
      }
      return [];
    });
  };

  const onHandelSubmit = e => {
    const { name, number } = e.currentTarget.elements;

    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    setContacts(prev => [contact, ...prev]);
  };

  const chengFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deletContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <div>
        <h1>PhoneBook </h1>
        <ContactForm
          contacts={contacts}
          onHandelSubmit={onHandelSubmit}
          notification={notification}
        />
      </div>

      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={chengFilter} />
        <ContactList
          filter={filter}
          contacts={contacts}
          deletContact={deletContact}
        />
      </div>
    </>
  );
};

// class oldApp extends Component {
// state = {
//   contacts: [],
//   filter: '',
// };

// componentDidMount() {
//   const contact = localStorage.getItem('contacts');
//   const parsContacts = JSON.parse(contact);

//   if (parsContacts) {
//     this.setState({ contacts: parsContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// notification = notificatinName => {
//   const { contacts } = this.state;
//   const normalaisNotificatinName = notificatinName.toLowerCase();

//   contacts.map(({ name }) => {
//     if (name.toLowerCase() === normalaisNotificatinName) {
//       alert(`${name} is already in contacts.`);

//       this.setState({ contacts: contacts });
//     }
//     return [];
//   });
// };

// onHandelSubmit = e => {
//   const { name, number } = e.currentTarget.elements;

//   const contact = {
//     id: nanoid(),
//     name: name.value,
//     number: number.value,
//   };

//   this.setState(({ contacts }) => ({
//     contacts: [contact, ...contacts],
//   }));
// };

// chengFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// deletContact = contactId => {
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(
//         contact => contact.id !== contactId
//       ),
//     };
//   });
// };

// render() {
// const { contacts, filter } = this.state;

// return (
//   <>
//     <div>
//       <h1>PhoneBook </h1>
//       <ContactForm
//         contacts={contacts}
//         onHandelSubmit={this.onHandelSubmit}
//         notification={this.notification}
//       />
//     </div>

//     <div>
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={this.chengFilter} />
//       <ContactList option={this.state} deletContact={this.deletContact} />
//     </div>
//   </>
// );
// }
// }
