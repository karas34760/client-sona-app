import {
  Box,
  Flex,
  HStack,
  Icon,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
} from '@chakra-ui/react';
import React from 'react';

// Setting Steps
interface StepValidateProps {
  activeStep: number;
  steps: any[];
}
const StepFollow = ({ activeStep, steps }: StepValidateProps) => {
  return (
    <>
      <Stepper index={activeStep} orientation="vertical" gap={8}>
        {steps.map(item => {
          if (!item.children) {
            return (
              <Step key={item.id}>
                <HStack
                  color={
                    activeStep == item.id
                      ? 'primary.purple.500'
                      : 'shader.a.900'
                  }
                >
                  <Icon as={item.icon} height={6} width={6} />
                  <Text fontWeight="bold">{item.title}</Text>
                </HStack>
              </Step>
            );
          } else {
            return (
              <>
                <HStack
                  color={
                    activeStep >= 1 && activeStep <= 4
                      ? 'primary.purple.500'
                      : 'shader.a.900'
                  }
                >
                  <Icon as={item.icon} height={6} width={6} />
                  <Text fontWeight="bold">{item.title}</Text>
                </HStack>
                {item.children && (
                  <Flex flexDirection="column" minH="250px" pl={6}>
                    {React.Children.toArray(
                      item.children.map((child: any) => (
                        <Step key={child.id_child}>
                          <StepIndicator>
                            <StepStatus
                              complete={
                                child.id_child == activeStep && <StepIcon />
                              }
                              active={child.id_child == activeStep}
                              incomplete={
                                child.id_child == activeStep && <StepNumber />
                              }
                            />
                          </StepIndicator>

                          <Box flexShrink="0">
                            <StepTitle>{child.title}</StepTitle>
                          </Box>
                          <StepSeparator />
                        </Step>
                      ))
                    )}
                  </Flex>
                )}
              </>
            );
          }
        })}
      </Stepper>
    </>
  );
};

export default StepFollow;
