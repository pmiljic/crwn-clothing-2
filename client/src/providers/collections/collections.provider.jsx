import React, { createContext, useState } from 'react';

import {
    getCollectionsForPreview,
    getCollectionById
} from './collections.utils';

import { useLocalStorage } from '../../hooks/useLocalStorage';

export const CollectionsContext = createContext({
    collections: [],
    updateCollections: () => { },
    collectionsForPreview: [],
    getCollection: null,
    isFetching: true,
    toggleFetching: () => { }
});

const CollectionsProvider = ({ children }) => {
    const [collections, setCollections] = useLocalStorage('collections', []);
    const [isFetching, setIsFetching] = useState(true);

    const updateCollections = items => setCollections(items);


    const collectionsForPreview = getCollectionsForPreview(collections);
    const getCollection = id => getCollectionById(id, collections);

    const toggleFetching = value => setIsFetching(value);


    return (
        <CollectionsContext.Provider
            value={{
                collections,
                updateCollections,
                collectionsForPreview,
                getCollection,
                isFetching,
                toggleFetching
            }}
        >
            {children}
        </CollectionsContext.Provider>
    );
};

export default CollectionsProvider;