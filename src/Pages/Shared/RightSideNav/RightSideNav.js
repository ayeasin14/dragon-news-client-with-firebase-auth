import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const GoogleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleLogin} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button className='mb-2' variant="outline-dark"> <FaGithub /> Login with GitHub</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch /> Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp /> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;