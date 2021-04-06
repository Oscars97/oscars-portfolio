import TypeWriterEffect from 'react-typewriter-effect';
import "../styles/curriculum.scss";
const Curriculum = () => {
  return (
    <div className="container typewriter">
      <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display', "color":"white" }}
            startDelay={100}
            cursorColor="white"
            text="Currently working on this section..."
            typeSpeed={100}
            scrollArea={document}
          />
    </div>
  );
};

export default Curriculum;
