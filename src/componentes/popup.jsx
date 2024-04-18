import { Back } from '../orden/style';

const Popup = ({ setVisible, isVisible }) => {
    return(
        
        
        
        <Back isVisible={isVisible}>
            <div>
                <button onClick={obj => setVisible(false)}>Cerrar</button> <br /> <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil!
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde illo reprehenderit autem quasi, minima quibusdam optio expedita hic voluptatum!</p>

            </div>
        </Back>



    )
};
    

export default Popup;