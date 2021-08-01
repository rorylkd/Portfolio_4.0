import React from 'react';
import Project from './Project';
import MoovieScreenshot from '../assets/moovieproScreenshot_compressed.png';
import CoachRoachScreenshot from '../assets/coachRoachScreenshot2_compressed.png'
import WeatherScreenshot from '../assets/weatherdashScreenshot_compressed.png'

export default function Portfolio() {
    return(
        <div>
            <Project title="Moovie.pro" link="https://moovie.pro/" githubLink="https://github.com/busy-boys/movie-master" img={MoovieScreenshot}/>
            <Project title="Coachroach.me" link="https://coachroach.me/login" githubLink="https://github.com/busy-boys/coach-roach" img={CoachRoachScreenshot}/>
            <Project title="Weather Dashboard" link="https://rorylkd.github.io/WeatherDashboard/" githubLink="https://github.com/rorylkd/WeatherDashboard" img={WeatherScreenshot}/>
        </div>
        
        
    )
}