import { Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const BtnSwitchLanguage = () => {
  const { locales, locale: activeLocale } = useRouter();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  return <></>;
};

export default BtnSwitchLanguage;
