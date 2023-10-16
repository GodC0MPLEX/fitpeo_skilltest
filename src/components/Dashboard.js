import React from "react";
import "./dashboard.css";

function Tag(props) {
  return (
    <div className="tag">
      <div className="iconTag">
        <img className="icon" src={props.src} />
        <h4>{props.tagName}</h4>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" />
    </div>
  );
}
function Dashboard() {
  return (
    <div className="dash_main">
      <div className="dashboard">
        <h2 className="tag dash">
          <img src="https://cdn-icons-png.flaticon.com/128/2956/2956788.png" />
          Dashboard
        </h2>
        <div className="tag dash">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/6820/6820898.png"
          />
          <h4>Dashboard</h4>
        </div>
        <Tag
          src="https://cdn-icons-png.flaticon.com/128/679/679720.png"
          tagName="Products"
        />
        <Tag
          src="https://cdn-icons-png.flaticon.com/128/3239/3239045.png"
          tagName="Customers"
        />
        <Tag
          src="https://cdn-icons-png.flaticon.com/128/1426/1426526.png"
          tagName="Income"
        />
        <Tag
          src="https://cdn-icons-png.flaticon.com/128/1589/1589131.png"
          tagName="Promote"
        />
        <Tag
          src="https://cdn-icons-png.flaticon.com/128/1660/1660114.png"
          tagName="Help"
        />
      </div>

      <div className="user tag">
        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" />
        <div>
          <h4>Evano</h4>
          <h5>Project Manager</h5>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" />
      </div>
    </div>
  );
}

export default Dashboard;
