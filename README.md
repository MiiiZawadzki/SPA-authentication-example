
# Example of Cookie-Based Authentication in SPA App with Vue and Laravel

This is an example of a cookie-based authentication mechanism in a Single Page Application (SPA). The entire system (frontend and backend) is a simplified version of a user ticket management system called **TicketApp**.

Both the frontend application and the API are intentionally simple, focusing primarily on the authentication mechanism, rather than building a complex application.

![16_prettify](https://github.com/user-attachments/assets/f2072250-535d-48d7-8226-a1b25408cb12)


## Frontend
The frontend application is a typical Single Page Application (SPA) built with **Vue 3.5**, using **Tailwind CSS** for basic UI styling, **Axios** for handling requests, and **Pinia** for state management.


### Frontend Setup

To set up the Vue app, navigate to the `vue` directory. Optionally, configure the app settings as needed and then run the following commands:

```bash
  npm install
```

```bash
  npm run dev
```
This will install dependencies and start the development server for the Vue application.



## Backend
The backend is a simple API built with **Laravel 11**, and authentication is managed using the official **Laravel Sanctum** package.

### Backend Setup

To set up the Laravel app, navigate to the `laravel` directory, set up the `.env` file, optionally configure other settings, and run the following commands:

```bash
  composer install
```

```bash
  php artisan serve
```
This will install the required dependencies and start the development server for the Laravel API.
