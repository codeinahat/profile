/**
 * Email Type
 */
export class Email {
    
    /**
     * 
     * @param value Email address
     */
    constructor(public value = '') {

    }
    
    /**
     * Checks if email format is valid
     * @returns verification result
     */
    verifyFormat(): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value);
    }
}