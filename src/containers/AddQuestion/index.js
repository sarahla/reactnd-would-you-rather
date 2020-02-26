import React from 'react';
import { Flex, Box } from 'reflexbox/styled-components';
import QuestionForm from '../../components/QuestionForm';

function AddQuestion() {
    return (
      <Flex flexDirection="column" maxWidth="700px" margin="auto">
          <h1>Ask a new question</h1>
          <h2>Would you rather...</h2>
          <QuestionForm />
      </Flex>
    );
}

export default AddQuestion;
