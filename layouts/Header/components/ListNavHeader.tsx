import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import LinkPrimary from '@/components/Link/LinkPrimary';
interface ListProps {
  label: string;
  link: string;
}
const ListNavHeader = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const ListItem: ListProps[] = [
    {
      label: t('Events'),
      link: '/events',
    },
    {
      label: t('discover'),
      link: '/discover',
    },
    {
      label: t('faq'),
      link: '/faq',
    },
  ];
  return (
    <>
      {ListItem.map(item => (
        <LinkPrimary
          sx={{
            fontSize: 'lg',
            fontWeight: 'bold',
            color: router.asPath.includes(item.link)
              ? 'primary.purple.500'
              : 'inherit',
          }}
          key={`head-nav-${item.label}`}
          label={item.label}
          link={item.link}
        />
      ))}
    </>
  );
};

export default ListNavHeader;
