import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

beforeAll(async () => {});

afterEach(() => {
  cleanup();
});

afterAll(() => cleanup());
