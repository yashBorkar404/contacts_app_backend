const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({ 
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
        trim: true
    }
},
{
    timestamps: true
});
module.exports = mongoose.model('Contact', contactSchema);