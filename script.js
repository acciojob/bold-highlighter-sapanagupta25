function highlight() {
    // Select all <strong> elements
    const boldElements = document.querySelectorAll('strong');
    
    // Loop through each element and change color to green
    boldElements.forEach(element => {
        element.style.color = 'rgb(0, 128, 0)'; // Green color
    });
}

function return_normal() {
    // Select all <strong> elements
    const boldElements = document.querySelectorAll('strong');
    
    // Loop through each element and change color back to black
    boldElements.forEach(element => {
        element.style.color = 'rgb(0, 0, 0)'; // Black color
    });
}
