import { Card, CardBody, Typography } from "@material-tailwind/react";

function WinCard() {
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            You Win
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default WinCard;
