import { nanoid } from 'nanoid';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInput = nanoid();
  numberInput = nanoid();

  onHandelChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { onHandelSubmit, notification } = this.props;
    const { name } = this.state;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onHandelSubmit(e);
          notification(name);
        }}
      >
        <div>
          <label htmlFor={this.nameInput}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInput}
            onChange={this.onHandelChange}
          />
        </div>

        <div>
          <label htmlFor={this.numberInput}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInput}
            onChange={this.onHandelChange}
          />
        </div>

        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
