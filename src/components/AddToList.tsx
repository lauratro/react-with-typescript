import React from 'react'

export default function AddToList() {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        image: ""
    })
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" name="name" className="AddToList-input" value={input.name} />
            <input type="text" placeholder="Age" name="name" className="AddToList-input" value={input.age}/>
               <input type="text" placeholder="Image Url" name="name" className="AddToList-input" value={input.image}/>
          <textarea  placeholder="Notes" name="name" className="AddToList-input" value={input.note} />
        </div>
    )
}
