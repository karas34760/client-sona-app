/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useSteps,
  useToast,
} from '@chakra-ui/react';
import { create } from 'ipfs-http-client';
import React, { useState } from 'react';

import StepAddTicket, { ITicketType } from './Steps/StepAddTicket';
import StepComplete from './Steps/StepComplete';
import StepEventBasic from './Steps/StepEventBasic';
import StepEventDescription from './Steps/StepEventDescription';
import StepEventLocation from './Steps/StepEventLocation';
import StepEventPhoto from './Steps/StepEventPhoto';
import StepFollow from './Steps/StepFollow';
import StepOrganize from './Steps/StepOrganize';
import StepSingerCreate from './Steps/StepSingerCreate';

import { client } from '@/graphql/httplink';
import { SUBMIT_NEW_EVENT } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import AddIcon from '@/public/assets/icons/generals/add-user.svg';
import CompleteIcon from '@/public/assets/icons/generals/complete.svg';
import InfoIcon from '@/public/assets/icons/generals/info.svg';
import PerfomanceIcon from '@/public/assets/icons/generals/micro.svg';
import TicketIcon from '@/public/assets/icons/generals/tickets.svg';
interface StepProps {
  title: string;
  icon?: any;
  id?: number;
  element?: any;
  children?: any;
}
interface IForm {
  organizer: string; // organizer  address
  name: string;
  description: string;
  image: File | undefined; // when send need to reformat
  location: string;
  uri: string;
  tickets: ITicketType[];
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
  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });
  const [isOpenNew, setIsOpenNew] = useState(false);
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
  });
  const [form, setForm] = useState<IForm>({
    organizer: user || '',
    name: '',
    description: '',
    image: undefined,
    location: '',
    uri: '',
    tickets: [],
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
  const steps: StepProps[] = [
    {
      title: 'Oganize Details',
      icon: AddIcon,
      id: 0,
      element: (
        <StepOrganize
          organize_data={{ organizer: form.organizer }}
          updateFields={updateFields}
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
          element: (
            <StepEventBasic
              event_data={{
                name: form.name,
                StartTime: form.StartTime.toString(),
                EndTime: form.EndTime.toString(),
                DeadlineForSell: form.DeadlineForSell.toString(),
                TimeForSell: form.TimeForSell.toString(),
              }}
              updateFields={updateFields}
            />
          ),
        },
        {
          title: 'Location',
          id_child: 2,
          element: (
            <StepEventLocation
              location_data={{ location: form.location }}
              updateFields={updateFields}
            />
          ),
        },
        {
          title: 'Description',
          id_child: 3,
          element: (
            <StepEventDescription
              updateFields={updateFields}
              description={form.description}
            />
          ),
        },
        {
          title: 'Photos',
          id_child: 4,
          element: (
            <StepEventPhoto image={form.image} updateFields={updateFields} />
          ),
        },
      ],
    },
    {
      title: 'Ticket Details',
      icon: TicketIcon,
      id: 5,
      element: (
        <StepAddTicket
          tickets={form.tickets}
          updateFields={updateFields}
          setIsOpenNew={setIsOpenNew}
        />
      ),
    },
    {
      title: 'Singers',
      icon: PerfomanceIcon,
      id: 6,
      element: <StepSingerCreate />,
    },
    {
      title: 'Complete Create',
      icon: CompleteIcon,
      id: 7,
      element: (
        <StepComplete
          mortageTx={form.mortageTx}
          updateFields={updateFields}
          license={form.license}
        />
      ),
    },
  ];

  const handleSubmit = async () => {
    let imgUrl = '';
    // First submit IPFS
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
      const fileAdded = await client.add(form.image);

      imgUrl = `https://karas.infura-ipfs.io/ipfs/` + fileAdded.path;
      const metadata = {
        name: 'name',
        description: 'description',
        image: imgUrl,
      };
      const metadataAdded = await client.add(JSON.stringify(metadata));
    }

    // create events
    const response = await client.mutate({
      mutation: SUBMIT_NEW_EVENT,
      variables: {
        organizer: form.organizer,
        name: form.name,
        description: form.description,
        image: imgUrl,
        location: form.location,
        uri: '',
        tickets: form.tickets,
        timeForSell: Date.parse(form.TimeForSell.toString()),
        deadlineForSell: Date.parse(form.DeadlineForSell.toString()),
        startTime: Date.parse(form.StartTime.toString()),
        endTime: Date.parse(form.EndTime.toString()),
        mortageTx: form.mortageTx,
        license: form.license,
      },
    });
  };
  console.log('Form', form);
  return (
    <>
      <Box width="full" bg="primary.gray.100" py={8}>
        <Text textAlign="center" variant="type_sub_title" mb={6}>
          Lets Create Your Events
        </Text>
        <Container maxWidth="container.xl">
          <HStack justifyContent="space-between" alignItems="flex-start">
            <Box width="300px" height="full">
              <StepFollow steps={steps} activeStep={activeStep} />
            </Box>
            <Box bg="white" padding={12} flexGrow={1} minH="500px">
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

              <Flex gap={3}>
                {activeStep != 0 && !isOpenNew && (
                  <Button
                    width="full"
                    variant="primary"
                    onClick={() => goToPrevious()}
                  >
                    Previous Step
                  </Button>
                )}

                {activeStep <= 6 && !isOpenNew && (
                  <Button
                    width="full"
                    variant="primary"
                    type="submit"
                    onClick={() => goToNext()}
                  >
                    Next Step
                  </Button>
                )}
                {activeStep == 7 && !isOpenNew && (
                  <Button
                    width="full"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit Now
                  </Button>
                )}
              </Flex>
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default EventCreatePage;
