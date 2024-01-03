/* eslint-disable no-use-before-define */

import {
  Box,
  Container,
  HStack,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useColorModeValue,
  useSteps,
  useToast,
} from '@chakra-ui/react';
import { create } from 'ipfs-http-client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import StepAddTicket, { ITicketType } from './Steps/StepAddTicket';
import StepComplete from './Steps/StepComplete';
import StepEventBasic from './Steps/StepEventBasic';
import StepEventDescription from './Steps/StepEventDescription';
import StepEventLocation from './Steps/StepEventLocation';
import StepEventPhoto from './Steps/StepEventPhoto';
import StepFollow from './Steps/StepFollow';
import StepOrganize from './Steps/StepOrganize';
import StepSingerCreate, { ISignerType } from './Steps/StepSingerCreate';

import LoadingVerify from '@/animations/Loading/LoadingVerify';
import { client } from '@/graphql/httplink';
import { SUBMIT_NEW_EVENT } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import AddIcon from '@/public/assets/icons/generals/add-user.svg';
import CompleteIcon from '@/public/assets/icons/generals/complete.svg';
import InfoIcon from '@/public/assets/icons/generals/info.svg';
import PerfomanceIcon from '@/public/assets/icons/generals/micro.svg';
import TicketIcon from '@/public/assets/icons/generals/tickets.svg';
import { setUserLoading } from '@/redux/user/user-slice';
import { optionEventType } from '@/utils/constants/constants';
interface StepProps {
  title: string;
  icon?: any;
  id?: number;
  element?: any;
  children?: any;
  onActive?: any; // onActive Element Action
  isDisable?: any; // Disable for active button
}
interface IForm {
  organizer: string; // organizer  address
  name: string;
  description: string;
  image: File | undefined; // when send need to reformat
  location: string | undefined;
  uri: string;
  category: optionEventType[];
  tickets: ITicketType[];
  singers: ISignerType[];
  TimeForSell: number | string;
  DeadlineForSell: number | string;
  StartTime: number | string;
  EndTime: number | string;
  mortageTx: string;
  license: string;
}
const EventCreatePage = () => {
  // Setting initial state
  const { user } = useAuth();
  const toast = useToast();
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 0,
  });
  const [form, setForm] = useState<IForm>({
    organizer: user || '',
    name: '',
    description: '',
    image: undefined,
    location: '',
    uri: '',
    category: [],
    tickets: [],
    singers: [],
    TimeForSell: 0,
    DeadlineForSell: 0,
    StartTime: 0,
    EndTime: 0,
    mortageTx: '',
    license: '',
  });
  function updateFields(fields: Partial<IForm>) {
    setForm(prev => {
      return { ...prev, ...fields };
    });
  }
  const handleResetForm = async () => {
    setForm({
      organizer: user || '',
      name: '',
      description: '',
      image: undefined,
      location: '',
      uri: '',
      tickets: [],
      singers: [],
      TimeForSell: 0,
      DeadlineForSell: 0,
      StartTime: 0,
      EndTime: 0,
      mortageTx: '',
      license: '',
      category: [],
    });
    setActiveStep(0);
  };
  const dispatch = useDispatch();
  const [isSubmiting, setIsSubmitting] = useState(false);
  const handleSubmit = async () => {
    dispatch(setUserLoading(true));
    setIsSubmitting(true);
    let imgUrl = '';
    let uri = '';
    // First submit IPFS

    const listTicket = [];
    if (form.tickets) {
      const projectId = process.env.NEXT_PUBLIC_PROJECT_KEY;
      const projectKey = process.env.NEXT_PUBLIC_SECRET_KEY;
      const auth =
        'Basic ' + Buffer.from(projectId + ':' + projectKey).toString('base64');
      // Create connection to IPFS using infura
      const client = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
          authorization: auth,
        },
      });
      for (const ticket of form.tickets) {
        if (ticket.asset) {
          const fileAdded = await client.add(ticket.asset);
          imgUrl =
            `${
              process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'
            }` + fileAdded.path;
          const metadata = {
            name: ticket.name,
            description: ticket.description,
            image: imgUrl,
          };
          const metaAdd = await client.add(JSON.stringify(metadata));

          listTicket.push({
            name: ticket.name,
            description: ticket.description,
            asset: imgUrl,
            price: ticket.price,
            uri: `${
              process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'
            }${metaAdd.path}`,
            amount: ticket.amount,
            tier: ticket.tier,
          });
        }
      }
    }
    // Meta image
    if (form.image) {
      const projectId = process.env.NEXT_PUBLIC_PROJECT_KEY;
      const projectKey = process.env.NEXT_PUBLIC_SECRET_KEY;
      const auth =
        'Basic ' + Buffer.from(projectId + ':' + projectKey).toString('base64');
      // Create connection to IPFS using infura
      const client = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
          authorization: auth,
        },
      });
      const listSinger = [];
      for (const singer of form.singers) {
        if (singer.asset) {
          const fileAdded = await client.add(singer.asset);
          imgUrl =
            `${
              process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'
            }` + fileAdded.path;
          const metadata = {
            name: singer.name,
            age: singer.age,
            sex: singer.sex,
            image: imgUrl,
          };
          const metaAdd = await client.add(JSON.stringify(metadata));

          listSinger.push(
            `${
              process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'
            }${metaAdd.path}`
          );
        }
      }
      const fileAdded = await client.add(form.image);
      imgUrl =
        `${process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'}` +
        fileAdded.path;
      const metadata = {
        name: form.name,
        description: form.description,
        image: imgUrl,
        singers: [...listSinger],
        location: form.location,
        organizer: form.organizer,
        tickets: form.tickets.map((item: any) => item.tier),
        timeForSell: Date.parse(form.TimeForSell.toString()),
        deadlineForSell: Date.parse(form.DeadlineForSell.toString()),
        startTime: Date.parse(form.StartTime.toString()),
        endTime: Date.parse(form.EndTime.toString()),
        mortageTx: form.mortageTx,
        license: form.license,
        category: form.category.map((item: optionEventType) => item.value),
      };
      const metadataAdded = await client.add(JSON.stringify(metadata));
      uri =
        `${process.env.IPFS_SUBDOMAI || 'https://karas.infura-ipfs.io/ipfs/'}` +
        metadataAdded.path;
    }
    // create events
    try {
      await client.mutate({
        mutation: SUBMIT_NEW_EVENT,
        variables: {
          organizer: form.organizer,
          name: form.name,
          description: form.description,
          image: imgUrl,
          location: form.location,
          uri: uri,
          tickets: listTicket,
          timeForSell: Date.parse(form.TimeForSell.toString()),
          deadlineForSell: Date.parse(form.DeadlineForSell.toString()),
          startTime: Date.parse(form.StartTime.toString()),
          endTime: Date.parse(form.EndTime.toString()),
          mortageTx: form.mortageTx,
          license: form.license,
          category: form.category.map((item: optionEventType) => item.value),
        },
      });
      setIsSubmitting(false);
      dispatch(setUserLoading(false));

      toast({
        title: 'Event created.',
        description: "We've created your Event for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      await handleResetForm();
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: 'Event created Error',
        description: `Something wrong: ${error}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const steps: StepProps[] = [
    {
      title: 'Oganize Details',
      icon: AddIcon,
      onActive: () => {
        setActiveStep(0);
      },
      id: 0,
      element: (
        <StepOrganize
          organize_data={{ organizer: form.organizer }}
          updateFields={updateFields}
          goToNext={goToNext}
        />
      ),
    },
    {
      title: ' Event Details',
      icon: InfoIcon,
      children: [
        {
          title: 'Basic',
          id_child: 1,
          isDisable:
            form.name.length ||
            form.StartTime ||
            form.EndTime ||
            form.DeadlineForSell ||
            form.TimeForSell
              ? false
              : true,
          onActive: () => {
            setActiveStep(1);
          },
          element: (
            <StepEventBasic
              event_data={{
                name: form.name,
                category: form.category,
                StartTime: form.StartTime.toString(),
                EndTime: form.EndTime.toString(),
                DeadlineForSell: form.DeadlineForSell.toString(),
                TimeForSell: form.TimeForSell.toString(),
              }}
              updateFields={updateFields}
              goToPrevious={goToPrevious}
              goToNext={goToNext}
            />
          ),
        },
        {
          title: 'Location',
          id_child: 2,
          isDisable: form.location ? false : true,
          onActive: () => {
            setActiveStep(2);
          },
          element: (
            <StepEventLocation
              location_data={{ location: form.location }}
              updateFields={updateFields}
              goToNext={goToNext}
              goToPrevious={goToPrevious}
            />
          ),
        },
        {
          title: 'Description',
          id_child: 3,
          isDisable: form.description ? false : true,
          onActive: () => {
            setActiveStep(3);
          },
          element: (
            <StepEventDescription
              goToPrevious={goToPrevious}
              goToNext={goToNext}
              updateFields={updateFields}
              description={form.description}
            />
          ),
        },
        {
          title: 'Photos',
          id_child: 4,
          isDisable: form.image ? false : true,
          onActive: () => {
            setActiveStep(4);
          },
          element: (
            <StepEventPhoto
              image={form.image}
              updateFields={updateFields}
              goToNext={goToNext}
              goToPrevious={goToPrevious}
            />
          ),
        },
      ],
    },
    {
      title: 'Ticket Details',
      icon: TicketIcon,
      id: 5,
      isDisable: form.tickets.length ? false : true,
      onActive: () => {
        setActiveStep(5);
      },
      element: (
        <StepAddTicket
          goToNext={goToNext}
          goToPrevious={goToPrevious}
          tickets={form.tickets}
          updateFields={updateFields}
        />
      ),
    },
    {
      title: 'Celebrity',
      icon: PerfomanceIcon,
      id: 6,
      isDisable: form.singers.length ? false : true,
      onActive: () => {
        setActiveStep(6);
      },
      element: (
        <StepSingerCreate
          singers={form.singers}
          updateFields={updateFields}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
      ),
    },
    {
      title: 'Complete Create',
      icon: CompleteIcon,
      id: 7,
      isDisable: form.mortageTx.length || form.license.length ? false : true,
      onActive: () => {
        setActiveStep(7);
      },
      element: (
        <StepComplete
          mortageTx={form.mortageTx}
          updateFields={updateFields}
          license={form.license}
          goToPrevious={goToPrevious}
          handleSubmit={handleSubmit}
        />
      ),
    },
  ];

  const bgCard = useColorModeValue('white', 'dark.200');
  const bgContent = useColorModeValue('primary.gray.100', 'dark.100');
  return (
    <>
      <Box width="full" bg={bgContent} py={8}>
        <Text textAlign="center" variant="type_sub_title" mb={6}>
          Lets Create Your Events
        </Text>
        <Container maxWidth="container.xl">
          <HStack
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap={{ md: 'nowrap', base: 'wrap' }}
          >
            <Box minW="300px" height="full">
              <StepFollow steps={steps} activeStep={activeStep} />
            </Box>
            <Box
              bg={bgCard}
              padding={{ lg: 12, md: 8, base: 6 }}
              flexGrow={1}
              minH="500px"
            >
              <Box mb={6} height="full">
                {React.Children.toArray(
                  steps.map(item => {
                    if (!item.children) {
                      return item.id === activeStep ? item.element : null;
                    } else {
                      return React.Children.toArray(
                        item.children.map((child: any) =>
                          child.id_child === activeStep ? child.element : null
                        )
                      );
                    }
                  })
                )}
              </Box>
            </Box>
          </HStack>
        </Container>
      </Box>

      <Modal isOpen={isSubmiting} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent margin="auto">
          <VStack padding={6}>
            <LoadingVerify />
            <Text variant="type_sub_title">
              We are Creating Event Now Wait Minutes
            </Text>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventCreatePage;
