import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="col-img">
        <img src={props.imageUrl} className="card-img" alt="" />
      </div>

      <div className="col">
        <div className="card-location">
          <div className="card-loc-ico">
            <i class="fa-solid fa-location-dot"></i>
          </div>

          <p className="location">{props.location}</p>
          <a href={props.googleMapsUrl} className="loc-a">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <strong>
          {props.startDate} - {props.endDate}
        </strong>
        <p className="desc">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
