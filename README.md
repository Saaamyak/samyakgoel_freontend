# Steeleye Assignment (Samyak Goel_Front End)

## Q1. Explain what the simple List component does?

Ans:- The List component is a functional component in React that has been memoized and wrapped by the WrappedListComponent. It is designed to receive an array of objects as props, where each object must contain a required property called "text". The prop-types package is utilized to validate the exact type of props at runtime.

The List component is responsible for rendering a list of items using the SingleListItem component, which has also been memoized and wrapped by the WrappedSingleListItem component. SingleListItem component is designed to accept multiple props, including the text property of each item, and displays it within the component.

Additionally, it contains an onClickHandler function that is activated when the text is clicked by the mouse.

## Q2. What problems / warnings are there with code?

Ans:-
```bash 
console direct output
 [plugin:vite:import-analysis] Failed to resolve import "prop-types" from "src/App.jsx". Does the file exist?
/home/damner/code/src/App.jsx:2:0
15 |  var _jsxFileName = "/home/damner/code/src/App.jsx",_s = $RefreshSig$();
16 |  import React, { useState, useEffect, memo } from "react";
17 |  import PropTypes from "prop-types";
   |                         ^
18 |  import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
19 |  const WrappedSingleListItem = ({
    at formatError (file:///home/damner/code/node_modules/vite/dist/node/chunks/dep-561c5231.js:35003:46)
    at TransformContext.error (file:///home/damner/code/node_modules/vite/dist/node/chunks/dep-561c5231.js:34999:19)
    at normalizeUrl (file:///home/damner/code/node_modules/vite/dist/node/chunks/dep-561c5231.js:40109:33)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async TransformContext.transform (file:///home/damner/code/node_modules/vite/dist/node/chunks/dep-561c5231.js:40243:47)
    at async Object.transform (file:///home/damner/code/node_modules/vite/dist/node/chunks/dep-561c5231.js:35252:30)
    at async loadAndTransform (file:///home/damner/code/node_modules/vite/dist/node/chunks/dep-561c5231.js:39740:2) )}
```
    

### Errors List
1. PropType.shapeofproperty dosen't exist
2. TypeError:setSelectedIndex is not a function

### Warnings list
1. Every child element within a list must possess a distinct "key" prop.
2. It is not possible to modify a component (WrappedListComponent) during the rendering of a distinct component (WrappedSingleListItem).

## Q3. Please fix, optimize, and/or modify the component as much as you think is necessary?

Ans:- 
```javascript 
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
```

```the file app.js is present on the path src/App.js```