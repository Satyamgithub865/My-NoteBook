import { Box, Typography, styled } from '@mui/material'
import { LightbulbOutlined as Lightbulb } from '@mui/icons-material'

const LightIcon = styled(Lightbulb)({
    fontSize:120,
    color: 'lightgrey'
});

const Text = styled(Typography)({
    fontSize: 30,
    color: 'lightgray'
});

const Container = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop: '25vh'
})

const EmptyNotes = () => {
  return (
    <Container>
        <LightIcon />
        <Text>Notes you add appear here...</Text>
    </Container>
  )
}

export default EmptyNotes
