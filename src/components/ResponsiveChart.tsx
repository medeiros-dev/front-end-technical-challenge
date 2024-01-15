import { ResponsiveBar } from "@nivo/bar";

const ResponsiveChart: React.FC<{
  data: ChartDataItem[];
  keys: KeysValues;
}> = ({ data, keys }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy="name"
      label={(d) => `${d.value}%`}
      margin={{ top: 120, right: 130, bottom: 120, left: 150 }}
      padding={0.2}
      groupMode="grouped"
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Average(%)",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 60,
          itemsSpacing: 2,
          symbolSize: 20,
          itemDirection: "left-to-right",
        },
      ]}
      role="application"
      ariaLabel="Model Analysis Chart"
    />
  );
};

export default ResponsiveChart;
