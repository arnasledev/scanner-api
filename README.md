### Install
Copy `.env.example` to `.env` and change port to desired one if necessary.

For install run `npm run install`

### Development
To run app in DEV environment just run `npm run dev`. The server will be reachable at defined port.

### Production
1. `npm run build` to compile code
2. `npm start` to start application

### Testing
Open `index.html` in your browser after server install and watch for console changes.
CURL or just send typical `POST` request to `http://localhost:1337`:

- endpoint: `/api/scan`
- method `POST`
- params `{id}`, example: 1. (***available 1-100***)
- responses:
    - **200** - ok
        - `{message: 'Data processed'}`

### Notes
After running APP there will be local temporary database created with 100 records inside.