import { cloneElement } from "react";

import "../src/overrides.scss";

export function storybookContainer(component) {
  return (args) => {
    const componentWithArgs = cloneElement(component, args);
    return (
      <div key={JSON.stringify(args)} className="p-3 bg-color-black d-flex">
        {componentWithArgs}
      </div>
    );
  };
}
