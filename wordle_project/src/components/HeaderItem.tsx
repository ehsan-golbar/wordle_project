import { Button, Typography } from "@material-tailwind/react";

function HeaderItem() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button
          variant="text"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          How to Play
        </Button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button
          variant="text"
          className="flex items-center hover:text-blue-500 transition-colors"
          onClick={() => {
            window.location.reload();
          }}
        >
          Start Again
        </Button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button
          variant="text"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Help
        </Button>
      </Typography>
    </ul>
  );
}

export default HeaderItem;
