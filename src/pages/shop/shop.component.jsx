import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../../src/components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    console.log(collections)
    return (
      <div>
        {collections.map(({ id, ...otherCollectionsProps }) => {
          return (
            <CollectionPreview
              key={id} { ...otherCollectionsProps }
            ></CollectionPreview>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
