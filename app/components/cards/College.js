import React from 'react'

class College extends React.Component{
  render(){
    return(
      <div>
        <h2 className="h00-responsive">Good luck at college! Don't</h2>
        <form>
          <label className="hide">Helpful advice</label>
          <input type="text" className="block field y-group-item" placeholder="forget to change your sheets!" />
        </form>
      </div>
    )
  }
}

export default College
