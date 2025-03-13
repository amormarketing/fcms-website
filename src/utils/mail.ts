import nodemailer from 'nodemailer';

const EMAIL_SERVICE = import.meta.env.EMAIL_SERVICE;
const EMAIL_PASSWORD = import.meta.env.EMAIL_PASSWORD;
export const EMAIL_ACCOUNT = import.meta.env.EMAIL_ACCOUNT;

export const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_ACCOUNT,
    pass: EMAIL_PASSWORD,
  },
});

export const emailTemplate = (firstName: string, lastName: string, email: string, phone: string, message: string) => {
  return `
      <div class="email-header">
        <h1>EMAIL FROM FCMS WEBSITE - CONTACT FORM</h1>
      </div>
      <div class="email-content">
        <h3>FROM:</h3>
        <p>${firstName} ${lastName} - ${email}</p><br />
        <h3>MESSAGE:</h3>
        <p>${message}</p>
      </div>
      <div class="email-footer">
        <span>Phone:</span>
        <span>${phone}</span>
      </div>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        .email-header {
          background-color: rgb(71, 125, 179);
          color: white;
          padding: 10px;
          text-align: center;
        }
        .email-content {
          margin: 20px 0;
        }
        .email-content h3 {
          display: inline-block;
          color: #333;
          margin-right: 10px;
        }
        .email-content p {
          display: inline-block;
          font-size: 1rem;
          color: #555;
        }
        .email-footer {
          border-top: 1px solid #ddd;
          margin-top: 20px;
          padding-top: 10px;
          color: #888;
        }
      </style>
    `;
};
