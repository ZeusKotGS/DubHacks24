import { getDatabase, ref, child, get, set } from '@firebase/database';
import firebase from './firebaseConfig.js'; // Import your Firebase config

// ... your code ...

const db = getDatabase(firebase); // Access the Realtime Database

function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

function writePostData(postId, photoUrl, name, creator, description, tags) {
    set(ref(db, 'posts/' + postId), {
      photo: photoUrl,
      name: name,
      creator: creator,
      description: description,
      tags: tags
    });
}

writeUserData('user1', 'John Adams', 'john.adams@gmail.com', '/');
writePostData('post1', '/', 'Fettucine Alfredo', 'panda', 'very good and creamy fettucine', ['fettucine', 'alfredo']);

get(child(ref(db), `posts/post1`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});