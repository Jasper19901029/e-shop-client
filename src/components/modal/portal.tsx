"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({
  children,
  rootId = "portal-root",
}: {
  children: React.ReactNode;
  rootId: string;
}) {
  const [targetRoot, setTargetRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const existingRoot = document.getElementById(rootId);
    let root: HTMLElement;
    root = document.createElement("div");
    root.id = "portal-root";
    document.body.appendChild(root);
    setTargetRoot(root);
    return () => {
      if (!existingRoot) {
        document.body.removeChild(root);
      }
    };
  }, [rootId]);

  if (!targetRoot) return null;
  return createPortal(children, targetRoot);
}
