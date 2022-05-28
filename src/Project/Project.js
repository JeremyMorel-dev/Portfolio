import translation from './ProjectTranslation'
import '../App.css';
import './Project.css';
import { Typography } from '@mui/material';
import { DiGithubBadge, DiJavascript1, DiPython } from "react-icons/di";
import { FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si"
import pippiTrackPNG from "../projectLogo/pippitrack.png"

function Project ({ lang }) {
    return (
        <div className="ProjectComponent">
            <Typography
                variant='h4'
            >
                <strong>{translation.title[lang]}</strong>
            </Typography>
            <OwnProject
                lang={lang}
                translation={translation.ownProject}
            />
             <OtherProjects
                lang={lang}
                translation={translation.participateProject}
            />
        </div>
    )
}

function OwnProject( {lang, translation }) {
    return (
        <div className='ownProjectComponent'>
            <Typography
                variant='h5'
            >
                <strong>{translation.title[lang]}</strong>
            </Typography>
            <Typography
                variant="body1"
                className='ownProjectDescription'    
            >
                {translation.description[lang]}
            </Typography>
            <OsuRandomTournament 
                lang={lang}
                translation={translation.ort}
            />
            <HoloArt
                lang={lang}
                translation={translation.holoArt}
            />
        </div>
    )
}

function OtherProjects({ lang, translation }) {
    return (
        <div className='otherProjectsComponent'>
            <Typography
                variant='h5'
            >
                <strong>{translation.title[lang]}</strong>
            </Typography>
            <Typography>{translation.description[lang]}</Typography>
            <PippiTrack
                lang={lang}
                translation={translation.pippiTrack}
            />
        </div>
    )
}

function HoloArt({ lang, translation }) {
    return (
        <div className='osuRandomTournamentComponent'>
            <Typography
                variant='h6'
            >
                <strong>{translation.title}</strong>
            </Typography>
            <Typography
                variant='body1'
                align='justify'
            >
                {translation.description[lang]}
            </Typography>
            <div>
                <div className='technoComponent'>
                    <div className='technoIcons'>
                        <div>
                            <DiJavascript1 size={48} />
                        </div>
                        <div>
                            <FaReact size={48} />
                        </div>
                        <div>
                            <FaNodeJs size={48} />
                        </div>
                    </div>
                </div>
                <div className='githubInfo'>
                    <div>
                    <DiGithubBadge size={48} />
                    </div>
                    <div>
                        <span>{translation.githubLink[lang]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OsuRandomTournament({ lang, translation }) {
    return (
        <div className='osuRandomTournamentComponent'>
            <Typography
                variant='h6'
            >
                <strong>{translation.title}</strong>
            </Typography>
            <Typography
                variant='body1'
                align='justify'
            >
                {translation.description[lang]}
            </Typography>
            <OrtJokerBot
                lang={lang}
                translation={translation.jokerBot}
            />
            <OrtWebsite
                lang={lang}
                translation={translation.ortWebsite}
            />
        </div>
    )
}

function OrtJokerBot( { lang, translation }) {
    return (
        <div>
            <Typography 
                variant='body1'
            >
                <strong>{translation.title}</strong>
            </Typography>
            <Typography
                variant='body1'
                align='justify'
                className='jokerBotDescription'
            >
                {translation.description[lang]}
            </Typography>
            <div>
                <div className='technoComponent'>
                    <div className='technoIcons'>
                        <div>
                            <DiJavascript1 size={48} />
                        </div>
                    </div>
                </div>
                <div className='githubInfo'>
                    <div>
                    <DiGithubBadge size={48} />
                    </div>
                    <div>
                    <a href={translation.githubLink} className='githubLink'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OrtWebsite({ lang, translation }) {
    return (
        <div>
            <Typography 
                variant='body1'
            >
                <strong>{translation.title}</strong>
            </Typography>
            <Typography
                variant='body1'
                align='justify'
                className='ortWebsiteDescription'
            >
                {translation.description[lang]}
            </Typography>
            <div>
                <div className='technoComponent'>
                    <div className='technoIcons'>
                        <div>
                            <DiJavascript1 size={48} />
                        </div>
                        <div>
                            <FaVuejs size={48} />
                        </div>
                        <div>
                            <DiPython size={48} />
                        </div>
                    </div>
                </div>
                <div className='githubInfo'>
                    <div>
                    <DiGithubBadge size={48} />
                    </div>
                    <div>
                    <a href={translation.githubLink} className='githubLink'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PippiTrack({ lang, translation }) {
    return (
        <div>
            <a href={translation.link} className="pippiTrackTitle">
                <img src={pippiTrackPNG} className="pippiTrackLogo"/>
                <strong>{translation.title}</strong>
            </a>
            <div>
            <Typography
                variant='body1'
                align='justify'
            >
                {translation.description[lang]}
            </Typography>
            </div>
            <div>
                <div className='technoComponent'>
                    <div className='technoIcons'>
                        <div>
                            <SiTypescript size={48} />
                        </div>
                    </div>
                </div>
                <div className='githubInfo'>
                    <div>
                    <DiGithubBadge size={48} />
                    </div>
                    <div>
                    <a href={translation.githubLink} className='githubLink'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;