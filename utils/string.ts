import {useState} from "react";

export const getRandomNumber = () => {
    const [foo, setFoo] = useState();
    console.log('foo: ', foo);
    return Math.random();
}