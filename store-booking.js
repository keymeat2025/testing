import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js"; 

document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    console.log('Form submission started');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        try {
            console.log('Entering Firebase operation to add booking');
            const newDoc = doc(window.db, "bookings", email); // Create a new document reference
            await setDoc(newDoc, {
                name: name,
                email: email
            });
            console.log('Exiting Firebase operation successfully');
            alert('Booking successful!');
        } catch (error) {
            console.error('Error adding document: ', error);
            console.log('Exiting Firebase operation with error');
            alert('Booking failed!');
        }
    } else {
        console.log('Please fill in all fields');
    }

    console.log('Form submission ended');
});
