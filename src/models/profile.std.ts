import { Email } from './email.model.ts';
import { Address } from './address.model.ts';

/**
 * Standard profile
 */
export class Profile { 
    
    firstname: string | null = null;
    lastname: string | null = null;
    age: number | null = null;
    email: Email | null = null;
    phone: string | null = null;
    address: Address | null = null;
    addresses_list: Address[] = [];


    /**
     * Returns full name 
     * @returns name
     */
    name(): string {
        return `${this.firstname} ${this.lastname}`;
    }


}
