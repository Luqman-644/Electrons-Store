# Electrons E-Commerce Store

## Overview
Electrons E-Commerce Store is a fully functional, responsive web application designed to simulate a modern online tech store. Built using HTML, CSS, and JavaScript, it offers a seamless shopping experience for users to explore, select, and purchase cutting-edge gadgets. The project emphasizes user-friendly navigation, dynamic content management, and persistent cart functionality, making it an ideal showcase for front-end development skills.

## Features
- **Product Catalog**: Browse a variety of tech products (laptops, smartphones, headphones, etc.) with detailed descriptions, prices, ratings, and stock availability.
- **Shopping Cart**: Add, update, or remove items with real-time quantity adjustments and cart persistence using local storage.
- **Dynamic Product Addition**: Admins can add new products via a popup form, including category, name, description, pricing, stock, and images.
- **User Authentication**: Dedicated login and registration pages for user account management (UI only, no backend).
- **Responsive Design**: Optimized for both desktop and mobile devices, with a collapsible navigation menu for smaller screens.
- **Toast Notifications**: Visual feedback for actions like adding products, updating cart, or form validation errors.
- **Order Summary**: View subtotal, shipping fees, and total cost during checkout.
- **Promotional Banners**: Highlight sales and discounts with visually appealing sections.

## Technologies Used
- **HTML5**: Structured the website's content and layout.
- **CSS3**: Styled the application with a modern, clean aesthetic and responsive design.
- **JavaScript**: Handled dynamic functionality, including cart management, local storage, and form validation.
- **Local Storage**: Persisted cart data and product quantities across sessions.
- **Markdown**: Used for documentation in this README file.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/electrons-ecommerce.git
   ```
2. Navigate to the project directory:
   ```bash
   cd electrons-ecommerce
   ```
3. Open `index.html` in a web browser to view the application locally.

No additional dependencies or build tools are required, as the project is purely front-end.

## Usage
- **Browsing Products**: Navigate through the product catalog on the homepage (`index.html`) to view available gadgets.
- **Adding to Cart**: Click "Add to Cart" on a product card, adjust quantities using the plus/minus buttons, and view the cart count in the header.
- **Cart Management**: Access the cart page (`cart.html`) to review selected items, update quantities, or clear the cart.
- **Adding Products**: Click the "Add more Products" button to open a popup form, fill in product details, and submit to dynamically add items to the catalog.
- **Authentication**: Use the login (`login.html`) or register (`register.html`) pages to simulate user account creation or access (UI only).
- **Checkout**: On the cart page, review the order summary and click "Proceed to Checkout" (UI only, no payment integration).

## Project Structure
- `index.html`: Homepage with product catalog and promotional sections.
- `cart.html`: Cart page for reviewing and managing selected items.
- `login.html`: Login page for user authentication.
- `register.html`: Registration page for new users.
- `main.js`: JavaScript file handling cart functionality, product addition, and UI interactions.
- `public/`: Directory for static assets like images (e.g., product images, icons).
- `README.md`: Project documentation (this file).

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request with a detailed description of your changes.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by modern e-commerce platforms like Amazon and Best Buy.
- Icons sourced from public domain or free icon libraries
- Built as a learning project to demonstrate front-end development capabilities.
