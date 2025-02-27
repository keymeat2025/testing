// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkLG-6Ze8TxKFt7gRnSbcxe1YY8tOhkpY",
  authDomain: "drivers-5e2b3.firebaseapp.com",
  projectId: "drivers-5e2b3",
  storageBucket: "drivers-5e2b3.firebasestorage.app",
  messagingSenderId: "343394512517",
  appId: "1:343394512517:web:24039feda802ab3f8bc3ec",
  measurementId: "G-XE0GXK81JK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        try {
            await db.collection("bookings").add({
                name: name,
                email: email
            });
            alert('Booking successful!');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Booking failed!');
        }
    } else {
        console.log('Please fill in all fields');
    }
});
