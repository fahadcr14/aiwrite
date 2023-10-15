import ToolsWdiget from "./toolswidget"


import { Metadata } from 'next';
export const metadata: Metadata= {
  title: 'X-writer Tools',
  description: 'Generative Ai Tools For Free',
}

export default function Tools() {

  return (
     
     <div className="">
     <ToolsWdiget/>
     </div>
  )
}
