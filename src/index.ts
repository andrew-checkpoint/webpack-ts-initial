import { randomUUID } from "crypto";


function f(arg: string) {
    console.log(randomUUID(), arg);
}

f("strs");