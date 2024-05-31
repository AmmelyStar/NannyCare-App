import React from 'react';
import {
  Btn,
  Title,
  Container,
  SubTitle,
  FormField,
  StyledSelect,
  Input,
  Textarea,
  InputSmall,
  Name,
  Nanny,
  NannyAva,
  Wrapper,
  Option,
} from './styled';

const generateTimeOptions = () => {
  const times = [];
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  let startHour = currentHour;
  let startMinutes = currentMinutes < 30 ? 30 : 0;
  if (currentMinutes >= 30) {
    startHour += 1;
  }

  let firstTimeAdded = false;
  for (let hour = startHour; hour < 24; hour++) {
    if (!firstTimeAdded) {
      times.push({ value: 'header', label: 'Meeting time' });
      firstTimeAdded = true;
    }

    if (startMinutes === 30) {
      times.push({
        value: `${hour < 10 ? '0' : ''}${hour}:30`,
        label: `${hour < 10 ? '0' : ''}${hour}:30`,
      });
      startMinutes = 0;
    } else {
      times.push({
        value: `${hour < 10 ? '0' : ''}${hour}:00`,
        label: `${hour < 10 ? '0' : ''}${hour}:00`,
      });
      times.push({
        value: `${hour < 10 ? '0' : ''}${hour}:30`,
        label: `${hour < 10 ? '0' : ''}${hour}:30`,
      });
    }
  }

  return times;
};

export const Appointment = ({ isOpen, onClose, nanny }) => {
  if (!isOpen) return null;

  const timeOptions = generateTimeOptions();

  return (
    <Container>
      <Title>Make an Appointment with a Babysitter</Title>
      <SubTitle>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </SubTitle>
      <NannyAva>
        <Nanny src={nanny.avatar_url} alt="Nanny Avatar" />
        <Name>
          <span> Your nanny</span> <br />
          <strong> {nanny.name}</strong>
        </Name>
      </NannyAva>
      <Wrapper>
        <FormField>
          <InputSmall type="text" placeholder="Address" />
        </FormField>

        <FormField>
          <InputSmall type="text" placeholder="+380" />
        </FormField>

        <FormField>
          <InputSmall type="text" placeholder="Child's age" />
        </FormField>
        <FormField>
          <StyledSelect options={timeOptions} placeholder="00:00" />
        </FormField>
      </Wrapper>

      <FormField>
        <Input type="email" placeholder="Email" />
      </FormField>

      <FormField>
        <Input type="text" placeholder="Father's or mother's name" />
      </FormField>

      <FormField>
        <Textarea rows="4" placeholder="Comment" />
      </FormField>

      <Btn type="submit">Send</Btn>
    </Container>
  );
};

export default Appointment;
