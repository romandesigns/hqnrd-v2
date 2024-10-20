import React from "react";

export function Page({ params: { unit } }: { params: { unit: string } }) {
  return (
    <div>
      <p>Unit: {unit}</p>
    </div>
  );
}
