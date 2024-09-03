import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function HeaderItem() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
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
          onClick={handleOpen}
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

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>How to play</DialogHeader>
        <DialogBody>
          1) Each guess must be a valid five-letter word. <br />
          2) The color of a tile will change to show you how close your guess
          was. <br />
          3) If the tile turns green, the letter is in the word, and it is in
          the correct spot. <br />
          4) If the tile turns yellow, the letter is in the word, but it is not
          in the correct spot. <br />
          5) If the tile turns gray, the letter is not in the word.
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </ul>
  );
}

export default HeaderItem;
