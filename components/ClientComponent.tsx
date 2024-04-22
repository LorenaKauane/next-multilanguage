'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

const ClientComponent: React.FC = () => {
  const t = useTranslations('Home');
  return <p className="text-white">{t('client')}</p>;
};

export default ClientComponent;
