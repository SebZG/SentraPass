import React from 'react'

function CreatorCard(props) {
   return (
      <>
         <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.aboutauthor}</p>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">{props.li1}</li>
               <li className="list-group-item">{props.li2}</li>
               <li className="list-group-item">{props.li3}</li>
            </ul>
            <div className="card-body">
               <a href="#" className="card-link">{props.githublink}</a>
               <a href="#" className="card-link">{props.linkedinlink}</a>
            </div>
         </div>
      </>
   )
}

export default CreatorCard