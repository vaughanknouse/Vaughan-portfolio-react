function Project({
  title,
  description,
  imgSrc,
  repoLink,
  liveLink,
  techStack,
}) {
  return (
    <div className='card shadow-sm'>
      <img src={imgSrc} className='card-img-top' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <p>
          <strong>Technologies:</strong> {techStack.join(', ')}
        </p>
        <div className='btn-group'>
          <a
            href={repoLink}
            target='_blank'
            className='btn btn-outline-primary'>
            GitHub Repo
          </a>
          <a
            href={liveLink}
            target='_blank'
            className='btn btn-outline-primary'>
            Deployed Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
