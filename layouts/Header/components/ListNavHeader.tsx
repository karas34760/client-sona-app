import React from 'react';
import { useTranslation } from 'next-i18next';

import LinkPrimary from '@/components/Link/LinkPrimary';
interface ListProps {
  label: string;
  link: string;
}
const ListNavHeader = () => {
  const { t } = useTranslation();
  const ListItem: ListProps[] = [
    {
      label: t('marketplace'),
      link: '/marketplace',
    },
    {
      label: t('discover'),
      link: '/discover',
    },
    {
      label: t('create_events'),
      link: '/create-events',
    },
  ];
  return (
    <>
      {ListItem.map(item => (
        <LinkPrimary
          sx={{
            fontWeight: 'medium',
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
