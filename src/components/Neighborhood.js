import React, { Component } from 'react'
import Scenario from './Scenario'
import InputHandler from './InputHandler'

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
          <li className="fact-item">Population: 74,000</li>
          <li className="fact-item">Median age: 35.9 years</li>
          <li className="fact-item">Main industry: technology</li>
          <li className="fact-item">
            Housing density: 2,760.6 units per square mile (semi-urban)
          </li>
          <li className="fact-item">Renters to Homeowners: 58% to 42%</li>
          <li className="fact-item">
            Known for: being home to Google, Symantec, Intuit, and Mozilla
          </li>
          <li className="fact-item">Unemployment rate: 5%</li>
          <li className="fact-item">
            Contentious issues in the 2014 election: raising the minimum wage,
            rent control, building housing developments, transportation
            infrastructure
          </li>
        </ul>
      </div>

    var voterMaterials =
      <div className="main-text">
        <ul>
          <li className="material-item">
            <u>
              About Mountain View City
            </u>
            <br />
            Description of Mountain View from the local government website
          </li>
          <li className="material-item">
            <u>
              Mountain View Voice article: “Voter Guide: City Council”
            </u>
            <br />
            Discusses most important issues in election, like methods to
            preserve affordable housing
          </li>
          <li className="material-item">
            <u>
              Mountain View Voice article: “Candidates Challenged on ‘Rent
              Stabilization’”
            </u>
            <br />
            Discusses candidate stances on rent control versus other forms of
            providing affordable housing
          </li>
          <li className="material-item">
            <u>
              Pat Showalter website
            </u>
            <br />
            About section from Pat Showalter’s campaign website
          </li>
          <li className="material-item">
            <u>
              Mountain View City Map
            </u>
          </li>
          <li className="material-item">
            <u>
              Neighborhood Empowerment Coalition website
            </u>
            <br />
            NEC priorities list from their website
          </li>
          <li className="material-item">
            <u>
              Pat Showalter Flier
            </u>
            <br />
            Flier distributed by the NEC advocating for Pat Showalter
          </li>
        </ul>
      </div>

    var solutionChoices =
      <div className="main-text">
        <p>
          The special interest that funneled campaign spending through the NEC
          to affect the outcome of the Mountain View City Council was:
        </p>
        <br />
        <p>
          <input
            type="radio"
            name="solution"
            onClick={() => InputHandler(0)}
          />
          A coalition of landlords who wanted to make sure rent control was not
          implemented in Mountain View.
        </p>
        <p className="option" style={{color: "green"}}>
          You are correct! Click button below to see the complete solution.
        </p>
        <p>
          <input
            type="radio"
            name="solution"
            onClick={() => InputHandler(1)}
          />
          An environmentalist group who wanted green solutions to Mountain
          View’s housing problem.
        </p>
        <p className="option" style={{color: "red"}}>
          This is not the correct answer. Try again or read the solution.
        </p>
        <p>
          <input
            type="radio"
            name="solution"
            onClick={() => InputHandler(2)}
          />
          A large tech company who wanted a new housing development so that
          their employees’ rent was less expensive.
        </p>
        <p className="option" style={{color: "red"}}>
          This is not the correct answer. Try again or read the solution.
        </p>
      </div>

    var solution =
      [
        <div className="slide-text">
          <strong>Who is the Neighborhood Empowerment Coalition?</strong>
          <p>
            The NEC is funded by the California Apartment Association, the
            California branch of the largest property owners association in the
            country. They represent the interest of the rental housing
            industry.
          </p>
          <strong>Role in the election</strong>
          <p>
            The NEC spent $83,000 in the City Council election to support 3
            candidates out of the 9 running for 3 seats. All 3 candidates
            opposed rent control, which was a popular solution to the city’s
            housing cost crisis. The California Apartment Association opposed
            rent controls on behalf of the property owners in Mountain View,
            where 58% of the population are renters.
          </p>
        </div>,
        <div className="slide-text">
          <strong>Result</strong>
          <p>
            2 out of 3 of the candidates backed by NEC funding won seats on the
            City Council, including Pat Showalter. Rent control was not an
            issue discussed by the Council until years later when a ballot
            measure passed demanding action on the issue.
          </p>
          <p>
            It is important to note that none of the candidates coordinated
            with the NEC or knew about the CAA involvement.
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
      ]

    return (
      <React.Fragment>
        <Scenario
          intro={intro}
          factSheet={factSheet}
          voterMaterials={voterMaterials}
          solutionChoices={solutionChoices}
          solution={solution}
          action={this.props.action}
        />
      </React.Fragment>
    )
  }
}

export default Neighborhood
