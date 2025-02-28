// Import the Firestore instance from index.html
import { db } from './index.html';

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
