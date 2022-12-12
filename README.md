# SHOP TEMPLATE
// Developed by Ford Nicholas Jones. 2022 Graduate of Enspiral DEV Academy, Auckland, New Zealand.

# TECH STACK:
// SQLite 3,
// Express,
// Superagent & Axios
// React & react-router
// Redux-toolkit
// Auth0
// Stripe

# NOTES FOR DEVELOPERS
// Every item in the shop must follow a naming convention in the product obj, this is how products in the db are found and returned

// For unique names, create a new db col in the seed file and pass it as the return inside of your components. e.g. name={item.unique_name}

// Signup to stripe and pass your own unique client-secret & endpoint to handle and recieve payments https://stripe.com/

// Signup for Auth0 to access the admin UI. Users/accounts registered to the url must be created on the auth0 website. This template does not contain post routes for user signup. https://auth0.com/

// The admin UI contains a route for adding products to the database. Uploading images for the product is handled with Multer which is configured to consume entire files which are then sent to the public folder. If this is a security concern for you consider using multer to send the files as binary to the db.

