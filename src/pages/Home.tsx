import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput'
import { useState } from 'react';


const Home = () => {
      const [mood, setMood] = useState<string>("");
      const [subject,setSubject]=useState("");
      const [footer,setFooter] =useState("");
      const[generated,setGenerated]=useState(false);

      const handleGenerate=()=>{
        const lowerMood=mood.toLowerCase();
        if(lowerMood.includes('happy')){
          setSubject("Feeling gret Today!..");
          setFooter("stay Awesome");
        }
        else if (lowerMood.includes("sad")) {
          setSubject("tough day");
          setFooter("sending hugs");
        } else if (lowerMood.includes("angry")) {
          setSubject("just gool");
          setFooter("ok just sleep");
        } else {
          setSubject("mood update");
          setFooter("catch you later");
        }

       setGenerated(true)
      
      }
    const handleReset=()=>{
      setMood("");
      setSubject("");
      setGenerated(false);
      setFooter("")
    }
  return (
    <div className="max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6">
      <h2 className="text-2x font-bold text-gray-800">Mood mail generator</h2>
      {!generated ? (
        <MoodInput
          mood={mood}
          setMood={setMood}
          onGenerate={handleGenerate}
          disabled={generated}
        />
      ) : (
        <MoodOutput 
          subject={subject} 
          footer={footer} 
          onRest={handleReset} 
        />
      )}
    </div>
  );
}

export default Home