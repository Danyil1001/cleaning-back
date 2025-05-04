import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('email.emailHost'),
      port: this.configService.get<number>('email.emailPort'),
      secure: false,
      auth: {
        user: this.configService.get<string>('email.emailUser'),
        pass: this.configService.get<string>('email.emailPassword'),
      },
    });
  }

  public async sendMail(
    html?: string,
  ) {
    try {
      const fromName = this.configService.get<string>('email.emailFromName');
      const fromEmail = this.configService.get<string>('email.emailFromEmail');

      const mailOptions = {
        from: `"${fromName}" <${fromEmail}>`,
        to: 'danyil.romania2002@gmail.com',
        subject: 'Service request',
        html
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return info;
    } catch (error) {
      console.error('Error occurred while sending email via SMTP:', error);
      throw error;
    }
  }
}
