/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from 'lib/Components/Button';
import Screen from 'lib/Components/Screen';
import { Heading } from 'lib/styles';
import { Buttons, MessageContainer } from './Warning.Styles';

const Warning = ({ navigation: { goBack, getParam } }) => {
  const { t } = useTranslation();
  const message = getParam('message');
  const onConfirm = getParam('onConfirm');
  return (
    <Screen>
      <MessageContainer>
        <Heading>{message}</Heading>
      </MessageContainer>
      <Buttons>
        <Button
          title={t('confirm')}
          onPress={() => {
            onConfirm();
            goBack();
          }}
        />
        <Button title={t('cancel')} onPress={() => goBack()} />
      </Buttons>
    </Screen>
  );
};

Warning.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Warning;
