// Function to open the categories popup
function openCategoriesPopup() {
    const popup = document.getElementById('categoriesPopup');
    popup.style.display = 'flex';
}

// Function to close the categories popup
function closeCategoriesPopup() {
    const popup = document.getElementById('categoriesPopup');
    popup.style.display = 'none';
}

// Update the Categories link to open the popup
document.querySelector('a[href="#categories"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    openCategoriesPopup();
});

// Function to open the book popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';
}

// Function to close the book popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

// Generate floating circles
const container = document.getElementById('floatingCircles');
const circleCount = 20; // Number of circles
const circleSize = 80; // Size of circles

for (let i = 0; i < circleCount; i++) {

    const wrapper = document.createElement('div');
    wrapper.classList.add('circle-wrapper');
    

    console.log('Creating circle', wrapper);

    wrapper.style.left = `${Math.random() * 100}%`;
    wrapper.style.top = `${Math.random() * 100}%`;

    const duration = Math.random() * 5 + 5; // 5s to 10s
    wrapper.style.animationDuration = `${duration}s`;

    const circle = document.createElement('div');
    circle.classList.add('circle');

    
    const colors = ['rgba(255, 192, 203, 0.3)', 'rgba(135, 206, 235, 0.25)', 'rgba(255, 255, 255, 0.25)'];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    
    wrapper.appendChild(circle);
    container.appendChild(wrapper);
}
