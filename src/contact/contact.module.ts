import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller.js';
import { ContactService } from './contact.service.js';
import { MailService } from './mail.service.js';

@Module({

  
  controllers: [ContactController],
  providers: [ContactService, MailService],
})
export class ContactModule {}
