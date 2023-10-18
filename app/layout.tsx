import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
export const metadata={
    title:"Dribble",
    description:"Drible is the new technologies Bro!"
}
const Layout=({children}:{children:React.ReactNode})=>{
    return(
        <html>
            <body>
                <div>
                    <nav><Navbar/></nav>
                    {children}
                    <footer><Footer/></footer>
                </div>
            </body>
        </html>
    )
}

export default Layout