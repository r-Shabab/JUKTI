import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../../components/navbar'
import './sass/main.css'
import './css/styles.css'

const IndexPage=()=>{
  return  (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Poppins:wght@300;400;500&family=Quicksand:wght@300;400;500;600;700&family=Trispace&display=swap"
      rel="stylesheet"
    />
    </head>
      < NavBar/>
    </>
  )
}
export default IndexPage;