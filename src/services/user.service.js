import axios from 'axios';
import {storageService} from './async-storage.service.js';
import {utilService} from './util.service.js';

export const userService = {
  query,
  getUserById,
  updateUser,
  removeUser,
  getEmptyUser,
  addUser,
};

const STORAGE_KEY = 'userDB';

async function query(filterBy = {email: '', name: '', location: ''}) {
  return (await storageService.query(STORAGE_KEY, filterBy)) || _setUsers();
}

async function getUserById(id) {
  return await storageService.get(STORAGE_KEY, id);
}

async function updateUser(user) {
  return storageService.put(STORAGE_KEY, user);
}

async function removeUser(id) {
  return storageService.remove(STORAGE_KEY, id);
}

async function addUser(user) {
  return storageService.post(STORAGE_KEY, user);
}

function getEmptyUser() {
  return {
    name: {first: '', last: '', title: ''},
    email: '',
    imgUrl: '',
    address: {country: '', city: '', street: ''},
  };
}

async function _setUsers() {
  const {data} = await axios.get('https://randomuser.me/api/?results=10');
  const users = data.results.map(user => {
    const miniUser = {
      id: utilService.makeId(),
      name: user.name,
      email: user.email,
      imgUrl: user.picture.medium,
      address: {country: user.location.country, city: user.location.city, street: user.location.street},
    };
    return miniUser;
  });

  storageService.saveToStorage(STORAGE_KEY, users);
  return users;
}
