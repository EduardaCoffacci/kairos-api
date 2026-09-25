import { Body, Controller, Post, Get } from '@nestjs/common';
import { ContactService } from './contact.service.js';
import { CreateContactDto } from './dto/creat-contact.dto.js';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  test() {
    return 'API funcionando!';
  }

  @Post()
  create(@Body() data: CreateContactDto) {
    return this.contactService.create(data);
  }
}
