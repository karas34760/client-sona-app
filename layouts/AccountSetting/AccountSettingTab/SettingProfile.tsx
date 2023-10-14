import {
  Box,
  Flex,
  Text,
  Input,
  FormControl,
  FormLabel,
  Icon,
  HStack,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';

import SettingProfileImage from '@/layouts/Account/UsedComponents/SettingProfileImage';
import CompassIcon from 'public/assets/icons/generals/website.svg';

const SettingProfile = () => {
  return (
    <>
      <Box width="full">
        <SettingProfileImage />
        <Flex pt={10} flexDirection="column" gap={6}>
          <FormControl gap={2}>
            <FormLabel fontWeight="bold">Display name</FormLabel>
            <Input placeholder="Karas " variant="settingProfile" />
          </FormControl>
          <FormControl gap={2}>
            <FormLabel fontWeight="bold">Description/Bio</FormLabel>
            <Input variant="settingProfile" />
          </FormControl>
          <Box>
            <HStack>
              <Icon
                as={CompassIcon}
                height={6}
                width={6}
                sx={{
                  path: {
                    stroke: 'url(#CompassLinear04)',
                  },
                }}
              />
              <Text fontSize="lg" fontWeight="medium">
                Social Connections
              </Text>
            </HStack>
            <HStack fontSize="sm">
              <Text color="primary.gray.600">
                Connection to verify your account
              </Text>
              <Text
                color="secondary.info.300"
                textTransform="capitalize"
                fontWeight="bold"
              >
                <Link href="#">more infos</Link>
              </Text>
            </HStack>
          </Box>
          <FormControl gap={2}>
            <FormLabel fontWeight="medium">Website</FormLabel>
            <Input
              placeholder="https://youwbsite.com"
              variant="settingProfile"
            />
          </FormControl>
          <FormControl gap={2}>
            <FormLabel fontWeight="medium">Twitter</FormLabel>
            <Input
              placeholder="https://twitter.com/your_twitter"
              variant="settingProfile"
            />
          </FormControl>
          <FormControl gap={2}>
            <FormLabel fontWeight="medium">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              variant="settingProfile"
            />
          </FormControl>
          <Button
            variant="primary"
            borderRadius="1.5rem"
            width="fit-content"
            px={6}
          >
            Save
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default SettingProfile;
