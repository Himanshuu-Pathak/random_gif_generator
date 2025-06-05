
import Random from "./components/Random"
import Tag from "./components/Tags"

export default function App(){
  return (
     <div className="w-full h-screen flex flex-col background relative overflow-x-hidden">
      <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold ">Random GIFs</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>
     </div>
  );
}
