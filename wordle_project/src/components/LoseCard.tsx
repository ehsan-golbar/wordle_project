import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function LoseCard() {
  const selectedWord = useSelector((state: RootState) => state.selectedWord);
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Sorry !
            <br />
            The word was {` ${selectedWord.toUpperCase()}`}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoseCard;
