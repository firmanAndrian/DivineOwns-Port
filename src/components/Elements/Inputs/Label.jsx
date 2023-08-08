
import '../../../index.css'

const Label = (props) => {
    const {name,judul} = props

    return (
        <label htmlFor={name} className="block mb-2">{judul}</label>
        )
}

export default Label