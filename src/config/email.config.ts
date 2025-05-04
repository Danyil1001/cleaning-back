import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  emailHost: process.env.EMAIL_HOST,
  emailPort: process.env.EMAIL_PORT,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASSWORD,
  // emailFromName: process.env.EMAIL_FROM_NAME,
  // emailFromEmail: process.env.EMAIL_FROM_EMAIL,
}));
