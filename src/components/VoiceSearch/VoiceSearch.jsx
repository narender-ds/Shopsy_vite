import 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceSearch = () => {
  const {
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>your Browser Does not Support Voice Search</span>;
  }

  return (
    <div style={{marginTop:"2px"}}>
      <button onClick={SpeechRecognition.startListening} style={{border:"none",background:"none"}}><i className="fa fa-microphone" aria-hidden="true"></i></button>
      <br/>
    </div>
  );
};
export default VoiceSearch;