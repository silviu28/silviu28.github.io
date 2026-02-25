import './App.css'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import TextContainer from './components/TextContainer'
import HorizontalList from './components/HorizontalList'
import Badge from './components/Badge'
import Shelf from './components/Shelf'
import CarouselGallery from './components/CarouselGallery'
import content from './content.json'
import Modal from './components/Modal'
import { useState } from 'react'
import PleaseWait from './components/ComingSoon'


const App = () => {
  // const [modalTitle, setModalTitle] = useState('')
  // const [modalContent, setModalContent] = useState('')

  // const disposeModal = () => {
  //   setModalTitle('')
  //   setModalContent('')
  // }

  // const displayInfo = img => {
  //   switch (img) {
  //   case 'calc.png': {
  //     setModalTitle(content.calculator.title)
  //     setModalContent(content.calculator.description)
  //     break
  //   }
  //   case 'cards.png': {
  //     setModalTitle(content.cards.title)
  //     setModalContent(content.cards.description)
  //     break
  //   }
  //   case 'controller.png': {
  //     setModalTitle(content.controller.title)
  //     setModalContent(content.controller.description)
  //     break
  //   }
  //   case 'restaurant1.png': {
  //     setModalTitle(content.restaurant.title)
  //     setModalContent(content.restaurant.description)
  //     break
  //   }
  //   case 'shooter1.png': {
  //     setModalTitle(content.shooter.title)
  //     setModalContent(content.shooter.description)
  //     break
  //   }
  //   default: break
  //   }
  // }

  return <PleaseWait />
  // return (
  //   <div className='fixed-bg'>
  //     { modalContent 
  //       ? <Modal title={modalTitle} message={modalContent} onClose={() => disposeModal()}/> 
  //       : '' }
  //     <Navbar />
  //     <br />

  //     <Marquee>
  //       {'                <> Hey, I\'m Silviu. </>                '}
  //     </Marquee>
  //     <br />

  //     <TextContainer>
  //       <HorizontalList>
  //         <h2>
  //           <mark>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  //               <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
  //             </svg>
  //             Brasov, RO
  //           </mark>
  //         </h2>
  //         <a href={content.github}>
  //           <mark>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  //               <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
  //             </svg>
  //              Github
  //           </mark>
  //         </a>
  //         <a href={content.linkedin}>
  //           <mark>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  //               <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
  //             </svg>
  //              Linkedin
  //           </mark>
  //         </a>
  //         <a href={content.resume}>
  //           <mark>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
  //               <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
  //             </svg>
  //              Resume
  //           </mark>
  //         </a>
  //       </HorizontalList>
  //     </TextContainer>
  //     <br />

  //     <TextContainer>
  //       <h2>
  //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
  //           <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
  //         </svg>
  //         {' Aspiring Engineer'}</h2>
  //       <p>I'm interested in programming. I'm a big fan of web development and backend. I'm flexible and I like helping others, always bringing ideas on the table. :)</p>
  //       <p>Currently pursuing: Web Development</p>
  //     </TextContainer>

  //     <br />

  //     <TextContainer>
        
  //       <h2>
  //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
  //           <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
  //         </svg>
  //         {' Programming languages I use'}
  //       </h2>
  //       <Shelf rows={2} cols={3}>
  //         <Badge src='c++.png' />
  //         <Badge src='java.png' />
  //         <Badge src='cs.png' />
  //         <Badge src='js.png' />
  //         <Badge src='py.png' />
  //         <Badge src='sql.png' />
  //       </Shelf>
  //     </TextContainer>

  //     <br />

  //     <TextContainer>
  //       <h2>
  //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
  //           <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
  //         </svg>
  //         {' Tools and frameworks I have a knack for'}
  //       </h2>
  //       <Shelf rows={1} cols={5}>
  //         <Badge src='node.png' />
  //         <Badge src='react.png' />
  //         <Badge src='dotnet.png' />
  //         <Badge src='tensorflow.png' />
  //         <Badge src='cv.png' />
  //       </Shelf>
  //     </TextContainer>

  //     <br />

  //     <TextContainer>
  //       <h2>
  //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-android" viewBox="0 0 16 16">
  //           <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  //         </svg>
  //         {' What I\'m working on'}
  //       </h2>
  //       <h3>Machine-Learning Assisted image adjustment tool</h3>
  //       <p>For my bachelor's degree, I'm working on a cross-platform mobile app to help with photo editing in the age of artificial intelligence</p>
  //       <h3>Technologies I'm using:</h3>

  //       <Shelf rows={1} cols={4}>
  //         <Badge src='flutter.png' />
  //         <Badge src='tensorflow.png' />
  //         <Badge src='py.png' />
  //         <Badge src='cv.png' />
  //       </Shelf>
  //     </TextContainer>

  //     <br />

  //     <TextContainer id='projects'>
  //       <h2>
  //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
  //           <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
  //         </svg>
  //         {' My other projects'}
  //       </h2>
  //       <CarouselGallery 
  //         images={[
  //           'calc.png',
  //           'cards.png',
  //           'controller.png',
  //           'restaurant1.png',
  //           'shooter1.png',
  //         ]} 
  //         onImageClick={displayInfo}
  //       />
  //     </TextContainer>
  //     <footer>© 2025 Bunduc Silviu-Cristian. All assets personal or from public domain. Non-commercial use.</footer>
  //   </div>
  // )
}

export default App
