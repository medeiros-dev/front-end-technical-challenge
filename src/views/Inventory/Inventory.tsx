import { useEffect, useState } from "react";

import { Container, Divider, Typography } from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";
import ListItemSkeleton from "../../components/ListItemSkeleton/ListItemSkeleton";
import ModelList from "../../components/ModelList/ModelList";

import { getModels } from "../../services";
import { makeModelList } from "../../utils/dataConversion";
import { InventoryTestIdEnum } from "./InventoryTestIdEnum";

const Inventory = () => {
  const [ḿodelListData, setModelListData] = useState<ModelListItem[]>([]);
  const [isloading, setIsLoading] = useState(true);

  const LOADING_DELAY = 1000;
  const NUMBER_OF_SKELETONS = 3;

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    try {
      const modelsDataResponse = await getModels();
      setModelListData(makeModelList(modelsDataResponse));
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.", {
        position: "top-right",
      });
      console.error("Error fetching models:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, LOADING_DELAY);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <header
        className="flex flex-col gap-4 pt-4 mb-4"
        data-testid={InventoryTestIdEnum.HEADER}
      >
        <Typography level="h1">Models</Typography>
      </header>
      <Divider />
      <section>
        {isloading ? (
          <div data-testid={InventoryTestIdEnum.LOADING_CONTAINER}>
            {Array.from({ length: NUMBER_OF_SKELETONS }, (_, index) => (
              <ListItemSkeleton key={index} />
            ))}
          </div>
        ) : (
          <ModelList data={ḿodelListData} />
        )}
      </section>
    </Container>
  );
};

export default Inventory;
