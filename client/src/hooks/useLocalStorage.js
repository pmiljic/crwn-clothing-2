import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const stored = window.localStorage.getItem(key);
    const initial = stored ? JSON.parse(stored) : defaultValue;
    const [value, setValue] = useState(initial);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};