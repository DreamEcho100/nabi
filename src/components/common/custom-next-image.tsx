"use client";
import Image from "next/image";
import { forwardRef } from "react";

type ImageProps = Parameters<typeof Image>[0];

export interface ICustomNextImageProps extends Omit<ImageProps, "alt"> {
  className?: string;
  placeholder?: "blur" | "empty";
  role?: string;
  alt?: string;
}

const CustomNextImage = forwardRef<HTMLImageElement, ICustomNextImageProps>(
  (props, ref) => {
    return (
      <Image
        ref={ref}
        onError={(elem) => {
          elem.currentTarget.src = "/svgs/bbblurry.svg";
          elem.currentTarget.classList.add("no-content");
        }}
        {...props}
        unoptimized={props.unoptimized ?? true}
        placeholder={props.placeholder ?? "empty"}
        alt={props.alt ? props.alt : ""}
      />
    );
  },
);

CustomNextImage.displayName = "CustomNextImage";

export default CustomNextImage;
