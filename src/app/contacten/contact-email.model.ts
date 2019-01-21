import {Contact} from './contact.model';

export class Email {
  constructor(private id: number, private email: string, private contactId: Contact) {}
}
