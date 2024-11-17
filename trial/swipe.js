document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-item').forEach(tab => {
            tab.classList.remove('active');
        });
        // Add active class to the clicked tab
        this.classList.add('active');

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        // Show the related content
        document.getElementById(this.dataset.target).classList.add('active');
    });
});

const mobileMenu = document.getElementsByClassName('menu-bar');
const navList = document.querySelector('.nav-bar');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
 