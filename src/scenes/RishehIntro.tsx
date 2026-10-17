import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { theme } from "../theme";

export const RishehIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const titleProgress = Easing.out(Easing.cubic)(interpolate(frame, [12, 52], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp"
  }));
  const titleY = interpolate(titleProgress, [0, 1], [55, 0]);
  const subtitleOpacity = interpolate(frame, [55, 85], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp"
  });
  const orbit = interpolate(frame, [0, 360], [0, 360]);
  const outro = interpolate(frame, [310, 359], [1, 0.82], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill style={{
      backgroundColor: theme.colors.forest,
      color: theme.colors.warmWhite,
      fontFamily: theme.fonts.display,
      overflow: "hidden",
      justifyContent: "center",
      padding: 120,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at ${55 + Math.sin(orbit * Math.PI / 180) * 8}% 40%, #28614c 0%, ${theme.colors.forest} 55%)`,
      }} />
      <div style={{
        position: "absolute", width: 620, height: 620, borderRadius: "50%",
        border: "1px solid rgba(247,245,239,.18)",
        right: 110, top: 220, transform: `rotate(${orbit}deg) scale(${outro})`,
      }}>
        <div style={{
          position: "absolute", width: 18, height: 18, borderRadius: 99,
          background: theme.colors.accent, top: 42, left: 85,
          boxShadow: `0 0 40px ${theme.colors.accent}`,
        }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1180 }}>
        <div style={{
          color: theme.colors.accent, fontSize: 22, letterSpacing: 7,
          textTransform: "uppercase", marginBottom: 28,
          opacity: interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" }),
        }}>RISHEH MOTION STUDIO</div>
        <div style={{
          fontSize: 112, lineHeight: 0.98, fontWeight: 700, letterSpacing: -5,
          opacity: titleProgress, transform: `translateY(${titleY}px)`,
        }}>
          Ideas into<br />moving stories.
        </div>
        <div style={{
          fontSize: 32, color: theme.colors.muted, marginTop: 34,
          opacity: subtitleOpacity, transform: `translateY(${(1 - subtitleOpacity) * 14}px)`,
        }}>One workflow. From first frame to final render.</div>
      </div>
      <div style={{
        position: "absolute", bottom: 72, left: 120, right: 120,
        height: 2, background: "rgba(247,245,239,.18)",
      }}>
        <div style={{
          height: "100%", width: `${Math.min(100, frame / 359 * 100)}%`,
          background: theme.colors.accent,
        }} />
      </div>
    </AbsoluteFill>
  );
};
