export const getCollectionsForPreview = collections => {
    return collections ? Object.keys(collections).map(key => collections[key]) : [];
};

export const getCollectionById = (collectionUrlParam, collections) => {
    return collections ? collections[collectionUrlParam] : null;
};