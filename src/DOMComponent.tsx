import DomComponentOK from "web/DOMComponent2"
import DomComponentFAIL from "./DOMComponent2";

export default function DomComponent(){
    return (
      <>
        <div className="font-bold">dom component</div>
        <DomComponentOK />
        <DomComponentFAIL />
      </>
    );
}