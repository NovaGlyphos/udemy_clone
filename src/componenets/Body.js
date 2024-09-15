import CourseCard from "./CourseCard";
import {useState} from "react";
import couList from "../utils/mockData";

const Body = () =>{
  //state variable
  const [ListofCourses,setListOfCourse] = useState(couList);

  
  return(
  <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
          const filteredList = ListofCourses.filter(cou => cou.rating>4);
          setListOfCourse(filteredList);
        }}
          >Top Rated Courses</button>
      </div>
      <div className="cou-container">
          {
            ListofCourses.map(course => <CourseCard couData={course}/>)
          };
          
      </div>
  </div>
)
};

export default Body;