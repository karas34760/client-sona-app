import { Box, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid,
} from 'react-virtualized';

import CardTicketOne from '@/components/Card/CardTicketOne';
import 'react-virtualized/styles.css';
const DiscoverResult = () => {
  const Listest = [
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_25.jpeg',
      type_events: ['club', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-2',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_26.jpeg',
      type_events: ['festival', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-1',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_27.jpeg',
    },
    {
      name: 'Escape56 Feat. Paramida (Love On The Rocks / DE), Leland & Anwar',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_28.jpeg',
      type_events: ['conference '],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center--',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_29.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center==',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_30.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_25.jpeg',
      type_events: ['club', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-2',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_26.jpeg',
      type_events: ['festival', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-1',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_27.jpeg',
    },
    {
      name: 'Escape56 Feat. Paramida (Love On The Rocks / DE), Leland & Anwar',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_28.jpeg',
      type_events: ['conference '],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center--',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_29.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center==',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_30.jpeg',
    },
  ];
  const colCount = 4;
  const rowCount = Math.ceil(Listest.length / colCount);

  const cellCache = new CellMeasurerCache({
    defaultHeight: 350, // Default cell height
    defaultWidth: 300, // Default cell width

    /*     fixedWidth: true,
    fixedHeight: true, */
  });
  const cellRenderer = ({ columnIndex, key, rowIndex, style, parent }: any) => {
    const index = rowIndex * colCount + columnIndex;
    const item = Listest[index];

    if (!item) {
      return null;
    }

    return (
      <CellMeasurer
        cache={cellCache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        {({ measure }) => (
          <div style={{ ...style }}>
            <Link href="#">
              <Box margin={4} my={8}>
                <CardTicketOne image_link={item.image_link}>
                  <Text
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    onLoad={measure}
                  >
                    {item.name}
                  </Text>
                  <HStack justifyContent="space-between">
                    <Text fontSize="sm">{item.oganization}</Text>
                    <Text fontSize="sm" color="primary.gray.500">
                      {item.time}
                    </Text>
                  </HStack>
                </CardTicketOne>
              </Box>
            </Link>
          </div>
        )}
      </CellMeasurer>
    );
  };
  return (
    <>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            columnCount={colCount}
            height={height}
            rowCount={rowCount}
            /* rowHeight={cellCache.rowHeight} */
            rowHeight={300}
            columnWidth={300}
            width={width}
            cellRenderer={cellRenderer}
          />
        )}
      </AutoSizer>
    </>
  );
};

export default DiscoverResult;
