import ContactInfo from './contact-info';
import { SectionHeader } from '@/components/global';
function Contact() {
    return (
        <div className='contact pb-4' id='contact'>
            <div className='container mx-auto px-4'>
                <SectionHeader title='Say Hi' image='./images/hi.jpg' />
                <div>
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}

export default Contact;
