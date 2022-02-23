import axios from 'axios';
import {storageService} from './async-storage.service.js';
import {utilService} from './util.service.js';

export const userService = {
  query,
  getUserById,
  updateUser,
  removeUser,
};

const STORAGE_KEY = 'userDB';

async function query() {
  return (await storageService.query(STORAGE_KEY)) || _setUsers();
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

async function _setUsers() {
  const {data} = await axios.get('https://randomuser.me/api/?results=10');
  const users = data.results.map(user => {
    const miniUser = {
      id: utilService.makeId(),
      name: user.name,
      email: user.email,
      imgUrl: user.picture.large,
      address: {country: user.location.country, city: user.location.city, street: user.location.street},
    };
    return miniUser;
  });

  storageService.saveToStorage(STORAGE_KEY, users);
  return users;
}
