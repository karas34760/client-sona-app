import { useQuery } from '@apollo/client';
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
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import * as yup from 'yup';

import VerifyCodeModal from '@/components/Modal/VerifyCodeModal';
import { client } from '@/graphql/httplink';
import { SEARCH_ACCOUNT_BY_ADDRESS, SEND_EMAIL_VERIFY } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import SettingProfileImage from '@/layouts/Account/UsedComponents/SettingProfileImage';
import CompassIcon from 'public/assets/icons/generals/website.svg';
const SettingProfile = () => {
  const { user } = useAuth();
  const { loading, data, refetch } = useQuery(SEARCH_ACCOUNT_BY_ADDRESS, {
    variables: {
      address: user,
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentEmail, setCurrentEmail] = useState('');
  // Use yubobject to verify
  const yupObject = yup.object().shape({
    email: yup.string().required().email(),
  });
  const toast = useToast({
    position: 'top-right',
  });
  const handleSendEmail = async () => {
    yupObject
      .validate({ email: currentEmail })
      .then(async () => {
        await client.mutate({
          mutation: SEND_EMAIL_VERIFY,
          variables: {
            email: currentEmail,
          },
        });
        onOpen();
      })
      .catch(function (err) {
        toast({
          title: `${err}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };
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
              <Text fontSize="lg" fontWeight="bold">
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
            <FormLabel fontWeight="bold">Website</FormLabel>
            <Input
              placeholder="https://youwbsite.com"
              variant="settingProfile"
            />
          </FormControl>
          <FormControl gap={2}>
            <FormLabel fontWeight="bold">X (Twitter)</FormLabel>
            <Input
              placeholder="https://twitter.com/your_twitter"
              variant="settingProfile"
            />
          </FormControl>
          <FormControl gap={2}>
            <FormLabel>
              <Text fontWeight="bold">Email</Text>
              <Text fontSize="sm" color="primary.gray.500">
                Your email for use advance function
              </Text>
            </FormLabel>

            <HStack>
              <Input
                type="email"
                placeholder="Enter email"
                variant="settingProfile"
                value={data && data.email ? data.email : currentEmail}
                onChange={e => setCurrentEmail(e.target.value)}
              />
              {data && !data.email && !loading && (
                <Button
                  onClick={async () => {
                    await handleSendEmail();
                  }}
                >
                  Verify Email
                </Button>
              )}
            </HStack>
          </FormControl>
          <Button
            variant="primary"
            borderRadius="1.5rem"
            width="fit-content"
            px={6}
          >
            Save
          </Button>
          <VerifyCodeModal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              refetch();
            }}
            email={currentEmail}
          />
        </Flex>
      </Box>
    </>
  );
};

export default SettingProfile;
