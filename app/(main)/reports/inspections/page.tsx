"use client";

import { LayoutContext } from "@/layout/context/layoutcontext";
import { useContext, useEffect } from "react";

const InspectionsReport = () => {
  const { setLayoutConfig } = useContext(LayoutContext);

  useEffect(() => {
    setLayoutConfig((prevState) => ({ ...prevState, menuMode: "drawer" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Empty page</>;
};
export default InspectionsReport;
