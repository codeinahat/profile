import { Profile } from './profile.std.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';


Deno.test("profile name function", () => {
    const profile = new Profile();
    
    profile.firstname = "Jon";
    profile.lastname = "Doe";
    
    assertEquals(profile.name(), "Jon Doe");
})