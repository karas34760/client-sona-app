import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import LinkSecondary from '@/components/Link/LinkSecondary';
import { LinkContent } from '@/utils/type';
interface ListProps {
  label: string;
  items: Array<LinkContent>;
}
const LinkFooter = () => {
  const { t } = useTranslation();
  const ListNavFooter: ListProps[] = [
    {
      label: 'marketplace',
      items: [
        {
          label: 'view_events',
          link: '/events',
        },
        {
          label: 'buy_tickets',
          link: '/events',
        },

        {
          label: 'create_tickets',
          link: '/account/create_events',
        },
      ],
    },
    {
      label: 'resources',
      items: [
        {
          label: 'about_us',
          link: '/about_us',
        },
        {
          label: 'events',
          link: '/events',
        },

        {
          label: 'faq',
          link: '/faq',
        },
      ],
    },
    {
      label: 'Legal',
      items: [
        {
          label: 'terms',
          link: '/terms',
        },
        {
          label: 'privacy',
          link: '/privacy',
        },
      ],
    },
  ];

  return (
    <>
      {ListNavFooter.map(item => (
        <Box key={`footer-${item.label}`}>
          <Text color="white" fontSize="lg" fontWeight="semibold" mb={4}>
            {t(`${item.label}`)}
          </Text>
          <Flex flexDirection="column" gap="8px">
            {item.items &&
              item.items.map(sub_item => (
                <Box
                  key={`sublink-footer${sub_item.label}`}
                  width="fit-content"
                >
                  <LinkSecondary
                    sx={{
                      fontSize: 'sm',
                      color: 'primary.gray.400',
                    }}
                    label={t(`${sub_item.label}`)}
                    link={sub_item.link}
                  />
                </Box>
              ))}
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default LinkFooter;
