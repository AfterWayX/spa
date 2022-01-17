import './button.scss';


function Button({link, content, customClass}) {
  return (
    <div className={customClass? (customClass + ' linkYellow') : 'linkYellow'}>
        <a to={link}>{content}</a>
    </div>
  );
}

export default Button;

