import React from "react";
import "./BusinessList.css";
import Business from "../business/business";

class BusinessList extends React.Component {
  
  render(){
        return(
      <div className="BusinessList">
        {
          this.props.businesses === undefined ? <div>your search has no results</div> : this.props.businesses.map(business=><Business business={business} key={business.id} />)
        }
      </div>
            
        )
    }
}
export default BusinessList;

