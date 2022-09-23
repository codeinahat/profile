import { Email } from '../src/models/email.model.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'; 


Deno.test("email format validation", () => {
    const email = new Email('chapman@gmail.com');

    assertEquals(email.verifyFormat(), true);
})

Deno.test("wrong email format", () => {
    const email = new Email('fvasdfdasfsadf');

    assertEquals(email.verifyFormat(), false)
})