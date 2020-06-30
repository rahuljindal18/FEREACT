import React from 'react';
import TeamComparison from '../team-comparison/team-comparison.component';
import './match-statistics.styles.css';

const MatchStatistics = ({statistics}) => {
    const {home_team_country, away_team_country} = statistics;
    const home_team_goals = statistics.home_team.goals;
    const away_team_goals = statistics.away_team.goals;
    const {
        attempts_on_goal: home_attempts, 
        on_target: home_ontarget,
        yellow_cards: home_yellocards,
        red_cards: home_redcards
    } = statistics.home_team_statistics;
    const {
        attempts_on_goal: away_attempts, 
        on_target: away_ontarget,
        yellow_cards: away_yellocards,
        red_cards: away_redcards
    } = statistics.away_team_statistics;
    return(
        <div data-test="component-matchstats" className="stats-container">
            <TeamComparison
                data-test="component-matchstats-team"
                left={home_team_country}
                middle="vs"
                right={away_team_country}
            />
            <TeamComparison
                data-test="component-matchstats-team"
                left={home_team_goals}
                middle="goals"
                right={away_team_goals}
            />

            <TeamComparison
                data-test="component-matchstats-team"
                left={home_attempts}
                middle="attempts on goal"
                right={away_attempts}
            />

            <TeamComparison
                data-test="component-matchstats-team"
                left={home_ontarget}
                middle="On Target"
                right={away_ontarget}
            />

            <TeamComparison
                data-test="component-matchstats-team"
                left={home_yellocards}
                middle="Yello cards"
                right={away_yellocards}
            />

            <TeamComparison
                data-test="component-matchstats-team"
                left={home_redcards}
                middle="Red cards"
                right={away_redcards}
            />
            

            
        </div>
        
    )
}

export default MatchStatistics;