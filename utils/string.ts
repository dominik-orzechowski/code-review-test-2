import {useState} from "react";

export const getRandomNumber = () => {
    const [foo, setFoo] = useState();
    return Math.random();
}