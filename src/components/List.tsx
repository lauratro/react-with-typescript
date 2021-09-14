import React from 'react'
//defining the type of the props
interface IProps{
    people:{
      name: string
      age:number
      url: string
      note?: string
    }[] //defining an array of objects
  }
const List : React.FC<IProps> = ({people})=>{
return (
    <div>I am a list</div>
)
}
export default List