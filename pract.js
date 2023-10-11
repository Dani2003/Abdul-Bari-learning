      // Function to handle form submission
     function handleFormSubmit(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get form values
        const name = document.getElementById("name").value;
        const city = document.getElementById("city").value;
        const country = document.getElementById("country").value;
        const postalCode = document.getElementById("postalCode").value;
        const phone = document.getElementById("phone").value;
        const gender = document.getElementById("gender").value;

        // Create an object to store the form data
        const formData = {
          name: name,
          city: city,
          country: country,
          postalCode: postalCode,
          phone: phone,
          gender: gender,
        };

        // Store the form data in local storage
        localStorage.setItem("registrationData", JSON.stringify(formData));

        // Display success message
        alert("Submission successful!");

        // Reset the form
        document.getElementById("registrationForm").reset();
      }

      // Attach the form submit event listener
      document
        .getElementById("registrationForm")
        .addEventListener("submit", handleFormSubmit);