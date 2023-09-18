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
          label: 'sell_products',
          link: '#',
        },
        {
          label: 'buy_products',
          link: '#',
        },

        {
          label: 'create_tickets',
          link: '#',
        },
      ],
    },
    {
      label: 'resources',
      items: [
        {
          label: 'about_us',
          link: '#',
        },
        {
          label: 'events',
          link: '#',
        },

        {
          label: 'faq',
          link: '#',
        },
        {
          label: 'support',
          link: '#',
        },
      ],
    },
    {
      label: 'Legal',
      items: [
        {
          label: 'terms',
          link: '#',
        },
        {
          label: 'privacy',
          link: '#',
        },
      ],
    },
    {
      label: 'company',
      items: [
        {
          label: 'sell_products',
          link: '#',
        },
        {
          label: 'buy_products',
          link: '#',
        },
        {
          label: 'create_tickets',
          link: '#',
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
