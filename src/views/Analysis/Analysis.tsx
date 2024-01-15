import { useEffect, useState } from "react";

import { Card, Container, Skeleton, Typography } from "@mui/joy";
import ResponsiveChart from "../../components/ResponsiveChart";
import { ToastContainer, toast } from "react-toastify";
import { getAnalysisData, getFeatureList } from "../../services";
import { useParams } from "react-router-dom";
import { makeChartData } from "../../utils/dataConversion";

const Analysis = () => {
  const { name } = useParams();

  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [keysValues, setKeysValues] = useState<KeysValues>([]);
  const [isLoading, setIsLoading] = useState(true);

  const LOADING_DELAY = 1000;

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    try {
      const featureList = await getFeatureList();
      const analysisData = await getAnalysisData();

      setKeysValues(analysisData.map((analysisItem) => analysisItem.name));
      setChartData(makeChartData(featureList, analysisData));
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
      <header className="flex flex-col gap-4 pt-4 h-[80px]">
        <Typography level="h1">Analysis - {name}</Typography>
      </header>
      <section className="pt-5">
        <Card className="flex justify-center h-[calc(80vh-80px-60px)] p-5 overflow-y-scroll">
          <div className="flex justify-center items-center min-w-[800px] min-h-[580px]">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                className=""
                width="100%"
                height="100%"
              />
            ) : (
              <>
                {chartData.length ? (
                  <ResponsiveChart data={chartData} keys={keysValues} />
                ) : (
                  <Typography level="body-lg">
                    We are currently experiencing difficulty retrieving the
                    chart data. Will be back later!
                  </Typography>
                )}
              </>
            )}
          </div>
        </Card>
      </section>
    </Container>
  );
};

export default Analysis;
