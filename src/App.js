import React, { useState, useEffect, memo} from "react";



// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <button
      className="rounded-md px-4 py-2 text-neutral-100"
      style={{ backgroundColor: isSelected ? "#4ade80" : "#f87171" }}
      onClick={() => {
        onClickHandler();
      }}
    >
      {text}
    </button>
  );
};



const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    console.log("inside useEffect ");
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    console.log("what's going on");
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index ? true : false}
        />
      ))}
    </div>
  );
};


const List = memo(WrappedListComponent);

export default List;