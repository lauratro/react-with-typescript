import React, {useState} from 'react'
import { IState as Props } from "../App"

interface IProps{
    people: Props["people"]
setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    pers:IPers["pers"]
}
interface IPers{
    pers:string
}
const RemoveButton: React.FC<IProps> = ({ people, setPeople, pers }) => {
    console.log("pers", pers)
    const handleRemoveItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    

   setPeople(people.filter(item => item.name !== pers));
  };
    return (
        <button onClick={handleRemoveItem}>
            Remove
        </button>
    )
}
export default RemoveButton