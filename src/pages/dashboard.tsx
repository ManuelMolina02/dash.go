import { Box, Button, Flex, ScaleFade, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar'
import { ApexOptions } from 'apexcharts';
import { useTheme } from "../contexts/DefineTheme";
import { useEffect, useState } from "react";
import Head from "next/head";
import { DrawerDetails } from "../components/DrawerDetails";




const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const series = [
  { name: 'series-1', data: [10, 141, 78, 148, 51, 29, 162] },
]

export default function Dashboard() {


  const { theme } = useTheme()

  //defina o tema no body
  const [renderAnimation, setRenderAnimation] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  //variavel de atualização
  const [update, setUpdate] = useState('');

  useEffect(() => {
    setRenderAnimation(true)
  }, [])

  useEffect(() => {
    setUpdate(new Date().toString());

  }, [theme])

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

      //enabled: false,
      style: {
        colors: ['#718096'],
      },

    },

    tooltip: {
      theme: "dark",
      marker: {
        fillColors: [theme.color.secondary],
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
      colors: [theme.color.secondary],
    },
    stroke: {
      colors: [theme.color.secondary],
    }

  }

  function handleDetail() {
    setShowDetail(true)
  }

  return (
    <>
      <Head>
        <title>dashboard | dash.go</title>
      </Head>
      <Flex direction={'column'} h='100vh' bg={theme.bg.primary} color={theme.color.primary} transition={'.25s ease-in-out '}>
        <Header />

        <Flex w='100%' maxW={1480} my='6' mx='auto' px='6' >
          <Sidebar />

          <ScaleFade in={renderAnimation} initialScale={.8} unmountOnExit  >
            <SimpleGrid w={'82vw'} maxW={'1220px'} flex='1' gap='4' minChildWidth={'420px'} alignContent='flex-start'>
              {/* <Button colorScheme='blue' onClick={() => setShowDetail(true)}>
                Open
              </Button> */}
              <Box p={[6, 8]} pb='4' bg={theme.bg.secondary} borderRadius='8'>
                {/* <DrawerDetails showDetail={showDetail} /> */}
                <Text fontSize={'lg'} mb='4' color={theme.bg.contrastLight}>
                  Inscritos da semana
                </Text>
                <Chart key={update} options={options} series={series} type='area' height={160} />
              </Box>


              <Box p={[6, 8]} bg={theme.bg.secondary} borderRadius='8'>
                <Text fontSize={'lg'} mb='4' color={theme.bg.contrastLight}>
                  Taxa de abertura
                </Text>
                <Chart key={update} options={options} series={series} type='area' height={160} />
              </Box>

            </SimpleGrid>
          </ScaleFade>
        </Flex>
      </Flex></>
  )
}