import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (addContact({ id: nanoid(), name, number })) {
      setName('');
      setNumber('');
    } else {
      alert('El contacto ya existe en la agenda.');
    }
  };

  return (
    <form onSubmit={handleSubmit}> Nombre: 
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      Numero: 
      <input
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
