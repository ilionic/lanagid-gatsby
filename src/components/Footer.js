import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        
                        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto:svetagid@gmail.com" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                   
                </div>
            </div>
        )
    }
}

export default Footer
