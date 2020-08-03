import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";


const ShopPage = ({ collections }) => {
  console.log(collections);
  return (
    <div>
    <CollectionsOverview></CollectionsOverview>
    </div>
  );
};

export default ShopPage;
