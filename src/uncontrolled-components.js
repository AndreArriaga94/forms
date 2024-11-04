const submit = (e) => {
  e.preventDefault()
  const data = Array.from(new FormData(e.target))
  console.log(Object.fromEntries(data))
}

function App() {
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          iaa
        </span>
        <input name='campo'></input>
      </div>
      <input name='campo2'></input>
      <input type='submit' value='Enviar'></input>
    </form>
  )
}

export default App
