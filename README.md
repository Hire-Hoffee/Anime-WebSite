# Anime Website

A web application for viewing, commenting and rating anime. The application is built based on the **MVC (Model-View-Controller)** pattern using the following technologies:

**Backend:**
Node.js, Express.js, MySQL2.

**Frontend:**
HTML, CSS, JavaScript, Bootstrap, Handlebars.

#### Russian-language [README](https://github.com/Hire-Hoffee/Anime-WebSite/blob/main/README_RU.md).

#### Link to website [AnimeArea](http://petanimearea.freemyip.com).

<br>
<div style="text-align:center">
  <img src="https://i.imgur.com/zfn9rht.png" width="1000"/>
  <img src="https://i.imgur.com/PhsboHD.png" width="1000"/>
</div>
<br>

**Authentication:**

- **JWT (JSON Web Token):** A standard for creating and verifying access tokens. Used for user authentication and administrator authorization.

**Main parts of the application:**

- **Models (`/models`):** Responsible for interacting with the database, executing SQL queries and processing the received data.
- **Controllers (`/controllers`):** Process HTTP requests by calling the appropriate methods of models and passing data to views.
- **Views (`/views`):** Handlebars templates that are used to display HTML pages based on data received from controllers.

**Functionality:**

- **Anime Browsing:** Users can browse the anime catalog, search for anime by title, filter by genre, release year, voice studio and other parameters.
- **Anime description:** Each anime has a page with a detailed description, poster, screenshots, trailer, list of voice studios, director, genres, main characters and user comments.
- **Comments:** Authorized users can leave comments on anime.
- **Rating:** Authorized users can rate anime on a 10-point scale.
- **Watched:** Authorized users can mark anime as watched.
- **User Account:** Authorized users have access to their personal account where they can view their comments, favorite anime, change avatar and other settings.
- **Admin Panel:** Users with the “admin” role have access to the admin panel where they can manage anime (CRUD operations) and users.

<div style="text-align:center">
  <img src="https://i.imgur.com/WPB5LOi.png" width="550"/>
  <img src="https://i.imgur.com/brafpi7.png" width="550"/>
  <img src="https://i.imgur.com/2EUPe8k.png" width="550"/>
  <img src="https://i.imgur.com/ILxRjNl.png" width="550"/>
  <img src="https://i.imgur.com/6ESzTo6.png" width="550"/>
  <img src="https://i.imgur.com/meSzSQD.png" width="550"/>
  <img src="https://i.imgur.com/hNfeyM5.png" width="550"/>
  <img src="https://i.imgur.com/K3uiGKi.png" width="550"/>
</div>
<br>
<br>

**Logic of operation:**

1. The user sends an HTTP request (e.g., a GET request to `/main/catalog`).
2. Express.js routes the request to the appropriate controller (e.g., `mainController.getAllAnime`).
3. The controller calls the appropriate model method (e.g., `mainModel.getAllAnime`).
4. The model executes a SQL query against the database and retrieves data about all anime.
5. The model returns the data to the controller.
6. The controller renders a view (e.g., `animeViews/allAnime.hbs`), passing the retrieved data to it.
7. Handlebars generates an HTML page based on the template and data.
8. Express.js sends the generated HTML page to the user.

**Authentication and Authorization:**

- When a user registers, their password is hashed using bcrypt before being stored in the database.
- When a user logs in, an **accessToken** (valid for 15 minutes) and **refreshToken** (valid for 72 hours) are created. The AccessToken is stored in a cookie and the refreshToken is stored in the database.
- When requesting protected resources, the application checks if the accessToken is present in the cookie.
- If the accessToken is invalid or expired, the application checks the refreshToken and, if it is valid, generates a new accessToken.
- To access the administration panel, the application additionally checks if the user has the “admin” role.

**Starting the application:**

1. Clone the repository.
2. Create a database and import the schema from the `/DB_backup/Backup/AnimeSiteDB_Backup.sql` file.
3. Set up environment variables (`.env`) to connect to the database and JWT.
4. Run `npm install` to install the dependencies.
5. Start the server using `npm start` or `npm devstart`.
