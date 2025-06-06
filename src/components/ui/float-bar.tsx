import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Details from "../details";

export function FloatingDockDemo() {
  const { links } = Details();
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex items-center justify-center">
          <FloatingDock mobileClassName="mx-auto" items={links} />
        </div>
      </div>
    </div>
  );
}
