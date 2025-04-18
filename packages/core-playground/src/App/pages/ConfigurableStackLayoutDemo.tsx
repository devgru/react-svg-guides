import { useState } from 'react';
import { HTML, StackLayout, useRefWithSize, useSizeState } from '@lay-lay/core';

export const ConfigurableStackLayoutDemo = () => {
  const [foWidth, setFoWidth] = useState(200);

  const htmlRef = useRefWithSize<HTMLDivElement>();
  const rootSizeState = useSizeState();

  return (
    <>
      <h2>Configurable stack demo</h2>
      <p>
        a <code>foreignObject</code> and three <code>rect</code>s, pushing to
        the right
      </p>
      <input
        type="range"
        min="80"
        max="320"
        step="10"
        value={foWidth}
        onChange={(e) => setFoWidth(parseInt(e.target.value))}
      />
      <br />
      <svg
        width={rootSizeState.width}
        height={rootSizeState.height}
        style={{ background: 'rgba(255, 0, 0, 0.1)' }}
      >
        <StackLayout stackDirection="vertical" sizeState={rootSizeState}>
          <HTML
            ref={htmlRef}
            width={foWidth}
            height={htmlRef.height}
            fontSize={30}
          >
            <div style={{ border: '1px solid red' }}>
              The width is {rootSizeState.width}
              <br />
              The height is {rootSizeState.height}
            </div>
          </HTML>
          <StackLayout stackDirection="horizontal">
            <Rect />
            <Rect />
            <Rect />
          </StackLayout>
        </StackLayout>
      </svg>
    </>
  );
};

const Rect = () => (
  <rect
    width={100}
    height={100}
    stroke="blue"
    fill="transparent"
    strokeWidth={2}
  />
);
