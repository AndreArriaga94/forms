import { useState } from "react"

const App = () => {
    const [value, setValue] = useState({normal: 'valor inicial', texto: ''})
    const handleChange = (e) => {
        // setValue({
        //     ...value,
        //     [e.target.name]: e.target.value
        // })

        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    console.log(value)
    return (
        <div>
            {value.normal.length < 5 ? <span>longitud minima de 5</span> : null}
            <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
            <textarea name="texto" onChange={handleChange} value={value.texto}/>
        </div>
    )
}

export default App