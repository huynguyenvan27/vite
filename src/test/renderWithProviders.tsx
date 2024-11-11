import React from "react";

import { render } from "@testing-library/react";

export const renderWithProviders = (children: React.ReactNode) => {
  return render(<>{children}</>);
};
