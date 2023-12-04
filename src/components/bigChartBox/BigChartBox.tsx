import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    Acoes: 4000,
    CDB: 2400,
    CryptoMoedas: 2400,
  },
  {
    name: "Mon",
    Acoes: 3000,
    CDB: 1398,
    CryptoMoedas: 2210,
  },
  {
    name: "Tue",
    Acoes: 2000,
    CDB: 9800,
    CryptoMoedas: 2290,
  },
  {
    name: "Wed",
    Acoes: 2780,
    CDB: 3908,
    CryptoMoedas: 2000,
  },
  {
    name: "Thu",
    Acoes: 1890,
    CDB: 4800,
    CryptoMoedas: 2181,
  },
  {
    name: "Fri",
    Acoes: 2390,
    CDB: 3800,
    CryptoMoedas: 2500,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Total Lucrado Diariamente

      </h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="CryptoMoedas"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="CDB"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Acoes"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
