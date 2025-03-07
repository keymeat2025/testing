document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    console.log('Form submission started');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        try {
            console.log('Entering Firebase operation to add booking');
            await db.collection("bookings").addDoc({
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
