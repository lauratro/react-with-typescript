import React, {useState} from 'react'
import { IState as Props } from "../App"

interface IProps{
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>> 
}
 const AddToList: React.FC<IProps> = ({people,setPeople})=> {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        image: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
           ...input, [e.target.name]: e.target.value
       })
    }
    const handleClick = (): void => {
        if (!input.name || !input.age || !input.image) {
            return
        }
        setPeople([
            ...people, {
                name: input.name,
                age: parseInt(input.age),
                url: input.image,
                note:input.note
            
            }
        ])
    }
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" name="name" className="AddToList-input" onChange={handleChange} value={input.name} />
            <input type="text" placeholder="Age" name="age" className="AddToList-input" onChange={handleChange} value={input.age}/>
               <input type="text" placeholder="Image Url" name="image" className="AddToList-input" onChange={handleChange} value={input.image}/>
            <textarea placeholder="Notes" name="note" className="AddToList-input" onChange={handleChange} value={input.note} />
            <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
        </div>
    )
}
export default AddToList