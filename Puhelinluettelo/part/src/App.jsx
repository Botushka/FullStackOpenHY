import React from 'react';
import Note from './components/Note'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456789' }
  ]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault(); // Prevent form submission

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
    }
  };

  const filteredPersons = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new person</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
}

export default App;
