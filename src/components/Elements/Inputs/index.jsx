import Input from "./Inputs"
import Label from "./Label"

const InputForm =(props)=>{
    const {type,name,pholder,judul} = props
    return (
        <div className="mb-3">
        <Label name = {name} judul={judul} />
        <Input type={type} pholder ={pholder} name={name}/>
        </div>
    )
}

export default InputForm