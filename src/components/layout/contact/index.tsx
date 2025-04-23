import ContactInfo from './contact-info';
import ContactForm from './contact-form';
import { SectionHeader } from '@/components/global';
function Contact() {
    return (
        <div className='contact pb-4' id='contact'>
            <div className='container mx-auto px-4'>
                <SectionHeader title='Say Hi' image='./images/hi.jpg' className=' !justify-end' />
                <div className='flex flex-col mlg:flex-row gap-3'>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;
