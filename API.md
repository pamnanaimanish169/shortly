# API Endpoints for Shortly

## Authentication
- **POST /api/signup**
  - **Input**: `{ "email": "user@example.com", "password": "Password123" }`
  - **Output**: `{ "message": "User created" }`
  - **Description**: Creates a user with hashed password.
- **POST /api/login**
  - **Input**: `{ "email": "user@example.com", "password": "Password123" }`
  - **Output**: `{ "token": "jwt_token" }`
  - **Description**: Authenticates user, returns JWT.

## Link Management
- **POST /api/shorten** (Authenticated)
  - **Input**: `{ "url": "https://example.com", "customAlias": "abc123" }`
  - **Output**: `{ "shortUrl": "https://shortly.app/abc123" }`
  - **Description**: Creates a short link, enforces 50-link/month limit, scans for malware.
- **GET /:id**
  - **Output**: Redirects to destination URL.
  - **Description**: Redirects short link, logs click.
- **GET /preview/:id**
  - **Output**: HTML page showing destination URL.
  - **Description**: Previews the destination for transparency.
- **PUT /api/links/:id** (Authenticated)
  - **Input**: `{ "destinationUrl": "https://newurl.com", "utmParams": { "utm_source": "blog" } }`
  - **Output**: `{ "message": "Link updated", "newUrl": "https://newurl.com?utm_source=blog" }`
  - **Description**: Edits a link, adds UTM parameters.

## Analytics
- **GET /api/analytics/:id** (Authenticated)
  - **Output**: `{ "totalClicks": 100, "countries": { "US": 60 }, "devices": { "mobile": 40 } }`
  - **Description**: Returns click data for a link.