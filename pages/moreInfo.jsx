import React from "react";
import MoreInfo from "../components/moreInfo/moreInfo";

import { IndexState } from "../context/index/IndexState";

const MoreInfoApp = ({ query }) => {
  return (
    <IndexState>
      <MoreInfo query={query} />
    </IndexState>
  );
};

export default MoreInfoApp;

export function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}
