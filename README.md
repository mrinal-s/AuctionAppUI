
---

# Genix-Auctions - Angular Frontend for Auction Bidding System

## Overview

Genix-Auctions is an Angular frontend application built to interact with the BidRestAPI for managing auction items, bids, and user authentication. The application allows users to view auctions, place bids, and manage their profiles.

---

## Project Structure

### 1. **src/app**
   The core folder for the Angular application.
   
   - **auctions**: Components related to auction items.
     - `auctions.component.ts`: Handles the logic for displaying auction items.
     - `auctions.component.html`: The template for rendering auction items on the UI.
     - `auctions.component.css`: Styles specific to the auctions component.
     - `auctions.component.spec.ts`: Unit tests for the auctions component.
   
   - **dashboard**: Components for user dashboard functionality.
     - `dashboard.component.ts`: Manages the user’s dashboard, including auction and bid management.
     - `dashboard.component.html`: UI template for the user dashboard.
     - `dashboard.component.css`: Styles for the dashboard component.
     - `dashboard.component.spec.ts`: Unit tests for the dashboard component.
   
   - **header**: Handles the application's navigation bar and header.
     - `header.component.ts`: Logic for managing the header and navigation links.
     - `header.component.html`: HTML template for the header and navigation.
     - `header.component.css`: Styles for the header component.
     - `header.component.spec.ts`: Unit tests for the header component.
   
   - **hero**: (Likely for a hero section that showcases the main features or landing page).
   
   - **login**: Components related to user authentication.
     - `login.component.ts`: Logic for user login.
     - `login.component.html`: Template for the login form.
     - `login.component.css`: Styles for the login page.
     - `login.component.spec.ts`: Unit tests for the login component.
   
   - **signup**: Components for new user registration.
     - `signup.component.ts`: Logic for handling new user registration.
     - `signup.component.html`: Template for the signup form.
     - `signup.component.css`: Styles for the signup page.
   
   - **services**: Contains the services used to communicate with the backend API (BidRestAPI).
     - `auction.service.ts`: Service that interacts with the BidRestAPI to manage auction items (e.g., fetching auction lists, placing bids).
     - `auth.service.ts`: Service for user authentication, including login, registration, and token management.

---

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) and npm (Node Package Manager).
- [Angular CLI](https://angular.io/cli) installed globally.


---

## Features

### User Authentication
- **Login**: Allows users to log in using their credentials.
- **Signup**: New users can register to participate in auctions.
  
### Auction Management
- **View Auctions**: Users can view a list of available auctions.
- **Place Bids**: Registered users can place bids on auction items.

### Dashboard
- **User Dashboard**: Displays the user’s active auctions and bids.

### Header
- **Navigation**: Provides navigation links to key sections like auctions, login, signup, and the user dashboard.

---

## API Integration

This Angular app consumes the BidRestAPI endpoints to manage user authentication, auctions, and bids. The services in the `src/app/services` directory are responsible for communicating with the API.

For example:
- `auth.service.ts`: Handles login and registration by calling the API endpoints.
- `auction.service.ts`: Fetches auction data and manages bids.

---

## Running Tests

You can run unit tests for the application components and services using the following command:

```bash
ng serve
```

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes and submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

This `README.md` file can be further extended with more detailed API interaction instructions, deployment steps, or feature descriptions, depending on your project's specific needs.
