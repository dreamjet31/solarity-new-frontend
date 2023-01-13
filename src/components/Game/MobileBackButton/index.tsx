import React from "react";

import { MobileBack } from '../../icons';

const MobileBackButton = (props) => {
  return (
    <div className="p-3 text-white rounded-l-[12px] border border-[#343434]" style={{background: "rgba(20, 20, 20, 0.8)"}} onClick={props.onClick}>
      <MobileBack />
    </div>
  );
}

export default MobileBackButton;