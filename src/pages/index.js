import * as React from "react";

const onClickHandler = () => {
  window.dataLayer.push({
    event: "select_item",
    ecommerce: {
      item_list_id: "rooms_listing",
      item_list_name: "Rooms Listing",
    },
  });
};

const IndexPage = () => {
  return (
    <main>
      <h1>Index Page</h1>
      <button onClick={onClickHandler}>Click here</button>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
