import { Profile } from './profile.std.ts';


/**
 * Profile targeting clientale
 */
export class CustomerProfile extends Profile {

    #payment_method: any;

    /**
     * 
     * @param isGuest is customer a guess ?
     */
    constructor(public isGuest = true) {
        super();
    }


    /**
     * Adds payment method to profile
     * @param method method of payment model
     */
    addPaymentMethod<T>(method: T): void {
        this.#payment_method = method;
    }
    
}