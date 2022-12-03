import React from "react";
import Index from "../components/index/index";

import { IndexState } from "../context/index/IndexState";

const app = () => {
  return (
    <IndexState>
      <Index />
    </IndexState>
  );
};

export default app;
