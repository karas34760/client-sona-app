import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const AboutEvent = () => {
  return (
    <>
      <Box>
        {/*    //Test  this for Personal Information */}
        <Box fontSize="2xl" fontWeight="bold">
          Performance time information
        </Box>
        <Box>
          Reservation available time: 4 hours before viewing Tue-Thurs 7:30 /
          Wed-Fri 2:30, 7:30 / Public holidays 2, 7:00 / Sun 3:00 (no
          performances on Mondays)
        </Box>
        <Box>
          * There will be no performance on Friday, September 29th due to the
          Chuseok holiday.
        </Box>
        <Box>
          * Performances are at 2pm and 7pm on October 1st (Sunday), October
          15th (Sunday), and October 22nd (Sunday).
        </Box>

        <Box>
          * On Friday, October 6th, there is only a 7:30 p.m. performance, and
          on Hangul Day, on Monday, October 9th, there is only a 3:00 p.m.
          performance.
        </Box>
        <Box>
          * The 7:30 performance on Thursday, October 12th is sold out to all
          venues.
        </Box>
        <Box>
          * On Sunday, October 29th, there will be two performances: 2 p.m. and
          7 p.m., and the 2 p.m. performance is sold out to all venues.
        </Box>
        <Box>
          * There will be one performance at 3:00 on Saturday, October 14th and
          Saturday, October 21st.
        </Box>
        <Box>
          * There will be one performance on Friday, October 20th at 7:30.
        </Box>
      </Box>
      <Box>
        <Box fontSize="2xl" fontWeight="bold" textTransform="capitalize">
          announcement
        </Box>
        <Box>We Provide the new t... .Stadiums to</Box>
        <Image
          src="/test/banner/banner_1.jpeg"
          width={{ md: '800px', sm: 'full' }}
          borderRadius="lg"
          alt="Banner Image"
        />
        <Image
          mt={2}
          src="/test/banner/banner_2.jpeg"
          width={{ md: '800px', sm: 'full' }}
          borderRadius="lg"
          alt="Banner Image"
        />
        <Image
          mt={2}
          src="/test/banner/banner_3.jpeg"
          width={{ md: '800px', sm: 'full' }}
          borderRadius="lg"
          alt="Banner Image"
        />
      </Box>
    </>
  );
};

export default AboutEvent;
