import React from 'react'
import classnames from 'classnames';

function MenuCategory(props) {
  return (
    <>
      <div
        className={classnames({
          "text-zomato-400 p-0 bg-zomato-50 border-r-2 border-zomato-400":
            props.isActive,
        })}>
        <h3 id={props.name} onClick={props.onClickHandler}>
          {props.name}{" "}({props.items.length})
        </h3>
      </div>
    </>
  )
}

export default MenuCategory