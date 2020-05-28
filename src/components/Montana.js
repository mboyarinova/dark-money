import React, { Component } from 'react'
import Scenario from './Scenario'

class Montana extends Component {
  render() {

    var intro =
      <div className="main-text">
        <p>
          In 2012 Montana held a statewide election for a state Supreme Court
          Seat. The two candidates to make it out of the primary were Ed Sheehy
          and Laurie McKinnon. Montana Supreme Court judges are nonpartisan, so
          neither candidate was affiliated with either party. In the weeks
          before the election the Montana Growth Network spent $900,000 on a
          smear campaign against Ed Sheehy involving radio ads and fliers
          misrepresenting his time as a public defender. Negative
          advertisements sponsored by candidates are prohibited in Montana, and
          it is unusual to see any negative advertising in the state elections.
          Sheehy spent $44,000 on his campaign and McKinnon spent $34,000.
        </p>
        <p>
          The smear campaign was funded by the Montana Growth Network, a
          501(c)(4) organization which is not obligated to disclose its donors.
          Your mission is to look at the information which was available to
          voters in the days before the election and try to figure out why
          hundreds of thousands of dollars of dark money was poured into this
          nonpartisan election. Keep in mind that it might not be possible to
          connect all of the dots from information available to the public.
        </p>
        <p>
          Word of warning: any information provided by the Montana Growth
          Network is likely to be misdirection to draw voters’ attention away
          from the issue MGN actually cares about.
        </p>
      </div>

    var factSheet =
      <div className="main-text">
        <ul>
          <li>
            The Montana Growth Network claims to advocate for policies which
            make the state more business-friendly.
          </li>
          <li>
            Montana’s state Constitution included a Stream Access Law which
            guarantees the right of all citizens to use the waterways in the
            state for recreational purposes even if they run through private
            land.
          </li>
          <li>
            In 1912 Montana passed the Corrupt Practices Act which prohibited
            corporations from contributing to political campaigns, through
            direct contributions or outside spending. This progressive law was
            passed in reaction to copper barons essentially purchasing the
            state legislative and judicial branches in order to solidify their
            empires and achieve judgements beneficial to their copper profits.
            Following the Citizens United v. FEC Supreme Court decision (2010),
             the Corrupt Practices Act was overturned by the US Supreme Court.
          </li>
        </ul>
      </div>

    var voterMaterials =
      <div className="main-text">

      </div>

    return (
      <div className="montana">
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

export default Montana