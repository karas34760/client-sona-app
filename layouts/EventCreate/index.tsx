/* eslint-disable no-unused-vars */
import { Box, Container, HStack, Text, useSteps } from '@chakra-ui/react';
import React, { useState } from 'react';

import StepAddTicket, { ITicketType } from './components/StepAddTicket';
import StepEventBasic, { IEventDetailData } from './components/StepEventBasic';
import StepEventDescription from './components/StepEventDescription';
import StepEventLocation from './components/StepEventLocation';
import StepEventPhoto from './components/StepEventPhoto';
import StepFollow from './components/StepFollow';
import StepOrganize, { IOrganizeData } from './components/StepOrganize';

import { useAuth } from '@/hooks/useAuth';
import AddIcon from '@/public/assets/icons/generals/add-user.svg';
import InfoIcon from '@/public/assets/icons/generals/info.svg';
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
  image: string;
  location: string;
  uri: string;
  tickets: ITicketType[];
  TimeForSell: number;
  DeadlineForSell: number;
  StartTime: number;
  EndTime: number;
}
const EventCreatePage = () => {
  // Setting initial state
  const { user } = useAuth();
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
  });
  const [form, setForm] = useState<IForm>({
    organizer: user || '',
    name: '',
    description: '',
    image: '',
    location: '',
    uri: '',
    tickets: [],
    TimeForSell: 0,
    DeadlineForSell: 0,
    StartTime: 0,
    EndTime: 0,
  });
  console.log('Form', form);
  const handleRegisterOrganize = (organize_info: IOrganizeData) => {
    setForm(prev => ({
      ...prev,
      organizer: organize_info.organizer,
    }));
  };
  const handleEventBasic = (event_info: IEventDetailData) => {
    setForm(prev => ({
      ...prev,
      name: event_info.name,
      StartTime: event_info.StartTime,
      EndTime: event_info.EndTime,
    }));
  };
  const steps: StepProps[] = [
    {
      title: 'Oganize Details',
      icon: AddIcon,
      id: 0,
      element: (
        <StepOrganize
          handleRegisterOrganize={handleRegisterOrganize}
          goToNext={goToNext}
        />
      ),
    },
    {
      title: 'Add Event Details',
      icon: InfoIcon,
      children: [
        {
          title: 'Basic',
          id_child: 1,
          element: (
            <StepEventBasic
              handleEventBasic={handleEventBasic}
              goToNext={goToNext}
              goToPrevious={goToPrevious}
            />
          ),
        },
        {
          title: 'Location',
          id_child: 2,
          element: <StepEventLocation />,
        },
        {
          title: 'Description',
          id_child: 3,
          element: <StepEventDescription />,
        },
        {
          title: 'Photos',
          id_child: 4,
          element: <StepEventPhoto />,
        },
      ],
    },
    {
      title: 'Ticket Details',
      icon: TicketIcon,
      id: 5,
      element: <StepAddTicket />,
    },
  ];

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
              <Box mb={6}>
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

              {/*    <Flex gap={3}>
                {activeStep != 0 && (
                  <Button
                    width="full"
                    variant="primary"
                    onClick={() => goToPrevious()}
                  >
                    Previous Step
                  </Button>
                )}

                {activeStep <= 5 && (
                  <Button
                    width="full"
                    variant="primary"
                    onClick={() => goToNext()}
                  >
                    Next Step
                  </Button>
                )}
                {activeStep == 6 && (
                  <Button width="full" variant="primary">
                    Submit Now
                  </Button>
                )}
              </Flex> */}
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default EventCreatePage;
