import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const SortBy = ({
  placeholder,
  icon: Icon,
  options,
}: {
  placeholder: string;
  icon?: React.ReactNode;
  options: { key: string; value: string }[];
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [sortBy, setSortBy] = React.useState("");

  const onSortChange = (value: string) => {
    // get existing params and update the sort param
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      params.set(key, value);
    });
    params.set("sortBy", value);
    router.replace(`${pathname}?${params.toString()}`, {});
    setSortBy(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="sm:ml-auto shrink-0" variant="outline">
          {!!Icon && Icon}
          {placeholder}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuRadioGroup value={sortBy} onValueChange={onSortChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.key} value={option.key}>
              {option.value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortBy;
