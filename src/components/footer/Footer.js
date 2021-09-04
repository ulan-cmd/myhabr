import React from 'react';
import styles from './Footer.module.css';

const styles1 = {textAlign:'center',color:'red',fontSize:'22px'};
const styles2 = {textAlign:'center',color:'blue',fontSize:'15px'};
const isAdmin = false;

class Footer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title:'Footer'
        }
    }

    render(){
        return(
            <div onClick={ () => this.setState({ title:'Теперь не футер' } ) } className={styles.footerBlock}>
                <h3 style={isAdmin ? styles1 : styles2}>{this.state.title}</h3>
            </div>
        )
    }
}

export default Footer;