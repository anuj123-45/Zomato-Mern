import React, { useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
  const [selected, isSelected] = useState();
  const onClickHandler = (e) => {
    if (e.target.id) {
      isSelected(e.target.id)
    }
    return;
  }
  return (
    <>
      <div className="w-full flex flex-col gap-3 cursor-pointer">
      <div className="w-56">
      <MenuCategory
          name="Recommended"
          items={[1, 2]}
          onClickHandler={onClickHandler}
          isActive={selected === "Recommended"}
        />
      </div>
      </div>
    </>
  );
};


export default MenuListContainer