import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/creat-contact.dto.js';
import { MailService } from './mail.service.js';

@Injectable()
export class ContactService {
  constructor(private readonly mailService: MailService) {}

  async create(data: CreateContactDto) {
    await this.mailService.sendContactEmail(data);

    return {
      message: 'Dados recebidos e e-mail enviado!',
      data,
    };
  }
}
