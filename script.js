        // Function to toggle dark mode
        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle('dark-mode');

            // Save user preference in localStorage
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        }

        // Check for saved user preference on page load
        function loadDarkModePreference() {
            const savedDarkMode = localStorage.getItem('darkMode') === 'true';
            if (savedDarkMode) {
                document.body.classList.add('dark-mode');
            }
        }

        // Add event listener to the button
        document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

        // Load dark mode preference when the page loads
        window.addEventListener('load', loadDarkModePreference);