import Form from './components/Form'

function App() {

  return (
    <div>
      <Form onSubmit={(data)=> console.log(data)} />
    </div>
  )
}

export default App
