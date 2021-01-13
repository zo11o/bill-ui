import React from "react";
import TransitionMain from "components/TransitionMain";
import { connet } from "react-redux";
interface AsyncRoutesProps {
  children: React.ReactNode;
  // init: boolean;
}

function AsyncRoutes(props: AsyncRoutesProps) {
  return <TransitionMain>{props.children}</TransitionMain>;
}

export default AsyncRoutes;
