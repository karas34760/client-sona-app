import {
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import LanguageIcon from 'public/assets/icons/generals/language.svg';

const BtnSwitchLanguage = () => {
  const { locale, locales, push, asPath } = useRouter();
  const ListLanguage = [
    {
      text: 'English',
      key: 'en',
    },
    {
      text: 'Vietnamese',
      key: 'vi',
    },
  ];

  return (
    <>
      <>
        {locale && locales && (
          <Menu>
            <MenuButton
              display="flex"
              as={Button}
              variant="unstyled"
              rightIcon={<Icon as={LanguageIcon} width={5} height={5} />}
              color="paragraph.accent.100"
              textTransform="uppercase"
            >
              {locale}
            </MenuButton>

            <Portal>
              <MenuList
                zIndex="popover"
                padding={0}
                minWidth="fit-content"
                overflow="hidden"
              >
                {React.Children.toArray(
                  ListLanguage.map(language => (
                    <MenuItem
                      color={
                        language.key === locale
                          ? 'primary.purple.400'
                          : 'transparents'
                      }
                      textTransform="capitalize"
                      fontSize="sm"
                      fontWeight="medium"
                      onClick={event => {
                        if (language.key === locale)
                          return event.preventDefault();

                        push(asPath, undefined, {
                          locale: language.key,
                        });
                      }}
                    >
                      {language.text}
                    </MenuItem>
                  ))
                )}
              </MenuList>
            </Portal>
          </Menu>
        )}
      </>
    </>
  );
};

export default BtnSwitchLanguage;
