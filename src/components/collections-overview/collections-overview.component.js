import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {  selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => {
        return (
          <CollectionPreview
            key={id}
            {...otherCollectionsProps}
          ></CollectionPreview>
        );
      })}
    </div>
  );
};

const mstp = createStructuredSelector({
    collections: selectCollectionForPreview,
  });

export default connect(mstp) (CollectionsOverview)