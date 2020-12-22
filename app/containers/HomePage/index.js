/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading } from '@chakra-ui/react';

import messages from './messages';
import { Layout } from '../Layout';

export default function HomePage() {
  return (
    <Layout>
      <Heading>
        <FormattedMessage {...messages.header} />
      </Heading>
    </Layout>
  );
}
