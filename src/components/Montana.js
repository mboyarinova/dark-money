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
      [
        <div className="slide-text">
          <strong>Who is Montana Growth Network?</strong>
          <p>
            The Montana Growth Network was funded by Charles Schwab (net worth
            $4.2 billion) and James Cox Kennedy (net worth 10.2 billion), two
            estate owners in Montana. They have both been involved in a series
            of drawn out court cases to limit the public’s access to waterways
            on their land, including the Ruby River.
          </p>
          <strong>Why did they pour money into the election?</strong>
          <p>
            Schwab and Kennedy were hoping that a conservative justice on the
            Montana Supreme Court would rule to revoke the Stream Access Law
            and limit the public’s access to waterways on their property.
          </p>
          <strong>What happened next?</strong>
          <p>
            McKinnon beat Sheehy in the election. When the active court case
            involving Kennedy came to the Supreme Court in 2016, McKinnon was
            one of two judges to vote in favor of Kennedy. Kennedy lost the
            court case and Montanians’ access to waterways was reaffirmed.
          </p>
        </div>,
        <div className="slide-text">
          <strong>Is this legal?</strong>
          <p>
            Yes. 501(c)(4) organizations are under no obligation to disclose
            their donors, and most of them do not. These organizations can
            accept unlimited contributions and spend unlimited amounts in both
            state and federal elections, and the public will never know where
            that money comes from. Frequently, organizations like the Montana
            Growth Network do not advocate for their key issues (like public
            access to waterways) but instead focus on controversial or divisive
            issues (like the death penalty) which sway voters without revealing
            their true intentions.
          </p>
          <p>
            This information is only available because the Montana Growth
            Network separately broke the law by misrepresenting campaign
            contributions to state senators, and so was ordered by a judge to
            disclose their donors. The truth is that this happens all the time
            in state and local elections, and usually the public never finds
            out the true donors and motivations.
          </p>
        </div>
      ]

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
