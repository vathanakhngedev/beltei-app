function calculateFare() {
    const pricePerKm = 1200;
    const firstKmPrice = 3000;
    
    // Get the input value
    const km = parseFloat(document.getElementById('kmInput').value);
    
    // Validate input
    if (isNaN(km) || km < 0) {
        document.getElementById('result').innerHTML = 
            '<span style="color: #D40000;">Please enter valid distance</span>';
        return;
    }
    
    let totalPrice;
    
    // Calculate fare based on distance
    if (km <= 1) {
        totalPrice = firstKmPrice;
    } else {
        const additionalKm = km - 1;
        totalPrice = firstKmPrice + (additionalKm * pricePerKm);
    }
    
    // Display result with animation
    const fareDisplay = document.getElementById('result');
    fareDisplay.innerHTML = 
        `<span class="currency">Fare:</span> 
         <span class="fare-amount">${totalPrice.toLocaleString()}</span> 
         <span class="currency">៛</span>`;
    
    // Add animation
    fareDisplay.style.transform = 'scale(1.05)';
    setTimeout(() => {
        fareDisplay.style.transform = 'scale(1)';
    }, 200);
}

// Add event listener for Enter key
document.getElementById('kmInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateFare();
    }
});