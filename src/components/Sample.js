import React, { useRef } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  const handleClick = () => {
    // myRef.current을 사용하여 DOM 요소에 접근
    console.log(myRef.current);
  };

  return (
    <div>
      {/* ref 속성에 myRef를 할당 */}
      <button ref={myRef} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default MyComponent;