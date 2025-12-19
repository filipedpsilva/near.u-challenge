import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Search from "@/src/ui/components/search";

vi.mock("next/navigation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/navigation")>();
  const { useRouter } = await vi.importActual<
    typeof import("next-router-mock")
  >("next-router-mock");

  const usePathname = vi.fn().mockImplementation(() => {
    const router = useRouter();
    return router.pathname;
  });

  const useSearchParams = vi.fn().mockImplementation(() => {
    const router = useRouter();
    return new URLSearchParams(router.query?.toString());
  });

  return {
    ...actual,
    useRouter: vi.fn().mockImplementation(useRouter),
    usePathname,
    useSearchParams,
  };
});

test("Search component has title", () => {
  render(<Search placeholder="Test text" />);
  expect(screen.findByTitle("Search for shows textfield")).toBeDefined();
});

test("Search component has alt text", () => {
  render(<Search placeholder="Test text" />);
  expect(screen.findByAltText("Search for shows textfield")).toBeDefined();
});
