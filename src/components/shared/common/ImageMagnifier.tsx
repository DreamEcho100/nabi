import { type HTMLAttributes, useState, useEffect, useRef } from "react";
import CustomNextImage from "./CustomNextImage";
import { cx } from "class-variance-authority";

function ImageMagnifier({
  src,
  width,
  height,
  className,
  priority,
  containerProps = {},
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5,
  alt = "",
}: {
  containerProps?: HTMLAttributes<HTMLDivElement>;
  src: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
  alt?: string;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
      {...containerProps}
    >
      <CustomNextImage
        src={src}
        className={cx(className, "magnify-image")}
        // style={{ height: height, width: width }}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onMouseEnter={(event) => {
          event.stopPropagation();
          // update image size and turn-on magnifier
          const elem = event.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(event) => {
          event.stopPropagation();
          // update cursor position
          const elem = event.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = event.pageX - left - window.pageXOffset;
          const y = event.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={(event) => {
          event.stopPropagation();
          // close magnifier
          setShowMagnifier(false);
        }}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          zIndex: "1",

          // prevent magnifier blocks the Pointermove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "gray",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
}

export default ImageMagnifier;
