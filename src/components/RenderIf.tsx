import React, { ReactNode } from "react";

interface IRenderIf {
  conditions?: boolean;
  children: ReactNode;
}
export const RenderIf = ({ conditions, children }: IRenderIf) => {
  if (!conditions) return null;
};
