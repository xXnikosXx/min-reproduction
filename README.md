ran command: npx create-strapi-app@5.0.0-rc.19 min-reproduction

? Please log in or sign up.
? Please log in or sign up. Skip
? Do you want to use the default database (sqlite) ? (Y/n) y
? Do you want to use the default database (sqlite) ? Yes
? Start with an example structure & data? (Y/n) n
? Start with an example structure & data? No
? Start with Typescript? (Y/n) y
? Start with Typescript? Yes
? Install dependencies with npm? (Y/n) y
? Install dependencies with npm? Yes
? Initialize a git repository? (Y/n) y
? Initialize a git repository? Yes

once installation ended, ran cd min*, then ran npm install @strapi/provider-email-nodemailer --save

once installation ended, added following code to min-reproduction/config/plugins.ts:


export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: "(host)",
        port: (port),
        auth: {
          user: "(user)",
          pass: "(pass)",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: '(email)',
        defaultReplyTo: '(email)',
      },
    },
  },
});

(...) = redacted

ran npm run develop

created an admin user.

anvigated to settings > advanced settings > enable email confirmation : true && redirection url: https://example.com && save

sent user registration request (using postman)

POST http://localhost:1337/api/auth/local/register
(no auth)
body (form data)
    username: randomUsername
    email: random@emailasdf.com
    password:qwerty1234

response: 400 bad request
body:
{
    "data": null,
    "error": {
        "status": 400,
        "name": "ApplicationError",
        "message": "Missing schema in defaultSanitizeOutput",
        "details": {}
    }
}

checking strapi dashboard, user was created (see screenshot.png)

logged in console: [2024-09-13 18:59:08.145] http: POST /api/auth/local/register (78 ms) 400