import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private resend = new Resend(process.env.RESEND_API_KEY);

  async sendContactEmail(data: {
    nome: string;
    email: string;
    telefone: string;
    empresa: string;
    equipamento: string;
    mensagem: string;
  }) {
    const { data: emailData, error } = await this.resend.emails.send({
      from: 'site@kairosindustrial.com.br',
      to: 'adm@kairosindustrial.com.br',
      subject: 'Novo contato pelo site Kairos',
      text: `
Nome: ${data.nome}
E-mail: ${data.email}
Telefone: ${data.telefone}
Empresa: ${data.empresa}
Equipamento: ${data.equipamento}

Mensagem:
${data.mensagem}
      `,
    });

    if (error) {
      console.error('Erro do Resend:', error);
      throw new Error(error.message);
    }

    console.log('E-mail enviado pelo Resend:', emailData);
  }
}
