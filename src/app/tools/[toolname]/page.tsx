import { Metadata } from 'next';
import ToolsWdiget from '../toolswidget';
import ChatWidget from '../components/chatwidget';

export default function ToolPage() {
  

  // Use the "toolname" parameter to fetch or display data

  // ...

  return (
    <div>
      {/* Set the page title dynamically */}
      <ChatWidget />
    </div>
  );
}
