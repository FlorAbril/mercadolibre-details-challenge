import React from 'react'
import mock from '../mock'
import { Box, Button, Input, Link, List, ListItem, Text, Textarea } from "@chakra-ui/react";

interface QuikQuestion {
  title: string;
}
interface Question {
  question: string;
  answer: string;
  answer_date: string;
}

const QuikQuestions = () => {
  const questions:QuikQuestion[] = mock.product.quick_questions
  return(
    <Box mt={'10'}>
      <Text fontSize={'lg'} pb={'2'} fontWeight={'semibold'}
      >
        ¿Qué quieres saber?
      </Text>
      <List d={'inline-block'}>
        {questions.map((question, index) => (
          <ListItem d={'inline-block'} mt={'3'} mr={'3'} key={index}>
            <Box mt={'2'}>
              <Text color={'#3483fa'} bg={'#418ce626'} borderRadius={'5px'}
                fontSize={'sm'} lineHeight={8} height={'2rem'} px={'3.5'} fontWeight={'semibold'}
                cursor={'pointer'} _hover={{bg: '#4189e633'}} transition='background-color .2s ease-in'
              >
                {question.title}
              </Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const MakeQuestion: React.FC<{makeQuestion: (question: string) => void}> = ({makeQuestion}) => {
  const [question, setQuestion] = React.useState('')
  return(
    <Box mt={'10'}>
      <Text fontSize={'lg'} fontWeight={'semibold'}>
        Preguntale al vendedor
      </Text>
      <Box d={'flex'} mt={'4'}>
        <Textarea placeholder='Escribí tu pregunta...' size={'lg'} 
          p={'.8125em .75em'} value={question} onChange={(e) => setQuestion(e.target.value)}
        />
        <Button 
          _hover={{backgroundColor: "secondary.800"}}
          backgroundColor="secondary.900"
          color="whiteAlpha.900"
          size="lg" ml={'4'} px={'12'}
          onClick={() => makeQuestion(question)}
        >
          Preguntar
        </Button>
      </Box>
    </Box>
  )
}

const QuestionsList :React.FC<{questions: Question[]}> = ({questions}) => {
  return(
    <Box mt={'10'}>
      <Text fontSize={'lg'} fontWeight={'semibold'}>
        Últimas realizadas 
      </Text>
      <Box>
        {questions.map((question, index) => (
          <Box mt={'6'}>
            <Box _hover={{
              '& a': {
                opacity: 1
              }
            }}>
              <Text as={'span'}>
                {question.question}
              </Text>
              <Link opacity={'0'} 
                ml={'2'} pt={'0.5'} fontSize={'sm'}
              > 
                Denunciar
              </Link>
            </Box>
            {question.answer && (
              <Box ml={'3'} mt={'2'}  d={'flex'} >
                <Box w={'0.75rem'} h={'0.75rem'} mr={'2'}
                  borderBottom={'1px solid rgba(0,0,0,.25)'} 	borderLeft={'1px solid rgba(0,0,0,.25)'}
                />
                <Box _hover={{'& a': { opacity: 1 }}}>
                  <Text as={'span'} color={'blackAlpha.700'}>
                    {question.answer}
                  </Text>
                  <Text as={'span'} fontSize={'sm'} color={'blackAlpha.600'} ml={'2'}>
                    {question.answer_date}
                  </Text>
                  <Link opacity={'0'}
                    ml={'2'} pt={'0.5'} fontSize={'sm'}
                  >
                    Denunciar
                  </Link>
                </Box>
              </Box>
            )}
          </Box>
        ))}
        <Box py={'6'}>
          <Link fontSize={'sm'}>
            Ver todas las preguntas
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

const Questions = () => {
  const [questions, setQuestions] = React.useState<Question[]>(mock.product.questions)
  const makeQuestion = (question: string) => {
    setQuestions([{
      question,
      answer: '',
      answer_date: ''
    }, ...questions])
  }
  return(
    <Box pt={'10'} >
       <Text fontSize={'2xl'} fontWeight={'400'}>
          Preguntas y Respuestas
       </Text>
        <QuikQuestions/>
        <MakeQuestion makeQuestion={makeQuestion}/>
        <QuestionsList questions={questions}/>
    </Box>
  )
}

export default Questions;