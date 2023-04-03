import mongoose from 'mongoose';
const contactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    country:String,
    email: String,
    program: String,
    phone: String,
    feeback: String,
    englishLevel: String,
    school: String,
    gender: String,
    age: String,
  },
  { timestamps: true }
);
const Contacts =
  mongoose.models.Contacts || mongoose.model('Contacts', contactSchema);
export default Contacts;
