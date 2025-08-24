import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Ghost } from "lucide-react";

type Props= {
   subject:string,
   footer :string,
   onRest:()=>void
}

const MoodOutput = ({subject,footer,onRest}:Props)  => {
  return (
    <div className="space-y-4 ">
      MoodOutput
      <div className="black font-medium">
        <h2>
          <label className="black font-medium">subject:</label>
          <Input value={subject} readOnly />
        </h2>
      </div>
      <div className="black font-medium">
        <h2>
          <label className="black font-medium">footer:</label>
          <Input value={footer} readOnly />
        </h2>
      </div>

      <Button className="cursor-pointer w-full bg-black text-white" variant="ghost" onClick={onRest}>Rest</Button>
    </div>
  );
}

export default MoodOutput