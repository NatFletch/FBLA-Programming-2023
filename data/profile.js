import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const profileSchema = new Schema({
  username: String,
  password: String,
  created_at: String,
  points: Number,
  is_teacher: Boolean,
  items: [String]
});

const Profile = model('Profile', profileSchema);
export default Profile;