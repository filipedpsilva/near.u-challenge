import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ImageNotFound from "@/src/ui/components/image-not-found";

test("ImageNotFound", () => {
  render(<ImageNotFound height={"h-100"} width={"w-100"} />);
  expect(screen.findByTitle("Image not found")).toBeDefined();
});
