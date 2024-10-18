import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CategorySelect({
  slugs,
}: {
  slugs: { label: string; slug: string }[];
}) {
  return (
    <Select>
      <SelectTrigger className="h-14">
        <SelectValue placeholder="Browse Rooms" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {slugs.map((option, index) => (
            <SelectItem key={index} value={option.slug}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
