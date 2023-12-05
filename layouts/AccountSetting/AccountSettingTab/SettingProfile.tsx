/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from '@apollo/client';
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
  Center,
  Container,
  Image,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { create } from 'ipfs-http-client';
import Link from 'next/link';
import { useState } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount } from 'wagmi';
import * as yup from 'yup';

import VerifyCodeModal from '@/components/Modal/VerifyCodeModal';
import ProfileImageUpload from '@/components/Upload/ProfileImageUpload';
import { client } from '@/graphql/httplink';
import {
  SEARCH_ACCOUNT_BY_ADDRESS,
  SEARCH_PROFILE,
  SEND_EMAIL_VERIFY,
  UPDATE_PROFILE,
} from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import CompassIcon from 'public/assets/icons/generals/website.svg';

const SettingProfile = () => {
  const { user } = useAuth();
  const { address } = useAccount();

  const { loading, data, refetch } = useQuery(SEARCH_ACCOUNT_BY_ADDRESS, {
    variables: {
      address: user,
    },
  });
  const { data: dataUser } = useQuery(SEARCH_PROFILE);
  console.log(dataUser);
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

  // Settting initialize values
  const tempData = {
    avatar: undefined,
    background: undefined,
    bio: '',
    username: '',
    website: '',
    social: [],
  };
  const getData = () => {
    if (!dataUser) {
      return tempData;
    }
    const {
      searchAddressProfile: { __typename, address, ...rest },
    } = dataUser || {};
    return rest;
  };

  // eslint-disable-next-line no-unused-vars
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateProfileMutation] = useMutation(UPDATE_PROFILE);
  const formik = useFormik({
    initialValues: getData(),
    onSubmit: async values => {
      setUpdateLoading(true);
      let bgURL = undefined;
      let avatarURL = undefined;
      if (values.background instanceof File) {
        const projectId = process.env.NEXT_PUBLIC_PROJECT_KEY;
        const projectKey = process.env.NEXT_PUBLIC_SECRET_KEY;
        const auth =
          'Basic ' +
          Buffer.from(projectId + ':' + projectKey).toString('base64');
        // Create connection to IPFS using infura
        const client = create({
          host: 'ipfs.infura.io',
          port: 5001,
          protocol: 'https',
          headers: {
            authorization: auth,
          },
        });
        const fileAdded = await client.add(values.background);
        bgURL =
          `${
            process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'
          }` + fileAdded.path;
      }
      if (values.avatar instanceof File) {
        const projectId = process.env.NEXT_PUBLIC_PROJECT_KEY;
        const projectKey = process.env.NEXT_PUBLIC_SECRET_KEY;
        const auth =
          'Basic ' +
          Buffer.from(projectId + ':' + projectKey).toString('base64');
        // Create connection to IPFS using infura
        const client = create({
          host: 'ipfs.infura.io',
          port: 5001,
          protocol: 'https',
          headers: {
            authorization: auth,
          },
        });
        const fileAdded = await client.add(values.avatar);
        avatarURL =
          `${
            process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'
          }` + fileAdded.path;
      }
      /// IF update two bg image

      const res = await updateProfileMutation({
        variables: {
          args: {
            avatar: avatarURL || values.avatar,
            background: bgURL || values.background,
            bio: values.bio,
            website: values.website,
            username: values.username,
            social: [],
          },
        },
      });
      setUpdateLoading(false);
    },
    enableReinitialize: true,
  });

  return (
    <>
      <Box width="full">
        <form onSubmit={formik.handleSubmit}>
          <Box position="relative">
            <Box role="group" height={{ lg: '500px', base: '300px' }}>
              {formik.values.background ? (
                <>
                  <Image
                    src={
                      typeof formik.values.background === 'string'
                        ? formik.values.background
                        : URL.createObjectURL(formik.values.background)
                    }
                    alt=""
                    inset="0"
                    height="full"
                    position="absolute"
                    top={0}
                    width="full"
                    left={0}
                    objectFit="cover"
                  />
                  <Center
                    position="absolute"
                    top={0}
                    left={0}
                    width="full"
                    height="full"
                    cursor="pointer"
                  >
                    <ProfileImageUpload
                      setBackground={content =>
                        formik.handleChange({
                          target: {
                            name: 'background',
                            value: content,
                          },
                        })
                      }
                    />
                  </Center>
                </>
              ) : (
                <>
                  <Box
                    position="relative"
                    cursor="pointer"
                    width="full"
                    height="full"
                    bg="primary.gray.300"
                  >
                    <Center
                      position="absolute"
                      top={0}
                      left={0}
                      width="full"
                      height="full"
                    >
                      <ProfileImageUpload
                        setBackground={content =>
                          formik.handleChange({
                            target: {
                              name: 'background',
                              value: content,
                            },
                          })
                        }
                      />
                    </Center>
                  </Box>
                </>
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
                  {formik.values.avatar ? (
                    <>
                      <Image
                        src={
                          typeof formik.values.avatar === 'string'
                            ? formik.values.avatar
                            : URL.createObjectURL(formik.values.avatar)
                        }
                        alt=""
                        inset="0"
                        height="full"
                        position="absolute"
                        top={0}
                        width="full"
                        left={0}
                        objectFit="cover"
                      />
                      <Center
                        position="absolute"
                        top={0}
                        left={0}
                        width="full"
                        height="full"
                        cursor="pointer"
                      >
                        <ProfileImageUpload
                          setBackground={content =>
                            formik.handleChange({
                              target: {
                                name: 'avatar',
                                value: content,
                              },
                            })
                          }
                        />
                      </Center>
                    </>
                  ) : (
                    <>
                      <Box position="relative" cursor="pointer">
                        <Jazzicon
                          diameter={150}
                          seed={jsNumberForAddress(
                            address ||
                              '0x1111111111111111111111111111111111111111'
                          )}
                        />
                        <Center
                          position="absolute"
                          top={0}
                          left={0}
                          width="full"
                          height="full"
                        >
                          <ProfileImageUpload
                            setBackground={content =>
                              formik.handleChange({
                                target: {
                                  name: 'avatar',
                                  value: content,
                                },
                              })
                            }
                          />
                        </Center>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Container>
          </Box>
          <Flex pt={10} flexDirection="column" gap={6}>
            <FormControl gap={2}>
              <FormLabel fontWeight="bold">Display name</FormLabel>
              <Input
                placeholder=""
                variant="settingProfile"
                value={formik.values.username}
                onChange={formik.handleChange}
                name="username"
              />
            </FormControl>
            <FormControl gap={2}>
              <FormLabel fontWeight="bold">Bio</FormLabel>
              <Input
                variant="settingProfile"
                name="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
              />
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
                placeholder="Ex: https://youwbsite.com"
                name="website"
                value={formik.values.website}
                onChange={formik.handleChange}
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
                  value={
                    data && data.searchAccountByAddress.email
                      ? data.searchAccountByAddress.email
                      : currentEmail
                  }
                  onChange={e => setCurrentEmail(e.target.value)}
                />
                {data && !data.searchAccountByAddress.email && !loading && (
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
              type="submit"
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
        </form>
      </Box>
    </>
  );
};

export default SettingProfile;
