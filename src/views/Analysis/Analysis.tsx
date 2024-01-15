import { useEffect, useState } from "react";

import { Card, Container, Skeleton, Typography } from "@mui/joy";
import ResponsiveChart from "../../components/ResponsiveChart";

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
      console.error("Error fetching models:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, LOADING_DELAY);
    }
  };

  return (
    <Container>
      <header className="flex flex-col gap-4 pt-4 h-[80px]">
        <Typography level="h1">Analysis - {name}</Typography>
      </header>
      <section className="pt-5">
        <Card className="flex justify-center content-center h-[calc(80vh-80px-60px)] p-5 overflow-y-scroll">
          <div className="flex justify-center content-center min-w-[400px] min-h-[600px]">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                className=""
                width="100%"
                height="100%"
              />
            ) : (
              <ResponsiveChart data={chartData} keys={keysValues} />
            )}
          </div>
        </Card>
      </section>
    </Container>
  );
};

export default Analysis;
