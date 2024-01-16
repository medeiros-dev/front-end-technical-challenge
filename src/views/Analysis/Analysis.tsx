import { useEffect, useState } from "react";

import ResponsiveChart from "../../components/ResponsiveChart/ResponsiveChart";
import { Card, Container, Skeleton, Typography } from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";

import { getAnalysisData, getFeatureList } from "../../services";
import { useParams } from "react-router-dom";
import { makeChartData } from "../../utils/dataConversion";
import { AnalysisTestIdEnum } from "./AnalysisTestIdeEnum";

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
        <Typography level="h1" data-testid={AnalysisTestIdEnum.SCREEN_TITLE}>
          Analysis - {name}
        </Typography>
      </header>
      <section className="pt-5">
        <Card
          className="flex justify-center h-[calc(80vh-80px-60px)] p-5 overflow-y-scroll"
          data-testid={AnalysisTestIdEnum.CHART_CARD}
        >
          <div className="flex justify-center items-center min-w-[800px] min-h-[580px]">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                className=""
                width="100%"
                height="100%"
                data-testid={AnalysisTestIdEnum.CHART_SKELETON}
              />
            ) : (
              <>
                {chartData.length ? (
                  <ResponsiveChart
                    data={chartData}
                    keys={keysValues}
                    data-testid={AnalysisTestIdEnum.CHART}
                  />
                ) : (
                  <Typography
                    level="body-lg"
                    data-testid={AnalysisTestIdEnum.EMPTY_MESSAGE}
                  >
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
