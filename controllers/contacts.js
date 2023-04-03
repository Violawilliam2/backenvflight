import mongoose from 'mongoose';
import Contacts from '../models/Contacts.js';

//function fetch contacts
export const fetchContacts = async (req, res) => {
  const allContacts = await Contacts.find();
  try {
    res.status(200).json(allContacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// function create contacts
export const createContact = async (req, res) => {
  const contact = req.body;
  const newContact = new Contacts(contact);
  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

// function update the contacts
export const updateContact = async (req, res) => {
  const { id: _id } = req.body;
  const updateContact = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No contact found with such id:${_id}`);
  try {
    const updatedContact = await Contacts.findByIdAndUpdate(id, updateContact, {
      new: true,
    });
    res.status(201).json(updatedContact);
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};

// delete contacts function
export const deleteContact = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No contact found with such id:${_id}.`);
  await Contacts.findByIdAndRemove(id);
  res.send('contact was sucessfully deleted.');
};
