// This is server side rendering
import React from "react";

const AboutId = ({ params }: any) => {
  return (
    <>
      <div>AboutId : {params.id}</div>
    </>
  );
};

export default AboutId;
