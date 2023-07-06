import ProjectPic from './codelaptop.jpg';

function Project({ title }) {
  return (

    <div className="card">
      <img src={ProjectPic} alt="Project" />
      <h3>{title}</h3>
    </div>
  );
}

export default Project;
