import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionsContext } from '../../providers/collections/collections.provider';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ match }) => {
  const { getCollection } = useContext(CollectionsContext);

  const collection = getCollection(match.params.collectionId);
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;