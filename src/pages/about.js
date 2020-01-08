import React from 'react'
import Layout from '../components/layout'
import Career from './components/career'
import Skill from './components/skills'
import Education from './components/education'
export default () => (
    <Layout>
        <div class="container">

            <h3>About</h3>
            <p className="pl-2">I am <b>Shaik Heena</b>. Flexible , Reliable and possess excellent time keeping skills. Love to
                understanding people's problems and finding ways to solve them. Handling work independently in
                busy environment and also within a team setting. And always open up for new challenges. Strive
                to learn and teach as much as i can. Good team player with good Communication skills with strong
                                attitude towards learning new technologies.</p>
            <Career/>
            <hr />
            <Skill/>
            <hr />
            
            <Education/>
        </div>
    </Layout>
)
// Acha superb and about may experience nako and header may Experience link create karo and experiences kako page create karko va rakho Experience component
// Understand
//ok


