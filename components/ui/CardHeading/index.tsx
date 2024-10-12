export function CardHeading({
  bgColor = "bg-primary",
  shadowColor = "shadow-lg",
}) {
  return (
    <div className="relative my-10 flex w-full">
      <div className="flex-1 bg-transparent after:relative after:-bottom-[14px] after:block after:h-[50%] after:w-full after:rounded-br-lg after:shadow-[1px_2px_0px_1px_white] after:content-['']" />
      <div className="flex w-auto items-center justify-center rounded-tl-md rounded-tr-md bg-white px-4 py-1">
        Thissdfsdfsdfsdf
      </div>
    </div>
  );
}
