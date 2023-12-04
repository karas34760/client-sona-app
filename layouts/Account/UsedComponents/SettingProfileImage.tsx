/* eslint-disable no-unused-vars */
import { Box, Center, Container, Icon, Image } from '@chakra-ui/react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount } from 'wagmi';

import EditIcon from 'public/assets/icons/generals/editing.svg';
interface IProps {
  background?: string;
  avatar?: string;
}
const SettingProfileImage = ({ background, avatar }: IProps) => {
  const { address } = useAccount();

  return (
    <>
      <Box position="relative">
        <Box role="group" height={{ lg: '500px', base: '300px' }}>
          <Center
            width="full"
            height="full"
            background="shader.a.900"
            opacity={background ? 0 : 1}
            transition="opacity 0.3s ease-in-out"
            _groupHover={{
              opacity: 1,
            }}
            position="absolute"
            zIndex={3}
            bg={`${background ? '' : 'rgba(229, 232, 235)'}`}
          ></Center>
          {background && typeof background === 'string' && (
            <Image
              alt="Tickifi Image"
              src={background}
              height="full"
              width="full"
              objectFit="cover"
            />
          )}
        </Box>
        <Container maxWidth="container.xl" position="relative">
          <Box
            position="absolute"
            bottom="-40px"
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
              {avatar ? (
                <Image
                  alt=""
                  src={avatar}
                  height="full"
                  width="full"
                  objectFit="cover"
                />
              ) : (
                <Jazzicon
                  diameter={150}
                  seed={jsNumberForAddress(
                    address || '0x1111111111111111111111111111111111111111'
                  )}
                />
              )}
            </Box>

            <Center
              width="full"
              height="full"
              opacity={0}
              transition="opacity 0.3s ease-in-out"
              _groupHover={{
                opacity: 1,
              }}
              position="absolute"
              zIndex={3}
            >
              <Icon
                as={EditIcon}
                height={10}
                width={10}
                color="primary.gray.600"
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
