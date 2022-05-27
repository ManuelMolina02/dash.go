import { Box, Flex, ScaleFade, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar'
import { ApexOptions } from 'apexcharts';
import { useTheme } from "../contexts/DefineTheme";
import { useEffect, useState } from "react";




const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const series = [
  { name: 'series-1', data: [10, 141, 78, 148, 51, 29, 162] },
]

export default function Dashboard() {


  const { themeDefined, newTheme } = useTheme()
  //defina o tema no body
  const [renderAnimation, setRenderAnimation] = useState(false)



  console.log('newTheme: ', newTheme);


  useEffect(() => {
    setRenderAnimation(true)
  }, [])

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,

      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],

    },
    grid: {
      show: false
    },

    dataLabels: {
      style: {
        colors: [newTheme.color.secondary ? newTheme.color.secondary : themeDefined.colorChart],
      },

    },

    tooltip: {
      theme: "dark",
      marker: {
        fillColors: [newTheme.color.secondary ? newTheme.color.secondary : themeDefined.colorChart],
      }
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2022-04-20T00:00:00.000Z',
        '2022-04-21T00:00:00.000Z',
        '2022-04-22T00:00:00.000Z',
        '2022-04-23T00:00:00.000Z',
        '2022-04-24T00:00:00.000Z',
        '2022-04-25T00:00:00.000Z',
        '2022-04-26T00:00:00.000Z',
      ]

    },

    fill: {
      opacity: .3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: .7,
        opacityTo: .3,

      },
      colors: [newTheme.color.primary ? newTheme.color.primary : theme.colors.purple[500]],
    },
    stroke: {
      colors: [newTheme.color.primary ? newTheme.color.primary : theme.colors.purple[500]]
    }

  }


  return (
    <Flex direction={'column'} h='100vh' bg={themeDefined.bg} color={themeDefined.color} transition={'.25s ease-in-out '}>
      <Header />

      <Flex w='100%' maxW={1480} my='6' mx='auto' px='6' >
        <Sidebar />

        <ScaleFade in={renderAnimation} initialScale={.8} delay={.175} unmountOnExit  >
          <SimpleGrid w={'82vw'} maxW={'1220px'} flex='1' gap='4' minChildWidth={'420px'} alignContent='flex-start'>

            <Box p={[6, 8]} pb='4' bg={themeDefined.bgCards} borderRadius='8'>
              <Text fontSize={'lg'} mb='4'>
                Inscritos da semana
              </Text>
              <Chart options={options} series={series} type='area' height={160} />
            </Box>

            <Box p={[6, 8]} bg={themeDefined.bgCards} borderRadius='8'>
              <Text fontSize={'lg'} mb='4' >
                Taxa de abertura
              </Text>
              <Chart options={options} series={series} type='area' height={160} />
            </Box>

          </SimpleGrid>
        </ScaleFade>
      </Flex>
    </Flex>
  )
}