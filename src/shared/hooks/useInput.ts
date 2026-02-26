import { useState, type ChangeEvent } from "react";

export default function useInput() {
    const [value, setValue] = useState('');

    return {
        value,
        setValue,
        attr:{onChange:(e:ChangeEvent<HTMLInputElement>)=>setValue(e.target.value),value}
    }
}