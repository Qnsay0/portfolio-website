

interface ProjectCardProps {
    onClick: () => void;
    indexNumber: number;
    cardTitle: string;
}
const ProjectCard =({onClick,indexNumber,cardTitle}: ProjectCardProps) => {
    return (
        <button onClick={onClick}>
             <div className="number"><h1>{indexNumber}</h1></div>
             <div className="title">{cardTitle}</div>
        </button>  
    )
}

export default ProjectCard;