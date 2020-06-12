import React, { Component } from 'react'
import Scenario from './Scenario'
import Popup from './Popup'
import withPopupAndForm from './withPopupAndForm'

class Montana extends Component {

  render() {

    const {material, popupType, popupHandler, unmountMe, handleClick,
           handleClickAway, handleSubmit} = this.props

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
          <li className="fact-item">
            The Montana Growth Network claims to advocate for policies which
            make the state more business-friendly.
          </li>
          <li className="fact-item">
            Montana’s state Constitution included a Stream Access Law which
            guarantees the right of all citizens to use the waterways in the
            state for recreational purposes even if they run through private
            land.
          </li>
          <li className="fact-item">
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
          <li className="material-item">
            <u
              onClick={() => popupHandler(['MGN/Missoulian.jpg'], 'turn')}
              onKeyPress={() => popupHandler(['MGN/Missoulian.jpg'], 'turn')}
              tabIndex="0"
            >
              The Missoulian Article: “Missoula Lawyer Ed Sheehy to run for
              Montana Supreme Court Justice”
            </u>
            <br />
            Article providing background on Ed Sheehy when he ran for the seat
          </li>
          <li className="material-item">
            <u
              onClick={() => popupHandler(['MGN/ProFlier-1.jpg',
                                            'MGN/ProFlier-2.jpg'], 'flip')}
              onKeyPress={() => popupHandler(['MGN/ProFlier-1.jpg',
                                              'MGN/ProFlier-2.jpg'], 'flip')}
              tabIndex="0"
            >
              Pro-Laurie McKinnon Flier
            </u>
            <br />
            Flier paid for by the Montana Growth Network which supports Laurie
            McKinnon
          </li>
          <li className="material-item">
            <div style={{float: "left"}}>
              Anti-Ed Sheehy Fliers (
            </div>
            <u
              style={{float: "left"}}
              onClick={() => popupHandler(['MGN/AntiFlier_1.jpg',
                                           'MGN/AntiFlier_2.jpg'], 'flip')}
              onKeyPress={() => popupHandler(['MGN/AntiFlier_1.jpg',
                                              'MGN/AntiFlier_2.jpg'], 'flip')}
              tabIndex="0"
            >
              first
            </u>
            &nbsp;and&nbsp;
            <u
              onClick={() => popupHandler(['MGN/AntiFlier_3.jpg',
                                            'MGN/AntiFlier_4.jpg'], 'flip')}
              onKeyPress={() => popupHandler(['MGN/AntiFlier_3.jpg',
                                              'MGN/AntiFlier_4.jpg'], 'flip')}
              tabIndex="0"
            >
              second
            </u>
            )
            <br />
            Two fliers paid for by the Montana Growth Network which advocate
            against Ed Sheehy
          </li>
          <li className="material-item">
            <u
              onClick={() => popupHandler(['MGN/Billings.jpg'], 'turn')}
              onKeyPress={() => popupHandler(['MGN/Billings.jpg'], 'turn')}
              tabIndex="0"
            >
              Billings Gazette Article: “Radio Ad Attacks Court Candidate
              Sheehy”
            </u>
            <br />
            Article discussing radio attack ad on Ed Sheehy funded by the
            Montana Growth Network
          </li>
          <li className="material-item">
            <u
              onClick={() => popupHandler(['MGN/Website.jpg'], 'turn')}
              onKeyPress={() => popupHandler(['MGN/Website.jpg'], 'turn')}
              tabIndex="0"
            >
              Montana Growth Network website
            </u>
          </li>
          <li className="material-item">
            <u
              onClick={() => popupHandler(['MGN/Map.jpg'], 'turn')}
              onKeyPress={() => popupHandler(['MGN/Map.jpg'], 'turn')}
              tabIndex="0"
            >
              Map of Ruby River and Bridges
            </u>
            <br />
            Map of the remote Ruby River and the bridges crossing or providing
            access to it
          </li>
          <li className="material-item">
            <u
              onClick={() => popupHandler(['MGN/Guide.jpg'], 'turn')}
              onKeyPress={() => popupHandler(['MGN/Guide.jpg'], 'turn')}
              tabIndex="0"
            >
              Ruby River Fishing Guide
            </u>
            <br />
            Guide to the Ruby River, including physical description, access
            points, and challenges to recreation on the river
          </li>
          <li className="material-item">
            <u
              onClick={() => popupHandler(['MGN/Case-1.png', 'MGN/Case-2.png',
                                           'MGN/Case-3.png', 'MGN/Case-4.png',
                                           'MGN/Case-5.png', 'MGN/Case-6.png'],
                                           'turn')}
              onKeyPress={() => popupHandler(
                                  ['MGN/Case-1.png', 'MGN/Case-2.png',
                                   'MGN/Case-3.png', 'MGN/Case-4.png',
                                   'MGN/Case-5.png', 'MGN/Case-6.png'],
                                   'turn')}
              tabIndex="0"
            >
              Active Montana Supreme Court Case
            </u>
            <br />
            Active case disputing landowners rights to create barriers limiting
            access to the Ruby River where it crosses into private property
          </li>
        </ul>
        <p>
          After reading all the available materials, if you want a hint
          read&nbsp;
          <u
            onClick={() => popupHandler(['MGN/Guardian.jpg'], 'turn')}
            onKeyPress={() => popupHandler(['MGN/Guardian.jpg'], 'turn')}
            tabIndex="0"
          >
            this additional material
          </u>
          . Please note that the Hint material would
          not have been available to voters prior to the election.
        </p>
      </div>

    var solutionChoices =
      <div className="main-text options">
        <form onSubmit={handleSubmit}>
          <p>
            Hundreds of thousands of dollars of dark money were poured into the
            Montana Supreme Court election because:
          </p>
          <br />
          <label>
            <input
              type="radio"
              name="solution"
              value="0"
              onClick={handleClick}
              onKeyPress={handleClick}
            />
            A conservative group was angry that Ed Sheehy defended the
            Christmas Day Killer, and was concerned he will abolish the death
            penalty if he gets onto the Supreme Court.
          </label>
          <p className="option" style={{color: "red"}}>
            This is not the correct answer. Try again or read the solution.
          </p>
          <label>
            <input
              type="radio"
              name="solution"
              value="1"
              onClick={handleClick}
              onKeyPress={handleClick}
            />
            Private landowners wanted to get rid of the Stream Access Law, and
            they thought a more conservative judge was more likely to side with
            them.
          </label>
          <p className="option" style={{color: "green"}}>
            You are correct! Click button below to see the complete solution.
          </p>
          <label>
            <input
              type="radio"
              name="solution"
              value="2"
              onClick={handleClick}
              onKeyPress={handleClick}
            />
            Coal and oil companies wanted to limit the public’s access to
            rivers so that they could increase their energy outputs in those
            areas.
          </label>
          <p className="option" style={{color: "red"}}>
            This is not the correct answer. Try again or read the solution.
          </p>
          <input className="submit" type="submit" value="Check Your Answer" />
        </form>
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

    var popup = <Popup
                  material={material}
                  type={popupType}
                  unmountMe={unmountMe}
                />

    return (
      <React.Fragment>
        <Scenario
          intro={intro}
          factSheet={factSheet}
          voterMaterials={voterMaterials}
          popup={popup}
          solutionChoices={solutionChoices}
          solution={solution}
          action={this.props.action}
          handleClickAway={handleClickAway}
        />
      </React.Fragment>
    )
  }
}

export default withPopupAndForm(Montana)
