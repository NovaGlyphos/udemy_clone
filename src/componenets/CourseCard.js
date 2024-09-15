

  const CourseCard = ({couData}) => (
    <div className="cou-card">
        <img className="cou-logo" src={couData.image} />
        <h3>{couData.name}</h3>
        <h5>{couData.teacher}</h5>
        <h5>{couData.rating} stars</h5>
        <h5>{couData.price}</h5>
    </div>
)


export default CourseCard;