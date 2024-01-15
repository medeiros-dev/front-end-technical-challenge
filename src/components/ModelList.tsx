import { FC } from "react";
import ListItem from "./ListItem";
import { Typography } from "@mui/joy";

type ModelListProps = {
  data: ModelListItem[];
};

const ModelList: FC<ModelListProps> = ({ data }) => {
  if (data.length) {
    // Render list if there is data
    return (
      <ul role="test" className="w-100">
        {data.map((model) => (
          <ListItem key={model.id} model={model} />
        ))}
      </ul>
    );
  } else {
    // Render a message if there is no data
    return (
      <section className="flex justify-center items-center h-[50vh] w-full">
        <Typography level="body-lg">
          We dont have yet models to show you. Back later!
        </Typography>
      </section>
    );
  }
};

export default ModelList;
