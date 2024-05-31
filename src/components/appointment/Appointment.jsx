import React from 'react';
import {
  Btn,
  Title,
  Container,
  SubTitle,
  FormField,
  Label,
  Input,
  Textarea,

} from './styled'; 
import { Name, Nanny, NannyAva } from './styled';


export const Appointment = ({ isOpen, onClose, nanny }) => {
  if (!isOpen) return null;

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

      {/* 
      <FormField>
        <Label>Nanny's Name</Label>
        <Input type="text" placeholder="Enter nanny's name" />
      </FormField>

 
      <FormField>
        <Label>Address</Label>
        <Input type="text" placeholder="Enter your address" />
      </FormField>

   
      <FormField>
        <Label>Child's age</Label>
        <Input type="text" placeholder="Enter child's age" />
      </FormField>


      <FormField>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter your email" />
      </FormField> */}

      <FormField>
        <Label>Meeting time</Label>
        <Input type="time" />
      </FormField>

      <FormField>
        <Label>Father's or mother's name</Label>
        <Input type="text" placeholder="Enter father's or mother's name" />
      </FormField>

      <FormField>
        <Label>Comment</Label>
        <Textarea
          rows="4"
          placeholder="Enter any additional comments"
        ></Textarea>
      </FormField>

      <Btn type="submit">Send</Btn>
    </Container>
  );
};

export default Appointment;
