import { Alert, Card, Skeleton, Typography } from "@mui/joy";
import { ListItemSkeletonTestIdEnum } from "./ListItemSkeletonTestIdEnum";

const ListItemSkeleton = () => {
  return (
    <Card
      size="lg"
      className="flex justify-between items-center cursor-pointer duration-150 min-h-24 hover:shadow-md hover:shadow-blue-400 mt-4"
      orientation="horizontal"
      data-testid={ListItemSkeletonTestIdEnum.LIST_ITEM_SKELETON}
    >
      <Typography className="font-bold self-center">
        <Skeleton loading={true}>List Item Skeleton</Skeleton>
      </Typography>
      <Alert variant="solid" className="w-32 flex justify-center text-center">
        <Skeleton loading={true}>ListItem Skeleton</Skeleton>
      </Alert>
    </Card>
  );
};

export default ListItemSkeleton;
