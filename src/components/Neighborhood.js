import React, { Component } from 'react'
import Scenario from './Scenario'

class Neighborhood extends Component {

  render() {

    var intro =
      <div className="main-text">
        <p>
          Mountain View, CA held a City Council election on November 4, 2014.
          Three out of the seven seats on the Council were available, and nine
          candidates competed for those seats.
        </p>
        <p>
          The day before the election, mysterious mailers from the Neighborhood
          Empowerment Coalition (NEC) were sent out across Mountain View in
          support of three candidates: Pat Showalter, Ken Rosenberg, and Ellen
          Kamei. All three had no contact with the NEC, nor did they know
          anything about the organization. In total, the NEC spent $90,000
          supporting the three candidates, making up more than half of all
          campaign spending in the race.
        </p>
        <p>
          Your mission is to look at all of the information available to voters
          in the days before the election and try to figure out what special
          interest hid its involvement in the election by funneling campaign
          spending through the NEC, and for what reason. Keep in mind that it
          might not be possible to connect all of the dots from information
          available to the public.
        </p>
      </div>

    var factSheet =
      <div className="main-text">
        <ul>
          <li>Population: 74,000</li>
          <li>Median age: 35.9 years</li>
          <li>Main industry: technology</li>
          <li>Housing density: 2,760.6 units per square mile (semi-urban)</li>
          <li>Renters to Homeowners: 58% to 42%</li>
          <li>
            Known for: being home to Google, Symantec, Intuit, and Mozilla
          </li>
          <li>Unemployment rate: 5%</li>
          <li>
            Contentious issues in the 2014 election: raising the minimum wage,
            rent control, building housing developments, transportation
            infrastructure
          </li>
        </ul>
      </div>

    var voterMaterials =
      <div className="main-text">

      </div>

    return (
      <div className="neighborhood">
        <Scenario
          intro={intro}
          factSheet={factSheet}
          voterMaterials={voterMaterials}
          action={this.props.action}
        />
      </div>
    )
  }
}

export default Neighborhood
