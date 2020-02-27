import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PollForm from '../../components/Poll/PollForm';
import PollResults from '../../components/Poll/PollResults';
import { Flex, Box } from 'reflexbox/styled-components';
import Avatar from '../../components/Avatar';

function QuestionDetail(props) {
    const { question, users, authedUser } = props;
    
    if ( typeof(question) !== 'undefined' ) {
        // Check if the question exists before rendering
        const questionAuthor = users[question.author];
        const answers = [...question.optionOne.votes, ...question.optionTwo.votes];
        const answered = answers.includes(authedUser);

        return (
            <Flex py={4} alignItems="center" maxWidth="600px" sx={{margin: 'auto'}}>
                <Box width={[1/3]} mr={3} sx={{textAlign: 'center'}}>
                    <Avatar user={questionAuthor} width="100px" />
                    <p><strong>{questionAuthor.name}</strong><br/>{ answered ? 'asked:' : 'asks:' }</p>
                </Box>
                <Box flexGrow="1">
                    {
                        answered ? (
                            <PollResults question={question} />
                        ): (
                            <PollForm question={question} questionAuthor={questionAuthor} />
                        )
                    }
                </Box>
            </Flex>
        )
    } else {
        // If question doesn't exist, redirect to 404
        return (
            <Redirect to={{ pathname: '/404'}} />
        )
    }    
}

function mapStateToProps({ questions, users, authedUser }, {match}) {
    return {
      loading: authedUser === null,
      question: questions[match.params.id],
      users,
      authedUser
    }
}
  
export default withRouter(connect(mapStateToProps)(QuestionDetail));