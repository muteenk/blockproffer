import React from 'react'
import { useContext } from 'react'
import { PollContext } from '../../Helpers/Contexts'

function StartMenu() {
    const { question, setQuestion } = useContext(PollContext)
  return (
    <div>
        <h1>Poll Questions</h1>
        <div className='rules'>
            <h2>Rules</h2>
            <p>
                <ul>
                    <li>
                        If you are a citizen of India and above 18 years of age, you are eligible to cast your vote in the elections. As per the Constitution of India, every Indian citizen who is of sound mind is given a universal voting right. The voter is not discriminated on the basis of factors like religion, caste, creed, economic status, etc. It does not matter the religion he/she belongs to and if he/she is rich or poor.
                    </li>
                    <li>
                        The Indian Constitution clearly lays down the eligibility criterion for voting in India. The people who meet the following eligibility criteria can vote in the elections: 
                        <ul>
                            <li>You should be an Indian citizen.</li>
                            <li>You must be above 18 years of age.</li>
                        </ul>
                    </li>
                    <li>
                        If you fulfil the above criteria, you are eligible to vote for the following types of elections held in the country:
                        <ul>
                            National-level elections
                            State-level elections
                            Local government body elections
                            District-level elections 
                        </ul>
                    </li>
                    <li>
                        As per the voting rules,
                        <ul>
                            <li>
                                You can cast only one vote. 
                            </li>
                            <li>
                                You must have Voter ID or EPIC card or photo identity election card.
                            </li>
                            <li>
                                You can vote only at your registered constituency.
                            </li>
                            <li>
                                Here, the registered constituency implies that the voters need to get themselves registered in a particular constituency, which should be a place they live in. From that particular constituency, the authority will provide them with an EPIC card or the photo election ID card or Voter ID card. 
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
        </div>
        <button className='start-btn' onClick= {() => setQuestion("poll")}>
            Start
        </button>
    </div>
  )
}

export default StartMenu