import { Profile } from "../../models/profile/profile.interface";

const userList :Profile[] = [
  {firstName: 'Paul',lastName:'Halliday',email:'paul@paul.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Jonathan',lastName:'Crown',email:'Jonathan@Jonathan.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'mattew',lastName:'Lindsay',email:'mattew@mattew.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Mathew',lastName:'Halliday',email:'Mathew@email.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Mark',lastName:'Bible',email:'Bible@email.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Luke',lastName:'John',email:'paul@paul.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'John',lastName:'Lindsay',email:'Luke@Luke.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Luke',lastName:'Lindsay',email:'John@paul.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Roman',lastName:'Paul',email:'paul@John.com',avatar: 'assets/img/avatar.png' ,dateOfBirth:new Date()},
  {firstName: 'Teslim',lastName:'Salako',email:'Teslim@Salako.com',avatar: 'assets/img/avatar.png' ,dateOfBirth:new Date()},
  {firstName: 'Kunbi',lastName:'Oshodi',email:'Oshodi@Oshodi.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Wale',lastName:'Adetona',email:'Wale@Wale.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()},
  {firstName: 'Julius',lastName:'Jembe',email:'Julius@Jembe.com',avatar: 'assets/img/avatar.png',dateOfBirth:new Date()}
]


export const USER_LIST = userList;
