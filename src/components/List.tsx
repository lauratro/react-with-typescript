import React from 'react'
import { IState as Props } from "../App"
import RemoveButton from "../components/RemoveButton"
//defining the type of the props
/* interface IProps{
    people:{
      name: string
      age:number
      url: string
      note?: string
    }[] //defining an array of objects
  } */
  interface IProps{
    people: Props["people"],
      setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  
}

const List : React.FC<IProps> = ({people, setPeople})=>{
    const renderList = (): JSX.Element[]=>{
        return people.map(person=>{
         return(   <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age}</p>
             <p className="List-note">{person.note}</p>
           <RemoveButton pers={person.name} people={people} setPeople={setPeople} />
            </li>
         )
        })
    }
return (
    <ul>{renderList()}</ul>
)
}
export default List