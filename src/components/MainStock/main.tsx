import * as S from "./style"
import Chart from "react-apexcharts"
import { useEffect, useState } from "react"
import { SelectDate, UserItem } from "../../atom/Atom"
import { useRecoilValue } from "recoil"
import axios from "axios"

export default function Main() {
  const itemCode = useRecoilValue(UserItem)
  const selecDate = useRecoilValue(SelectDate)
  console.log(itemCode, selecDate)
  type DataType = {
    date: number
    currentPrice: number
    highPrice: number
    lowPrice: number
    endPrice: number
    tradAmount: number
  }

  type CandlDataType = {
    x: any
    y: number[]
  }

  type SideDataType = {
    x: any
    y: number
  }
  const [data, setData] = useState<number[][]>([])

  const [candleData, setCandleData] = useState<CandlDataType[]>([])
  const [sideData, setSideData] = useState<SideDataType[]>([])
  const [si, serSi] = useState({
    min: 0,
    max: 0,
  })

  useEffect(() => {
    setCandleData([])
    setSideData([])
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.alphasquare.co.kr/data/v3/prices/candles/${itemCode.id}?freq=${selecDate.date}&limit=600`
        )
        serSi({
          min: data.data[0][0],
          max: data.data.pop()[0],
        })
        data.data.map((e: any) => {
          const x = new Date(e[0])
          const y = e.splice(1, 4)
          const amount = e[5]
          setCandleData((prev) => {
            {
              return [...prev, { x: x, y: y }]
            }
          })
          setSideData((prev) => {
            return [...prev, { x: x, y: amount }]
          })
        })
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [itemCode, selecDate])

  const state = {
    series: [
      {
        data: candleData,
      },
    ],
    seriesBar: [
      {
        data: sideData,
      },
    ],
  }

  return (
    <S.Layer>
      {candleData.length !== 0 && (
        <>
          <Chart
            series={state.series}
            type="candlestick"
            width="100%"
            height="500"
            options={{
              chart: {
                type: "candlestick",
                id: "candles",
                width: "100%",
                height: 290,
                toolbar: {
                  autoSelected: "pan",
                  show: false,
                },
                zoom: {
                  enabled: false,
                },
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: "#B93939",
                    downward: "#3959B9",
                  },
                },
              },
              xaxis: {
                type: "datetime",
              },
            }}
          />
          <Chart
            series={state.seriesBar}
            type="bar"
            width="100%"
            height={150}
            options={{
              chart: {
                type: "bar",
                brush: {
                  enabled: true,
                  target: "candles",
                },
                selection: {
                  enabled: true,
                  xaxis: {
                    min: si.min,
                    max: si.max,
                  },
                  fill: {
                    color: "#ccc",
                    opacity: 0.4,
                  },
                  stroke: {
                    color: "#0D47A1",
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
              plotOptions: {
                bar: {
                  columnWidth: "90%",
                  colors: {
                    ranges: [
                      {
                        from: -1,
                        to: 0,
                        color: "#F15B46",
                      },
                      {
                        from: 1,
                        to: 0,
                        color: "#FEB019",
                      },
                    ],
                  },
                },
              },
              stroke: {
                width: 0,
              },
              xaxis: {
                type: "datetime",
                axisBorder: {
                  offsetX: 13,
                },
              },
              yaxis: {
                labels: {
                  show: true,
                },
              },
            }}
          />
        </>
      )}
    </S.Layer>
  )
}
