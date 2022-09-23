
/**
 * Physical Location
 */
export class Address {
    
    /**
     * Address line 1
     */
    line1: string | null = null;
    
    /**
     * Address line 2. Optional if needed
     */
    line2?: string;


    city: string | null = null;

    /**
     * State or province
     */
    state_province: string | null = null;

    /**
     * Postal Code
     */
    zip_code: string | null = null;
    
    
    constructor() { }

}