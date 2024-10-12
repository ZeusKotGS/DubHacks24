import { getDatabase, ref, set } from '@firebase/database';
import firebase from './firebaseConfig.js'; // Import your Firebase config

// ... your code ...

const db = getDatabase(firebase); // Access the Realtime Database

function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
