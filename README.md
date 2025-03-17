# Portfolio Website

This is a personal portfolio website for **Alucard Dracula**, showcasing skills, projects, and a brief introduction. The website features a responsive design, dark mode toggle, and a clean, modern UI.

## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.
- **Dark Mode**: Users can toggle between light and dark modes, with their preference saved in `localStorage`.
- **Animated Elements**: Includes a waving hand emoji animation and a gradient border around the profile picture.
- **Custom Styling**: Utilizes CSS variables for easy theme management and gradient text effects.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling, animations, and responsive design.
- **JavaScript**: For implementing dark mode toggle and saving user preferences.

## File Structure
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles for the website
├── script.js           # JavaScript for dark mode functionality
├── profile-image.jpg   # Profile picture

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in your browser to view the website.
3. Toggle the dark mode switch to change the theme.

## Dark Mode Implementation

The dark mode functionality is implemented using JavaScript and CSS. The user's preference is saved in `localStorage`, so the theme persists across page reloads.

### JavaScript Functions:
- `toggleDarkMode()`: Toggles the dark mode class on the body and saves the preference.
- `loadDarkModePreference()`: Loads the saved preference when the page loads.

### CSS Variables:
- `--primary-color`: Used for accents and highlights.
- `--text-color`: Controls the text color.
- `--background-color`: Controls the background color.

## Credits

- **Uiverse.io**: Dark mode toggle switch design by [satyamchaudharydev](https://uiverse.io/satyamchaudharydev).
- **Google Fonts**: Fonts used in the project.
- **CSS Gradient**: For gradient text and border effects.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to customize this portfolio to suit your needs!
