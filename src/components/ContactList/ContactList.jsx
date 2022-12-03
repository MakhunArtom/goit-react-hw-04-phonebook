const ContactList = ({ contacts, filter, deletContact }) => {
  const getVisibleContacts = () => {
    const normalaisFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaisFilter)
    );
  };

  const filterContacts = getVisibleContacts();

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
};

export default ContactList;

// class oldContactList extends Component {
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.props;
//     const normalaisFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalaisFilter)
//     );
//   };

//   render() {
//     const { deletContact } = this.props;

//     const filterContacts = this.getVisibleContacts();

//     return (
//       <ul>
//         {filterContacts.map(({ id, name, number }) => (
//           <li key={id}>
//             <div>
//               <p>{name}</p>
//               <p>{number}</p>
//             </div>
//             <button type="button" onClick={() => deletContact(id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
