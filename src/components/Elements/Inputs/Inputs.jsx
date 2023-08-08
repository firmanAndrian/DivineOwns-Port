import '../../../index.css'
const Input =(props) =>{
    const {type,pholder,name} = props
    return (
        <input type={type}
        className="kotak text-sm placeholder: opacity-90 w-full h-10 bg-white bg-opacity-60 rounded-[5px] pl-4" 
        placeholder={pholder}
        name={name}
        />
    )
}

export default Input

