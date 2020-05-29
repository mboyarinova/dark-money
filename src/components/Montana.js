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
        <ul>
          <li>
            Article providing background on Ed Sheehy when he ran for the seat
          </li>
          <li>
            Flier paid for by the Montana Growth Network which supports Laurie
            McKinnon
          </li>
          <li>
            Two fliers paid for by the Montana Growth Network which advocate
            against Ed Sheehy
          </li>
          <li>
            Article discussing radio attack ad on Ed Sheehy funded by the
            Montana Growth Network
          </li>
          <li>
            Montana Growth Network website
          </li>
          <li>
            Map of the remote Ruby River and the bridges crossing or providing
            access to it
          </li>
          <li>
            Guide to the Ruby River, including physical description, access
            points, and challenges to recreation on the river
          </li>
          <li>
            Active case disputing landowners rights to create barriers limiting
            access to the Ruby River where it crosses into private property
          </li>
          <li>
            Vocabulary list with definitions of legal terms used in the active
            Supreme Court case
          </li>
        </ul>
        <p>
          After reading all the available materials, if you want a hint read
          this additional material. Please note that the Hint material would
          not have been available to voters prior to the election.
        </p>
      </div>

    var solution =
      <div className="solution-text">
        <strong>Who is the Neighborhood Empowerment Coalition?</strong>
        <p>
          The NEC is funded by the California Apartment Association, the
          California branch of the largest property owners association in the
          country. They represent the interest of the rental housing industry.
        </p>
        <strong>Role in the election</strong>
        <p>
          The NEC spent $83,000 in the City Council election to support 3
          candidates out of the 9 running for 3 seats. All 3 candidates opposed
          rent control, which was a popular solution to the city’s housing cost
          crisis. The California Apartment Association opposed rent controls on
          behalf of the property owners in Mountain View, where 58% of the
          population are renters.
        </p>
        <strong>Result</strong>
        <p>
          2 out of 3 of the candidates backed by NEC funding won seats on the
          City Council, including Pat Showalter. Rent control was not an issue
          discussed by the Council until years later when a ballot measure
          passed demanding action on the issue.
        </p>
        <p>
          It is important to note that none of the candidates coordinated with
          the NEC or knew about the CAA involvement.
        </p>
        <strong>Is this legal?</strong>
        <p>
          Yes. The Neighborhood Empowerment Coalition is a Political Action
          Committee and the California Apartment Association is obliged to
          report contributions to the California Fair Political Practice
          Commission. The election took place on November 4th, and
          contributions made after October 18th didn’t have to be reported
          until the following February. CAA made virtually all of their
          contributions in the days after the deadline, ensuring voters
          wouldn’t be able to trace the spending until long after ballots had
          been cast.
        </p>
      </div>

    return (
      <React.Fragment>
        <Scenario
          intro={intro}
          factSheet={factSheet}
          voterMaterials={voterMaterials}
          solution={solution}
          action={this.props.action}
        />
      </React.Fragment>
    )
  }
}

export default Montana
