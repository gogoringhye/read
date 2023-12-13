import React from 'react';

const Profile = ({img,name,title,isNew}) => {
// ||--> 또는 A || B 둘 중에 하나라도 True이면 True 
// &&--> 그리고 A && B 둘중에 하나라도 false이면 false(둘 다 충족해야함)

//console.log(props)
// const img=props.img;
// const name=props.name;
// const title=props.title;
// const isNew=props.isNew;

//구조분해 destructure
//const {img,name,title,isNew}=props;

return (
    <div className="profile">
    <img src={img} alt="avatar" />
   {/*  {isNew?<span className="new">신입</span>:""} */}
    {isNew && <span className="new">신입</span>}
    <h2>{name}</h2>
    <p>{title}</p>
    </div>
  )
 
}

export default Profile;