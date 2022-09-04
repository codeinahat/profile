import { Profile } from './profile.std.ts';


/**
 * Profile targeting clientale
 */
export class CustomerProfile extends Profile {

    constructor(public isGuest = false) {
        super();
    }

}