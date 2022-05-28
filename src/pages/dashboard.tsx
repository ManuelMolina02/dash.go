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


  const { theme, variablesTheme } = useTheme()

  //defina o tema no body
  const [renderAnimation, setRenderAnimation] = useState(false)

  // console.log('newTheme: ', newTheme);


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
      foreColor: '#616480',

    },
    grid: {
      show: false
    },

    dataLabels: {
      style: {
        colors: [theme.color.secondary ? theme.color.secondary : theme.bg.secondary],
      },

    },

    tooltip: {
      theme: "dark",
      marker: {
        fillColors: [theme.color.secondary ? theme.color.secondary : theme.bg.secondary],
      }
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#4B4D63',
      },
      axisTicks: {
        color: '#4B4D63',
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
      colors: [theme.color.primary ? theme.color.primary : theme.colors.purple[500]],
    },
    stroke: {
      colors: [theme.color.primary ? theme.color.primary : theme.colors.purple[500]]
    }

  }

  return (
    <Flex direction={'column'} h='100vh' bg={theme.bg.primary} color={theme.color.primary} transition={'.25s ease-in-out '}>
      <Header />

      <Flex w='100%' maxW={1480} my='6' mx='auto' px='6' >
        <Sidebar />

        <ScaleFade in={renderAnimation} initialScale={.8} delay={.175} unmountOnExit  >
          <SimpleGrid w={'82vw'} maxW={'1220px'} flex='1' gap='4' minChildWidth={'420px'} alignContent='flex-start'>

            <Box p={[6, 8]} pb='4' bg={theme.bg.secondary} borderRadius='8'>
              <Text fontSize={'lg'} mb='4' color={theme.bg.contrastLight}>
                Inscritos da semana
              </Text>
              <Chart key={variablesTheme.update} options={options} series={series} type='area' height={160} />
            </Box>

            <Box p={[6, 8]} bg={theme.bg.secondary} borderRadius='8'>
              <Text fontSize={'lg'} mb='4' color={theme.bg.contrastLight}>
                Taxa de abertura
              </Text>
              <Chart key={variablesTheme.update} options={options} series={series} type='area' height={160} />
            </Box>

          </SimpleGrid>
        </ScaleFade>
      </Flex>
    </Flex>
  )
}