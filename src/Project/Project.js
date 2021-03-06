import './Project.css';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { DiGithubBadge, DiJavascript1, DiPython } from "react-icons/di";
import { FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si"
import pippiTrackPNG from "../projectLogo/pippitrack.png"

const ownProjects = [{
        acronym: "ort",
        projects: [{
                acronym: "ortWebsite",
                technoUsed: [<DiJavascript1 size={48} />, <FaVuejs size={48} />, <DiPython size={48} />]
            },
            {
                acronym: "ortBot",
                technoUsed: [<DiJavascript1 size={48} />, <FaNodeJs size={48} />]
            }],
    },
    {
        acronym: "holoArt",
        technoUsed: [<DiJavascript1 size={48} />, <FaReact size={48} />, <FaNodeJs size={48} />]
    }];

const otherProjects = [{
        acronym: "pippiTrack",
        logo: pippiTrackPNG,
        technoUsed: [<SiTypescript size={48} />]
    }]

function Project () {
    const { t, i18n } = useTranslation();
    return (
        <div className="ProjectComponent">
            <Typography
                variant='h4'
            >
                <strong>{t('projects.title')}</strong>
            </Typography>
            <OwnProject/>
             <OtherProjects/>
        </div>
    )
}

function OwnProject() {
    const { t, i18n } = useTranslation();
    return (
        <div className='ownProjectComponent'>
            <Typography
                variant='h5'
            >
                <strong>{t('projects.ownTitle')}</strong>
            </Typography>
            <Typography
                variant="body1"
                className='ownProjectDescription'    
            >
                {t('projects.ownDescription')}
            </Typography>
            {ownProjects.map(project =>{
                    return (
                        <Subject
                                acronym={project.acronym}
                                projects={project.projects}
                                technoUsed={project.technoUsed}
                                logo={project.logo}
                                key={project.acronym}
                        />
                    )
                }
            )}
        </div>
    )
}

function OtherProjects() {
    const { t, i18n } = useTranslation();
    return (
        <div className='otherProjectsComponent'>
            <Typography
                variant='h5'
            >
                <strong>{t('projects.othersTitle')}</strong>
            </Typography>
            <Typography>{t('projects.othersDescription')}</Typography>
            {otherProjects.map(project =>{
                    return (
                        <Subject
                                acronym={project.acronym}
                                projects={project.projects}
                                technoUsed={project.technoUsed}
                                logo={project.logo}
                                key={project.acronym}
                        />
                    )
                }
            )}
        </div>
    )
}
function Subject({ acronym, projects, technoUsed, logo }) {
    const { t, i18n } = useTranslation();
    let technoComp;
    let logoComp;
    let subProjectComp;
    if (technoUsed) {
        technoComp = <SubjectInfo
                        acronym={acronym}
                        technoUsed={technoUsed}
                    />
    } else {
        technoComp = "";
    }

    if (logo) {
        logoComp = <img src={logo} alt={acronym} className='logo' />
    } else {
        logoComp = "";
    }

    if (projects) {
        subProjectComp = projects.map(project => {
            return <Subject
                        acronym={project.acronym}
                        technoUsed={project.technoUsed}
                        key={project.acronym}
                    />
        })
    } else {
        subProjectComp = "";
    }
    return (
        <div className='subjectComponent'>
            <div className='subjectInfo'>
                {logoComp}
                <Typography
                    variant='h6'
                >
                    <strong>{t("projects."+acronym+".title")}</strong>
                </Typography>
                
            </div>
            <Typography
                variant='body1'
                align='justify'
            >
                {t("projects."+acronym+".description")}
            </Typography>
            {subProjectComp}
            {technoComp}
        </div>
    )
}

function SubjectInfo({ acronym, technoUsed }) {
    const { t, i18n } = useTranslation();
    return ( 
        <div>
            <div className='technoComponent'>
                <div className='technoIcons'>
                    {
                        technoUsed.map(techno => {
                            return (
                                <div>
                                    {techno}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='githubInfo'>
                <div>
                    <DiGithubBadge size={48} />
                </div>
                <div>
                    <a href={t("projects."+acronym+".githubLink")}>{t('projects.link')}</a>
                </div>
            </div>
        </div>
    )
}

export default Project;