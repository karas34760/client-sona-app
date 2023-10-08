import { Box, Center, Container, Icon, Image } from '@chakra-ui/react';

import EditIcon from 'public/assets/icons/generals/editing.svg';
const SettingProfileImage = () => {
  return (
    <>
      <Box position="relative">
        <Box role="group" height={{ lg: '500px', base: '300px' }}>
          <Center
            width="full"
            height="full"
            background="shader.a.900"
            opacity={0}
            transition="opacity 0.3s ease-in-out"
            _groupHover={{
              opacity: 0.5,
            }}
            position="absolute"
            zIndex={3}
          >
            <Icon
              as={EditIcon}
              height={8}
              width={8}
              color="white"
              cursor="pointer"
            />
          </Center>
          <Image
            alt="Tickifi Image"
            src="/test/banner/music_festival/banner_1.jpeg"
            height="full"
            width="full"
            objectFit="cover"
          />
        </Box>
        <Container
          maxWidth="container.xl"
          position="absolute"
          bottom="-10%"
          left="6%"
        >
          <Box
            position="relative"
            zIndex={4}
            borderRadius="full"
            border="0.5rem solid"
            borderColor="white"
            overflow="hidden"
            height={{ lg: 40, base: 32 }}
            width={{ lg: 40, base: 32 }}
            role="group"
          >
            <Box position="absolute" height="full" width="full">
              <Image
                alt=""
                src="https://i.seadn.io/gae/VMG3VFncJG-pyqsRAwQznZGqYDw4RkPjJnJNJwrDERFhD4pWLh82q66JJ8Qh0vCPoovjoyigJwLqfFpa5tMAVV5ASIiR5nF1XkQFpec?auto=format&dpr=1&w=1920"
                height="full"
                width="full"
                objectFit="cover"
              />
            </Box>

            <Center
              width="full"
              height="full"
              opacity={0}
              transition="opacity 0.3s ease-in-out"
              _groupHover={{
                opacity: 0.5,
              }}
              position="absolute"
              zIndex={3}
            >
              <Icon
                as={EditIcon}
                height={10}
                width={10}
                color="white"
                cursor="pointer"
              />
            </Center>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SettingProfileImage;
