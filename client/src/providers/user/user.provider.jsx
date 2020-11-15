import React, { createContext, useEffect, useContext } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import { CartContext } from './../cart/cart.provider';

export const UserContext = createContext({
    currentUser: null,
    updateUser: () => { },
});

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);

    const updateUser = user => setCurrentUser(user);

    const { clearCart } = useContext(CartContext);


    useEffect(() => {
        if (!currentUser) clearCart();
    }, [currentUser]);

    return (
        <UserContext.Provider
            value={{
                currentUser,
                updateUser
            }}

        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;