import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const SortBy = ({
  value,
  setValue,
  placeholder,
  icon: Icon,
  options,
}: {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
  options: { key: string; value: string }[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="sm:ml-auto shrink-0" variant="outline">
          {!!Icon && Icon}
          {placeholder}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
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
