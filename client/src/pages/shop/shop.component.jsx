import React, { useEffect, useContext, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { CollectionsContext } from '../../providers/collections/collections.provider';

import Spinner from '../../components/spinner/spinner.component';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ match }) => {
  const { updateCollections, toggleFetching, isFetching } = useContext(CollectionsContext);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      updateCollections(convertCollectionsSnapshotToMap(snapshot));
      toggleFetching();
    });
    return () => {
      unsubscribeFromSnapshot();
    }
  }, []);

  return (
    <ShopPageContainer >
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewContainer isLoading={isFetching}{...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageContainer isLoading={isFetching}{...props} />} />
      </Suspense>
    </ShopPageContainer >
  );
}

export default ShopPage;