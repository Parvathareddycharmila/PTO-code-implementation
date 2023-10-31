// Function to generate a random distance between source and destination (minimum of 70 km)
function generateRandomDistance() {
    // Generate a random distance (between 70 and 100 kilometers)
    return Math.floor(Math.random() * 31) + 70;
}

// Function to calculate and display a random route with a random distance
function calculateAndDisplayRoute(source, destination) {
    const routeList = document.getElementById('route-list');
    routeList.innerHTML = '';

    if (source === destination) {
        routeList.innerHTML = '<li>You are already at your destination.</li>';
    } else {
        const distance = generateRandomDistance();
        routeList.innerHTML += `<li>Route: Start at ${source}</li>`;
        routeList.innerHTML += `<li>Route: Take Bus/Train/Metro to reach ${destination} (Distance: ${distance} km)</li>`;
        routeList.innerHTML += `<li>Reached: You have arrived at ${destination}</li>`;
    }
}

document.getElementById('plan-route').addEventListener('click', function () {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    calculateAndDisplayRoute(source, destination);
});
