import React from 'react'

export default function Footer() {
        const dateYear = new Date().getFullYear

        return (
                <footer>
                        <div className="container footer">
                               <p>Copy right &copy; {2022}</p> 
                        </div>
                </footer>
        )
}
