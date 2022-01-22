import { expect, it } from "@jest/globals"
import sayHello from '../utils/helloworld.mjs'

it("Should say hello",()=>{
    const hello = sayHello();

    expect(hello).toBe('hello');
});