import type { VideoHTMLAttributes } from "react";
import { cn } from "~/libs/utils";

export default function NabiMotionVideo(
  props: VideoHTMLAttributes<HTMLVideoElement>,
) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      // controls
      // preload="auto"
      poster="/images/356590525_274144968532340_6467254725081644430_n.jpg"
      width={575}
      height={320}
      {...props}
      {...props}
      className={cn("w-full object-cover", props.className)}
    >
      <source
        src="https://pub-e64c0d41da1941878cb722e3371ce7a2.r2.dev/NABI_MOTION_8SN_LOOP_16x9.mp4"
        // src="/videos/NABI_MOTION_8SN_LOOP_16x9.mp4"
        // type="video/quicktime"
        // type="video/webm"
        type="video/mp4"
      />
    </video>
  );
}
