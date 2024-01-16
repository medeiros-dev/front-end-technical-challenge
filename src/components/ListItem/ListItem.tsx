import { FC } from "react";

import { Alert, Card, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

import { ListItemTestIdEnum } from "./ListItemTestIdEnum";

type ListItemProps = {
  model: ModelListItem;
};

const ListItem: FC<ListItemProps> = ({ model }) => {
  return (
    <li className="list-none">
      <Card
        size="lg"
        className="flex justify-between items-center cursor-pointer duration-150 min-h-24 hover:shadow-md hover:shadow-blue-400 mt-4"
        orientation="horizontal"
        component={Link}
        to={`/analysis/${model.name}`}
        data-testid={ListItemTestIdEnum.LIST_ITEM}
      >
        <Typography
          className="font-bold self-center"
          data-testid={ListItemTestIdEnum.LIST_ITEM_NAME}
        >
          {model.name}
        </Typography>
        <Alert
          variant="solid"
          color={model.type === "Classification" ? "primary" : "success"}
          className="w-32 flex justify-center text-center"
          data-testid={ListItemTestIdEnum.LIST_ITEM_TYPE}
        >
          {model.type}
        </Alert>
      </Card>
    </li>
  );
};

export default ListItem;
