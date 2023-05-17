document.addEventListener('DOMContentLoaded', function () {
    // Get the input elements and the counter element
    var incrementInput = document.querySelector('input[name="increment"]');
    var decrementInput = document.querySelector('input[name="decrement"]');
    var resetInput = document.querySelector('input[name="reset"]');
    var counterDisplay = document.getElementById('counter-display');

    // Initialize counter variable
    var counter = 0;

    // Function to increment the counter
    function incrementCounter() {
        counter++;
        updateCounterValue();
    }

    // Function to decrement the counter
    function decrementCounter() {
        if (counter > 0) {
            counter--;
            updateCounterValue();
        }
    }

    // Function to reset the counter
    function resetCounter() {
        counter = 0;
        updateCounterValue();
    }

    // Function to update the counter value and display it in the middle of the screen
    function updateCounterValue() {
        counterDisplay.textContent = counter;
    }

    // Add event listeners to the buttons
    incrementInput.addEventListener('click', incrementCounter);
    decrementInput.addEventListener('click', decrementCounter);
    resetInput.addEventListener('click', resetCounter);
});
