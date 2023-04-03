import mongoose from "mongoose";
const registrationSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    amount: String,
    paymentMethode: String,
    phone: String,
    vclass: String,
    adult: String,
    children: String,
    date: String,
    flightNo: String,
    company: String,
    arrivalTime: String,
    from: String,
    to: String,
    departureTime: String,
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations ||
  mongoose.model("Registrations", registrationSchema);
export default Registrations;
