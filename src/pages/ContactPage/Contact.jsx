import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Fuse from "fuse.js";
import {
  deleteContact,
  fetchContacts,
  addContact,
} from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/selectors";
import ContactItem from "../../components/ContactItem";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactPage() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fuse = new Fuse(contacts, {
    keys: ["name", "number"],
    threshold: 0.3,
  });

  const filteredContacts = searchTerm
    ? fuse.search(searchTerm).map(({ item }) => item)
    : contacts;

  return (
    <div>
      <h2>Contact List</h2>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDelete}
        />
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
}
