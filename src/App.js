import logo from './logo.svg';
import './App.css';
import Section from './component/Section';
import { DragDropContext ,Droppable } from 'react-beautiful-dnd';

function App() {
  const profileSummary = [
    {
      id:'Profile',
      text: 'Profile Sumary',
      desp:"Concise and informative statement that provides an overview of a person's professional background, skills, and achievements. It is typically included in a resume, CV, or professional networking profiles."

    }
    ,
    {
      id:'Academic',
      text: 'Academic and Cocurricular Achievements',
      desp:'Describe your major academic accomplishments, such as honours, scholarships, and prizes. Include any noteworthy extracurricular accomplishments as well, such as involvement in organisations, competitions, or volunteer work.'
     
    },
    {
      id:'Summer',
      text: 'Summer Internship Experience',
      desp:'Tell us about the internships you have done during the summer. Mention the businesses or organisations where you interned, your tasks and roles, and the abilities or knowledge you attained.'
     
    },
    {
      id:'Work',
      text: 'Work Experience',
      desp:"Describe your prior employment in detail, mentioning the businesses or organisations you worked for, the positions you held, and the duties and responsibilities you carried out. Highlight any standout accomplishments or talents you've acquired while working there."
    },
    {
      id:'Projects',
      text: 'Projects',
      desp:'Any relevant projects you have worked on should be listed and explained. Include any projects you are working on, whether they be for school, work, or elsewhere. Give a succinct description of each project, the tools or technology you employed, and any noteworthy results or successes.'
    },
    {
      id:'Certifications',
      text: 'Certifications',
      desp:'Any certificates you hold should be mentioned. This could include professional development classes, specialised training programmes, or industry certifications. Indicate the name of the certification, the name of the organisation that issued it, and any other relevant information.'
    },
    {
      id:'Leadership',
      text: 'Leadership Positions',
      desp:'Describe any positions of leadership you have had. Positions in clubs, sports teams, or community organisations could fall under this category. Be sure to emphasise your roles, accomplishments, and leadership qualities.'
    },
    {
      id:'Extracurricular',
      text: 'Extracurricular',
      desp:'Talk about your involvement in leadership positions and extracurricular activities not related to your studies. This can include pastimes, athletic endeavours, creative endeavours, volunteer work, or any other activities that highlight your wide range of interests and abilities.'
    },
    {
      id:'Education',
      text: 'Education',
      desp:'Tell us a little bit about your academic background. Include the schools you attended, the degrees you have or plan to receive your major or area of study, and any noteworthy academic awards or achievements.'
    },
   
  ];
  return (
    <>
     <Section summary={profileSummary}/>
    </>
  );
}

export default App;
