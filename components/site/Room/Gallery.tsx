import { Wrapper } from "../components";

export function Gallery() {
  return (
    <header className="max-lg:p-2">
      <Wrapper className="rounded-md border p-2 lg:p-1">
        <div className="grid grid-cols-4 grid-rows-2 gap-1 lg:p-2">
          <figure className="col-span-2 row-span-2 aspect-square rounded-lg bg-pink-500" />
          <figure className="col-start-3 col-end-5 rounded-lg bg-purple-500" />
          <figure className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-lg bg-orange-500" />
          <figure className="col-start-4 col-end-5 rounded-lg bg-yellow-500" />
        </div>
      </Wrapper>
    </header>
  );
}
