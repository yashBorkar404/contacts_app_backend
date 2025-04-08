
const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get all contacts
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user._id}); 
    res.status(200).json(contacts);
});
//@desc Get single contact
//@route GET /api/contacts/:id
//@access Private
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact); 
}); 
//@desc Create new contact
//@route POST /api/contacts
//@access Private
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user._id
    });
    res.status(200).json(contact);
});
//@desc Update contact
//@route PUT /api/contacts/:id
//@access Private

const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user._id.toString()){
        res.status(401);
        throw new Error("Not authorized");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.status(200).json(updatedContact);
});
//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Private

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user._id.toString()){
        res.status(401);
        throw new Error("Not authorized");
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
});
module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}
