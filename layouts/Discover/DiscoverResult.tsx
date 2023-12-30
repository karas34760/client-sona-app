import {
  Grid,
  GridItem,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import CardTicketOne from '@/components/Card/CardTicketOne';
import { convertTimestampToDate } from '@/utils/format/date';
interface IProps {
  isOpen: boolean;
  data?: any;
}
const DiscoverResult = ({ isOpen, data }: IProps) => {
  const text_color1 = useColorModeValue('"primary.gray.800"', 'white');
  return (
    <>
      <Grid
        width="full"
        templateColumns={{
          lg: isOpen ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
          md: isOpen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap={6}
      >
        {data &&
          data.searchEvents.items.map((item: any) => (
            <GridItem key={item.eventId} width="full">
              <Link href={`/event/${item.address}`}>
                <CardTicketOne image_link={item.image}>
                  {/* <TimeReminder
                        targetDate={item.TimeForSell}
                        text="Open in"
                      /> */}

                  <Text
                    width="200px"
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    color={text_color1}
                  >
                    {item.name}
                  </Text>

                  <Text fontSize="sm" color="primary.gray.500">
                    {convertTimestampToDate(item.StartTime)}
                  </Text>

                  {item.category && (
                    <HStack gap={1}>
                      {item.category.map((item_sub: string, index: number) => (
                        <>
                          <Text
                            variant="type_categories"
                            key={`up-comming-events-sub${index} $${item.name} ${index}}`}
                          >
                            {item_sub}
                          </Text>
                        </>
                      ))}
                    </HStack>
                  )}
                </CardTicketOne>
              </Link>
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default DiscoverResult;
