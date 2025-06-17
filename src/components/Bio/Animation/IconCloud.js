"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
    },
  },
  options: {
    reverse: true,
    depth: 1.2,
    imageScale: 2.5,
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltip: "native",
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.01,
    dragControl: true,
    wheelZoom: false,
    activeCursor: "default",
  },
};

export const renderCustomIcon = (icon, theme) => {
    const bgHex = theme === "light" ? "#f5f3eb" : "#1a1a1a";
    const minContrastRatio = 0; // No contrast checking
    const fallbackHex = icon.hex; // Use original icon color

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 48, // Slightly bigger if you want
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    }
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <div className="bg-[#E3E2D5] rounded-[10px] w-full max-w-md aspect-square mx-auto flex items-center justify-center">
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
    </div>
  );
}
