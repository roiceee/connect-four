import Image from "next/image";
import { Button} from "react-bootstrap";

interface InstructionProps {
    onClick: () => void;
}


function Instruction({onClick} : InstructionProps) {
  return (
    <div className="bg-black p-3 rounded-3 bg-opacity-75 d-flex flex-column">
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-center">How to play?</h2>
        <ul>
          <li>Play with a friend.</li>
          <li>Win the game by placing four same-colored blocks in a row.</li>
        </ul>
      </div>
      <div className="gap-3 text-center justify-content-center d-flex flex-column flex-md-row">
        <div>
          <Image
            src={"/images/ins1.png"}
            alt="Horizontal"
            height={120}
            width={120}
            priority={true}
            placeholder="blur"
          />
          <div>Horizontal</div>
        </div>
        <div>
          <Image
            src={"/images/ins3.png"}
            alt="Vertical"
            height={120}
            width={120}
            priority={true}
            placeholder="blur"
          />
          <div>Vertical</div>
        </div>
        <div>
          <Image
            src={"/images/ins2.png"}
            alt="Diagonal"
            height={120}
            width={120}
            priority={true}
            placeholder="blur"
          />
          <div className="text-center">Diagonal</div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button className="w-75" variant="light" onClick={onClick}>Continue</Button>
      </div>
    </div>
  );
}

export default Instruction;
