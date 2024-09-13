
export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: '()',
      providerOptions: {
        host: "()",
        port: 123,
        auth: {
          user: "()",
          pass: "()",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: '()',
        defaultReplyTo: '()',
      },
    },
  },
});