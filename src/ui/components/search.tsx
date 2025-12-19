"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import SearchIcon from "@atlaskit/icon/core/search";
import Textfield from "@atlaskit/textfield";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex flex-row w-full items-center justify-center flex-1 shrink-0">
      <Textfield
        name="show-search"
        id="show-search-textfield"
        alt="Search for shows textfield"
        placeholder={placeholder}
        title="Search for shows textfield"
        onChange={(e) => {
          handleSearch((e.target as HTMLInputElement).value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        elemBeforeInput={
          <div className="pl-1 top-1/2 h-4.5 w-4.5 text-gray-600 peer-focus:text-gray-900">
            <SearchIcon label="Search" />
          </div>
        }
        
      />
    </div>
  );
}
