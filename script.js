document.addEventListener('DOMContentLoaded', function() {
    // Make the form fullscreen
    document.querySelector('.form-container').style.height = '100vh';
    document.querySelector('.form-container').style.width = '100vw';

    // Show/Hide eCommerce fields based on selection
    const ecommerceSelect = document.getElementById('ecommerceRequirements');
    const ecommerceFields = document.getElementById('ecommerceFields');

    ecommerceSelect.addEventListener('change', function() {
        if (ecommerceSelect.value === 'yes') {
            ecommerceFields.style.display = 'block'; // Show eCommerce fields
        } else {
            ecommerceFields.style.display = 'none'; // Hide eCommerce fields
        }
    });

    // Handle form submission
    document.getElementById('clientForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents default form submission

        // Collect form data
        const formData = new FormData(event.target);

        // Process the data as needed (e.g., send it to a server or display a confirmation)
        let result = "<h2>Form Submitted Successfully!</h2>";
        result += "<p>Here is the information you entered:</p>";

        // Iterate over the form data and display it
        formData.forEach((value, key) => {
            result += `<p><strong>${key}:</strong> ${value}</p>`;
        });

        // Display the result in the result div
        document.getElementById('result').innerHTML = result;

        // Optionally, clear the form after submission
        event.target.reset();
        ecommerceFields.style.display = 'none'; // Reset eCommerce fields visibility
    });
});
