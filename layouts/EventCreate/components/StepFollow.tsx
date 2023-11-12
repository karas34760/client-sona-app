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
        {steps.map((item, index) => {
          if (!item.children) {
            return (
              <Step key={index}>
                <HStack>
                  <Icon as={item.icon} height={6} width={6} />
                  <Text fontWeight="bold">{item.title}</Text>
                </HStack>
              </Step>
            );
          } else {
            return (
              <>
                <HStack>
                  <Icon as={item.icon} height={6} width={6} />
                  <Text fontWeight="bold">{item.title}</Text>
                </HStack>
                {item.children && (
                  <Flex flexDirection="column" minH="250px" pl={6}>
                    {React.Children.toArray(
                      item.children.map((child: any) => (
                        <Step key={child.id}>
                          <StepIndicator>
                            <StepStatus
                              complete={child.id === activeStep && <StepIcon />}
                              active={child.id === activeStep && <StepNumber />}
                              incomplete={
                                child.id === activeStep && <StepNumber />
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
